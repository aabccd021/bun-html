console.log(`type Render = (element: Element) => string;

export const render: Render;

type UnsafeHtml = (value: string) => Element

export const unsafeHtml: UnsafeHtml;

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

type VoidEl<A extends keyof Attributes> = (attributes: ElAttributes<A>) => Element;`);

const res = await fetch(
  "https://raw.githubusercontent.com/microsoft/vscode-custom-data/refs/heads/main/web-data/data/browsers.html-data.json",
);
const data = await res.json();

function union(arr) {
  return arr.map((item) => `"${item.name}"`).join(" | ");
}

console.log(`
type ValueSets = {
  "default": string | number | boolean | null;
  "v": boolean;`);
for (const valueSet of data.valueSets) {
  console.log(`  "${valueSet.name}": ${union(valueSet.values)};`);
}
console.log("}");

const tagAttributes = data.tags.flatMap((tag) => tag.attributes);
const processedTags = new Set();

console.log(`\ntype Attributes = {`);
for (const attribute of [...data.globalAttributes, ...tagAttributes]) {
  if (processedTags.has(attribute.name)) continue;
  processedTags.add(attribute.name);
  console.log(`  "${attribute.name}"?: ValueSets["${attribute.valueSet ?? "default"}"];`);
}
console.log(`}`);

console.log(`\ntype GlobalAttributeNames = ${union(data.globalAttributes)};`);

for (const tag of data.tags) {
  const capName = tag.name.charAt(0).toUpperCase() + tag.name.slice(1);
  const attrNames = tag.attributes.length > 0 ? union(tag.attributes) : "never";
  console.log(`\ntype ${capName} = ${tag.void ? "VoidEl" : "El"}<${attrNames}>;`);
  console.log(`export const ${tag.name === "var" ? "var_" : tag.name}: ${capName};`);
}
