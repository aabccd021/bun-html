/**
 * @typedef {Object} ITagData
 * @property {string} name - The tag name.
 * @property {IAttributeData[]} attributes - The attributes for the tag.
 * @property {true} [void] - Whether the tag is a void element (self-closing).
 */

/**
 * @typedef {Object} IAttributeData
 * @property {string} name - The attribute name.
 * @property {string} [valueSet] - The name of the value set for this attribute, if any.
 */

/**
 * @typedef {Object} IValueData
 * @property {string} name - The value name.
 */

/**
 * @typedef {Object} IValueSet
 * @property {string} name - The name of the value set.
 * @property {IValueData[]} values - The possible values for the set.
 */

/**
 * @typedef {Object} HTMLDataV1
 * @property {ITagData[]} tags - All HTML tags.
 * @property {IAttributeData[]} globalAttributes - Attributes that apply globally.
 * @property {IValueSet[]} valueSets - All value sets.
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
  if (attr === undefined) {
    return "string | number | boolean | null";
  }

  if (attr === "v") {
    return "boolean";
  }

  const valueSet = valueSets[attr];
  if (valueSet) {
    return valueSet;
  }

  throw new Error();
}

/**
 * @param {IAttributeData[]} tags
 */
function uniqueAttributes(tags) {
  const seen = new Set();
  return tags.filter((attr) => {
    if (seen.has(attr.name)) {
      return false;
    }
    seen.add(attr.name);
    return true;
  });
}

const builders = data.tags
  .map((tag) => {
    const attributes = [...data.globalAttributes, ...uniqueAttributes(tag.attributes)]
      .map((attr) => ` * @property {${attrValue(attr.valueSet)}} [${attr.name}]`)
      .join("\n");
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
${tag.void === true ? "" : " * @param {Element[]} [ children ]"}
 * @returns {Element}
 */
export function ${funcName}(attributes${tag.void === true ? "" : ", children"}) {
  return { tag: "${tag.name}", attributes${tag.void === true ? "" : ", children"} };
}`;
  })
  .join("\n");

const result = `/** @import { Element, DataAttribute } from './html.ts';
${builders}`;

console.log(result);
