const res = await fetch(
  "https://raw.githubusercontent.com/microsoft/vscode-custom-data/refs/heads/main/web-data/data/browsers.html-data.json",
);
const data = await res.json();

const valueSets = Object.fromEntries([
  ...data.valueSets.map((vs) => [vs.name, vs.values.map((item) => `"${item.name}"`).join(" | ")]),
  ["default", "string | number | boolean | null"],
  ["v", "boolean"],
]);

function attrsStr(attrs) {
  if (attrs.length === 0) return "{}";
  const uniqueAttrs = Object.fromEntries(attrs.map(({ name, valueSet }) => [name, valueSet]));
  const result = Object.entries(uniqueAttrs)
    .map(([name, valueSet]) => `  "${name}"?: ${valueSets[valueSet ?? "default"]};`)
    .join("\n");
  return `{\n${result}\n}`;
}

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

type GlobalAttributes = ${attrsStr(data.globalAttributes)};
`;

const escapedNames = {
  var: "var_",
  object: "object_",
};

for (const tag of data.tags) {
  const name = escapedNames[tag.name] ?? tag.name;
  result += `\n\ntype ${name} = ${tag.void ? "VoidEl" : "El"}<${attrsStr(tag.attributes)}>;`;
  result += `\nexport const ${name}: ${name};`;
}

console.log(result);
