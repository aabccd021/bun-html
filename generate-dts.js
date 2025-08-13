const res = await fetch(
  "https://raw.githubusercontent.com/microsoft/vscode-custom-data/refs/heads/main/web-data/data/browsers.html-data.json",
);
const data = await res.json();

const valueSetsStr = data.valueSets
  .map((vs) => {
    const values = vs.values.map((item) => `"${item.name}"`).join(" | ");
    return `  "${vs.name}": ${values};`;
  })
  .join("\n");

function attrsStr(attrs) {
  if (attrs.length === 0) return "{}";
  const uniqueAttrs = Object.fromEntries(attrs.map(({ name, valueSet }) => [name, valueSet]));
  const result = Object.entries(uniqueAttrs)
    .map(([name, valueSet]) => `  "${name}"?: ValueSet["${valueSet ?? "default"}"]`)
    .join("\n");
  return `{\n${result}\n}`;
}

const tagsStr = data.tags
  .map((tag) => {
    const name = tag.name === "var" ? "var_" : tag.name === "object" ? "object_" : tag.name;
    return (
      `type ${name} = ${tag.void ? "VoidEl" : "El"}<${attrsStr(tag.attributes)}>;` +
      `\nexport const ${name}: ${name};`
    );
  })
  .join("\n\n");

console.log(`type render = (element: Element) => string;
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

type ValueSet = {
  "default": string | number | boolean | null;
  "v": boolean;
} & {\n${valueSetsStr}\n}

type GlobalAttributes = ${attrsStr(data.globalAttributes)};

${tagsStr}`);
