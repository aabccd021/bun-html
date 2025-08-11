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

function attrType(attr: IAttributeData): string {
  return `  "${attr.name}"?: ValueSets["${attr.valueSet ?? "default"}"]`;
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

const builders: string = data.tags
  .map((tag) => {
    const attributes = uniqueAttributes(tag.attributes)
      .map(attrType)
      .join("\n  ");
    const attributesStr = attributes === "" ? "" : ` & {\n  ${attributes}\n  }`;
    const funcName = tag.name === "var" ? "var_" : tag.name;
    return `export const ${funcName} = (
  attributes: GlobalAttributes${attributesStr},${tag.void === true ? "" : "\n  children?: readonly Element[]"}
): Element => ({ tag: "${tag.name}", attributes${tag.void === true ? "" : ",children"} });`;
  })
  .join("\n\n");

const result = `import type { Element } from "./html.ts";

type ValueSets = {
  "default": string | number | boolean | null;
  "v": boolean;
${valueSets}
}

type GlobalAttributes = {
  [k in \`data-\${string}\`]?: ValueSets["default"];
} & {
${globalAttributes}
}

${builders}
`;

console.log(result);
