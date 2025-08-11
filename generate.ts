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

const valueSets: string = data.valueSets
  .map((valueSet) => {
    const values = valueSet.values
      .map((value) => `"${value.name}"`)
      .join(" | ");
    return `  "${valueSet.name}": ${values};`;
  })
  .join("\n");

function attrValueSet(valueSet: string | undefined): string {
  if (valueSet === undefined) {
    return "string | number | boolean | null";
  }
  if (valueSet === "v") {
    return "boolean";
  }
  return `ValueSets["${valueSet}"]`;
}

function attrType(attr: IAttributeData): string {
  return `  "${attr.name}": ${attrValueSet(attr.valueSet)}`;
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

const globalAttributes: string = data.globalAttributes.map(attrType).join("\n");

const tags: string = data.tags
  .map((tag) => tag.name)
  .map((name) => `"${name}"`)
  .join(" | ");

const builders: string = data.tags
  .map((tag) => {
    const attributes = uniqueAttributes(tag.attributes)
      .map(attrType)
      .join(",\n  ");
    const attributesStr = attributes === "" ? "" : ` & {\n  ${attributes}\n  }`;
    const funcName = tag.name === "var" ? "var_" : tag.name;
    return `export const ${funcName} = (
  attributes: GlobalAttributes${attributesStr}, 
  children: readonly Element[]
): Element => ({ tag: "${tag.name}", attributes, children });`;
  })
  .join("\n\n");

const result = `import type { Element } from "./html.ts";

type ValueSets = {
${valueSets}
}

type GlobalAttributes = {
${globalAttributes}
}

export type HtmlTags = ${tags}

${builders}
`;

console.log(result);
