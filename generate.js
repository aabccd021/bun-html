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

const valueSets = Object.fromEntries(
  data.valueSets.map(({ name, values }) => {
    return [name, values.map((value) => `"${value.name}"`).join(" | ")];
  }),
);

/**
 * @param {string|undefined} attr
 */
function attrValue(attr) {
  if (attr === undefined) return "string | number | boolean | null";
  if (attr === "v") return "boolean";
  return valueSets[attr];
}

/**
 * @param {ITagData} tag
 */
function element(tag) {
  const seen = new Set();
  const attributes = [];
  for (const attr of [...tag.attributes, ...data.globalAttributes]) {
    if (seen.has(attr.name)) continue;
    seen.add(attr.name);
    attributes.push(` * @property {${attrValue(attr.valueSet)}} [${attr.name}]\n`);
  }
  const capName = tag.name.charAt(0).toUpperCase() + tag.name.slice(1);
  const funcName = tag.name === "var" ? "var_" : tag.name;
  return `
/**
 * @typedef {Object} ${capName}Attributes
 * @property {DataAttribute} [data]
${attributes}
 */

/**
 * @param {${capName}Attributes} attributes
${tag.void ? "" : " * @param {Element[]} [ children ]"}
 * @returns {Element}
 */
export function ${funcName}(attributes${tag.void ? "" : ", children"}) {
  return { tag: "${tag.name}", attributes${tag.void ? "" : ", children"} };
}`;
}

const elements = data.tags.map(element).join("\n");

console.log(`/** @import { Element, DataAttribute } from './tiny-html.js';\n${elements}`);
