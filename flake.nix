{

  nixConfig.allow-import-from-derivation = false;

  inputs.nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  inputs.treefmt-nix.url = "github:numtide/treefmt-nix";

  outputs =
    { self, ... }@inputs:
    let

      pkgs = inputs.nixpkgs.legacyPackages.x86_64-linux;

      treefmtEval = inputs.treefmt-nix.lib.evalModule pkgs {
        projectRootFile = "flake.nix";
        programs.prettier.enable = true;
        programs.nixfmt.enable = true;
        programs.biome.enable = true;
        programs.biome.formatUnsafe = true;
        programs.biome.settings.formatter.indentStyle = "space";
        programs.biome.settings.formatter.lineWidth = 100;
      };

      tsc = pkgs.runCommand "tsc" { } ''
        cp -L ${./html.ts} ./html.ts
        cp -L ${./test.ts} ./test.ts
        cp -L ${./gen.js} ./gen.js
        cp -L ${./tsconfig.json} ./tsconfig.json
        ${pkgs.typescript}/bin/tsc
        touch $out
      '';

      test = pkgs.runCommand "tests" { } ''
        cp -L ${./html.ts} ./html.ts
        cp -L ${./gen.js} ./gen.js
        cp -L ${./test.ts} ./test.ts
        ${pkgs.bun}/bin/bun ./test.ts
        touch $out
      '';

      publish = pkgs.writeShellApplication {
        name = "publish";
        runtimeInputs = [ pkgs.bun ];
        text = ''
          repo_root=$(git rev-parse --show-toplevel)
          export NPM_CONFIG_USERCONFIG="$repo_root/.npmrc"
          if [ ! -f "$NPM_CONFIG_USERCONFIG" ]; then
            bunx npm login
          fi
          nix flake check
          bun publish
        '';
      };

      packages = {
        formatting = treefmtEval.config.build.check self;
        typescript = pkgs.typescript;
        publish = publish;
        tsc = tsc;
        test = test;
      };

    in
    {

      packages.x86_64-linux = packages;
      checks.x86_64-linux = packages;

      formatter.x86_64-linux = treefmtEval.config.build.wrapper;
      devShells.x86_64-linux.default = pkgs.mkShellNoCC {
        buildInputs = [
          pkgs.bun
          pkgs.biome
          pkgs.typescript
          pkgs.vscode-langservers-extracted
          pkgs.nixd
          pkgs.typescript-language-server
        ];
      };

    };
}
