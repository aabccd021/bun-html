interface ITagData {
  name: string;
  attributes: IAttributeData[];
  void?: true;
}

interface IAttributeData {
  name: string;
  valueSet?: string;
}

interface IValueData {
  name: string;
}

interface IValueSet {
  name: string;
  values: IValueData[];
}

interface HTMLDataV1 {
  tags: ITagData[];
  globalAttributes: IAttributeData[];
  valueSets: IValueSet[];
}

const res = await fetch(
  "https://raw.githubusercontent.com/microsoft/vscode-custom-data/refs/heads/main/web-data/data/browsers.html-data.json",
);
const data: HTMLDataV1 = await res.json();

const valueSets = Object.fromEntries(
  data.valueSets.map(({ name, values }) => {
    return [name, values.map((value) => `"${value.name}"`).join(" | ")];
  }),
);

function attrValue(attr: string | undefined): string {
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

function uniqueAttributes(tags: IAttributeData[]): IAttributeData[] {
  const seen: Set<string> = new Set();
  return tags.filter((attr) => {
    if (seen.has(attr.name)) {
      return false;
    }
    seen.add(attr.name);
    return true;
  });
}

const builders: string = data.tags
  .map((tag) => {
    const allAttributes = uniqueAttributes([
      ...data.globalAttributes,
      ...tag.attributes,
    ]);
    const attributes = allAttributes
      .map(
        (attr) => ` * @property {${attrValue(attr.valueSet)}} [${attr.name}]`,
      )
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

/**
 * A record with string keys and string values
 * @typedef {Object.<string, string | number | boolean | null>} DataAttribute
 */
