function union(arr) {
  return arr.map((item) => `"${item.name}"`).join(" | ");
}

const res = await fetch(
  "https://raw.githubusercontent.com/microsoft/vscode-custom-data/refs/heads/main/web-data/data/browsers.html-data.json",
);
const data = await res.json();

let result = `type render = (element: Element) => string;

export const render: render;

type unsafeHtml = (value: string) => Element

export const unsafeHtml: unsafeHtml;

type AttributeValues = string | number | boolean | null | undefined;

type Element = string | false | undefined | {
    tag: string;
    attributes: Record<string, AttributeValues>;
    children?: Array<Element>;
} | {
    value: string;
};

type ElAttributes<A extends keyof Attributes> = Pick<Attributes, GlobalAttributeNames | A> & {
  [k in \`data-\${string}\`]?: ValueSets["default"]; 
}

type El<A extends keyof Attributes> = (attributes: ElAttributes<A>, children: Element[]) => Element;

type VoidEl<A extends keyof Attributes> = (attributes: ElAttributes<A>) => Element;
`;

result += `
type ValueSets = {
  "default": string | number | boolean | null;
  "v": boolean;
  ${data.valueSets.map((vs) => `"${vs.name}": ${union(vs.values)};`).join("\n  ")}
}`;

const allAttributes = [
  ...data.globalAttributes.map((a) => [a.name, a.valueSet]),
  ...data.tags.flatMap((tag) => tag.attributes.map((a) => [a.name, a.valueSet])),
];

const attributes = {};
for (const [name, newValue] of allAttributes) {
  const oldValue = attributes[name];
  attributes[name] =
    oldValue === undefined || oldValue === "default" ? (newValue ?? "default") : oldValue;
}

const attributesStr = Object.entries(attributes)
  .map(([name, vs]) => `  "${name}"?: ValueSets["${vs}"];`)
  .join("\n");

result += `\n\ntype Attributes = {\n${attributesStr}\n}`;
result += `\n\ntype GlobalAttributeNames = ${union(data.globalAttributes)};`;

for (const tag of data.tags) {
  const attrs = tag.attributes.length > 0 ? union(tag.attributes) : "never";
  const name = tag.name === "var" ? "var_" : tag.name === "object" ? "object_" : tag.name;
  result += `\n\ntype ${name} = ${tag.void ? "VoidEl" : "El"}<${attrs}>;`;
  result += `\nexport const ${name}: ${name};`;
}

console.log(result);
