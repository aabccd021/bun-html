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

console.log(`
type ValueSets = {
  "default": string | number | boolean | null;
  "v": boolean;`);
for (const valueSet of data.valueSets) {
  console.log(`  "${valueSet.name}": `);
  for (const value of valueSet.values) {
    console.log(`      | "${value.name}"`);
  }
}
console.log("}");

const seen = new Set();

console.log(`type Attributes = {`);
for (const attribute of data.globalAttributes) {
  if (seen.has(attribute.name)) continue;
  seen.add(attribute.name);
  console.log(`  "${attribute.name}"?: ValueSets["${attribute.valueSet ?? "default"}"];`);
}
for (const tag of data.tags) {
  for (const attribute of tag.attributes) {
    if (seen.has(attribute.name)) continue;
    seen.add(attribute.name);
    console.log(`  "${attribute.name}"?: ValueSets["${attribute.valueSet ?? "default"}"];`);
  }
}
console.log(`}`);

console.log(`\ntype GlobalAttributeNames = `);
for (const attribute of data.globalAttributes) {
  console.log(`  | "${attribute.name}"`);
}

for (const tag of data.tags) {
  const capName = tag.name.charAt(0).toUpperCase() + tag.name.slice(1);
  const typeStr = tag.void ? "VoidEl" : "El";
  const funcName = tag.name === "var" ? "var_" : tag.name;
  console.log(`\ntype ${capName} = ${typeStr}<`);
  if (tag.attributes.length > 0) {
    for (const attribute of tag.attributes) {
      console.log(`  | "${attribute.name}"`);
    }
  } else {
    console.log(`  never`);
  }
  console.log(`>;`);
  console.log(`export const ${funcName}: ${capName};`);
}
