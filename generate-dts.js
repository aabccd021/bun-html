const res = await fetch(
  "https://raw.githubusercontent.com/microsoft/vscode-custom-data/refs/heads/main/web-data/data/browsers.html-data.json",
);
const data = await res.json();

let result = `type render = (element: Element) => string;

export const render: render;

type unsafeHtml = (value: string) => Element;

export const unsafeHtml: unsafeHtml;

type AttributeValues = string | number | boolean | null | undefined;

type Element = string | false | undefined | {
    tag: string
    attributes: Record<string, AttributeValues>
    children?: Array<Element>
} | {
    value: string
};

type ElAttributes<A> = GlobalAttributes & A & {
  [k in \`data-\${string}\`]?: AttributeValues
};

type El<A> = (attributes: ElAttributes<A>, children: Element[]) => Element;

type VoidEl<A> = (attributes: ElAttributes<A>) => Element;
`;

const valueSets = Object.fromEntries([
  ...data.valueSets.map((vs) => [vs.name, vs.values.map((item) => `"${item.name}"`).join(" | ")]),
  ["default", "string | number | boolean | null"],
  ["v", "boolean"],
]);

function attrsStr(attrs) {
  if (attrs.length === 0) return "{}";
  const uniqueAttrs = Object.fromEntries(attrs.map(({ name, valueSet }) => [name, valueSet]));
  const res = Object.entries(uniqueAttrs)
    .map(([name, valueSet]) => `  "${name}"?: ${valueSets[valueSet ?? "default"]};`)
    .join("\n");
  return `{\n${res}\n}`;
}

result += `\ntype GlobalAttributes = ${attrsStr(data.globalAttributes)};`;

for (const tag of data.tags) {
  const attrs = attrsStr(tag.attributes);
  const name = tag.name === "var" ? "var_" : tag.name === "object" ? "object_" : tag.name;
  const funcType = tag.void ? "VoidEl" : "El";
  result += `\n\ntype ${name} = ${funcType}<${attrs}>;`;
  result += `\nexport const ${name}: ${name};`;
}

console.log(result);
