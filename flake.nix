{

  nixConfig.allow-import-from-derivation = false;

  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  inputs.treefmt-nix.url = "github:numtide/treefmt-nix";
  inputs.bun2nix.url = "github:baileyluTCD/bun2nix";
  inputs.netero-test.url = "github:aabccd021/netero-test";

  outputs =
    { self, ... }@inputs:
    let
      lib = inputs.nixpkgs.lib;

      collectInputs =
        is:
        pkgs.linkFarm "inputs" (
          builtins.mapAttrs (
            name: i:
            pkgs.linkFarm name {
              self = i.outPath;
              deps = collectInputs (lib.attrByPath [ "inputs" ] { } i);
            }
          ) is
        );

      pkgs = inputs.nixpkgs.legacyPackages.x86_64-linux;

      nodeModules = inputs.bun2nix.lib.x86_64-linux.mkBunNodeModules {
        packages = import ./bun.nix;
      };

      treefmtEval = inputs.treefmt-nix.lib.evalModule pkgs {
        projectRootFile = "flake.nix";
        programs.prettier.enable = true;
        programs.nixfmt.enable = true;
        programs.biome.enable = true;
        programs.biome.settings = builtins.fromJSON (builtins.readFile ./biome.json);
        programs.biome.formatUnsafe = true;
        settings.formatter.biome.options = [ "--vcs-enabled=false" ];
        programs.shfmt.enable = true;
        settings.global.excludes = [
          "LICENSE"
          "*.ico"
        ];
      };

      formatter = treefmtEval.config.build.wrapper;

      check-tsc = pkgs.runCommand "tsc" { } ''
        cp -L ${./index.ts} ./index.ts
        cp -L ${./index.test.js} ./index.test.js
        cp -L ${./tsconfig.json} ./tsconfig.json
        cp -Lr ${nodeModules}/node_modules ./node_modules
        ${pkgs.typescript}/bin/tsc
        touch $out
      '';

      check-biome = pkgs.runCommand "biome" { } ''
        cp -L ${./biome.json} ./biome.json
        cp -L ${./index.ts} ./index.ts
        cp -L ${./index.test.js} ./index.test.js
        cp -L ${./package.json} ./package.json
        cp -L ${./tsconfig.json} ./tsconfig.json
        cp -Lr ${nodeModules}/node_modules ./node_modules
        ${pkgs.biome}/bin/biome check --vcs-enabled=false
        touch $out
      '';

      check-tests = pkgs.runCommand "tests" { } ''
        cp -L ${./index.ts} ./index.ts
        cp -L ${./index.test.js} ./index.test.js
        cp -L ${./package.json} ./package.json
        cp -L ${./tsconfig.json} ./tsconfig.json
        cp -Lr ${nodeModules}/node_modules ./node_modules
        ${pkgs.bun}/bin/bun test
        touch $out
      '';

      publish = pkgs.writeShellApplication {
        name = "publish";
        runtimeInputs = [
          pkgs.jq
          pkgs.bun
          pkgs.curl
        ];
        text = ''
          repo_root=$(git rev-parse --show-toplevel)

          export NPM_CONFIG_USERCONFIG="$repo_root/.npmrc"
          if ! grep -q "_authToken" "$NPM_CONFIG_USERCONFIG"; then
            bunx npm login
          fi

          current_version=$(jq -r .version "$repo_root/package.json")
          name=$(jq -r .name "$repo_root/package.json")
          published_version=$(curl -s "https://registry.npmjs.org/$name" | jq -r '.["dist-tags"].latest')
          if [ "$published_version" = "$current_version" ]; then
            echo "Version $current_version is already published"
            exit 0
          fi
          nix flake check
          bun publish
        '';
      };

      devShells.default = pkgs.mkShellNoCC {
        buildInputs = [
          pkgs.bun
          pkgs.biome
          pkgs.typescript
          pkgs.vscode-langservers-extracted
          pkgs.nixd
          pkgs.typescript-language-server
        ];
      };

      packages = devShells // {
        publish = publish;
        formatting = treefmtEval.config.build.check self;
        formatter = formatter;
        allInputs = collectInputs inputs;
        typescript = pkgs.typescript;
        check-tsc = check-tsc;
        check-biome = check-biome;
        check-tests = check-tests;
        nodeModules = nodeModules;
        bun2nix = inputs.bun2nix.packages.x86_64-linux.default;
        biome = pkgs.biome;
      };

    in
    {

      packages.x86_64-linux = packages // {
        gcroot = pkgs.linkFarm "gcroot" packages;
      };

      checks.x86_64-linux = packages;
      formatter.x86_64-linux = formatter;
      devShells.x86_64-linux = devShells;

    };
}
