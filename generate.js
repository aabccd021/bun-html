console.log(`type Render = (element: Element) => string;

export const render: Render;

type UnsafeHtml = (value: string) => Element

export const unsafeHtml: UnsafeHtml;

type AttributeValues = string | number | boolean | null | undefined;

type Element = string | false | undefined | {
    tag: string;
    attributes: Record<string, AttributeValues>;
    children?: Array<Element> | undefined;
} | {
    value: string;
};

type ElAttributes<A extends keyof Attributes> = {
  [k in \`data-\${string}\`]?: ValueSets["default"];
} & Pick<Attributes, GlobalAttributes | A>

type El<A extends keyof Attributes> = (attributes: ElAttributes<A>, children: Element[]) => Element;

type VoidEl<A extends keyof Attributes> = (attributes: ElAttributes<A>) => Element;`);

/**
 * @typedef {Object} ITagData
 * @property {string} name
 * @property {IAttributeData[]} attributes
 * @property {true} [void]
 */

/**
 * @typedef {Object} IAttributeData
 * @property {string} name
 * @property {string} [valueSet]
 */

/**
 * @typedef {Object} IValueData
 * @property {string} name
 */

/**
 * @typedef {Object} IValueSet
 * @property {string} name
 * @property {IValueData[]} values
 */

/**
 * @typedef {Object} HTMLDataV1
 * @property {ITagData[]} tags
 * @property {IAttributeData[]} globalAttributes
 * @property {IValueSet[]} valueSets
 */

const res = await fetch(
  "https://raw.githubusercontent.com/microsoft/vscode-custom-data/refs/heads/main/web-data/data/browsers.html-data.json",
);

/** @type {HTMLDataV1} */
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

console.log(`type Attributes = {`);

/**
 * @type {string[]}
 */
const seen = [];

for (const attr of data.globalAttributes) {
  if (seen.includes(attr.name)) continue;
  seen.push(attr.name);

  let valueSet = attr.valueSet;
  if (valueSet === undefined) {
    valueSet = "default";
  }

  console.log(`  "${attr.name}"?: ValueSets["${valueSet}"];`);
}
for (const tag of data.tags) {
  for (const attr of tag.attributes) {
    if (seen.includes(attr.name)) continue;
    seen.push(attr.name);

    let valueSet = attr.valueSet;
    if (valueSet === undefined) {
      valueSet = "default";
    }

    console.log(`  "${attr.name}"?: ValueSets["${valueSet}"];`);
  }
}
console.log(`}`);

console.log(`\ntype GlobalAttributes = `);
for (const attr of data.globalAttributes) {
  console.log(`  | "${attr.name}"`);
}

for (const tag of data.tags) {
  const capName = tag.name.charAt(0).toUpperCase() + tag.name.slice(1);

  let voidStr = "";
  if (tag.void) {
    voidStr = "Void";
  }

  let funcName = tag.name;
  if (funcName === "var") {
    funcName = "var_";
  }

  console.log(`\ntype ${capName} = ${voidStr}El<`);
  if (tag.attributes.length === 0) {
    console.log(`  never`);
  } else {
    for (const attr of tag.attributes) {
      console.log(`  | "${attr.name}"`);
    }
  }
  console.log(`>;`);
  console.log(`export const ${funcName}: ${capName};`);
}
