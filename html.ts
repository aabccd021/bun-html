import type * as michi from "@michijs/htmltype";

type HtmlTags = keyof michi.HTMLElements;

type AttributeValues = string | number | boolean | URL | null | undefined;

type OnlyAttributeValues<T> = {
  [K in keyof T as T[K] extends AttributeValues ? K : never]: T[K];
};

type ElementAttributes = {
  readonly [Tag in HtmlTags]: OnlyAttributeValues<michi.HTMLElements[Tag]>;
};

export type Attributes<Tag extends HtmlTags> = ElementAttributes[Tag];

export type Element =
  | string
  | false
  | undefined
  | {
      readonly tag: HtmlTags;
      readonly attributes: Record<string, AttributeValues>;
      readonly children?: readonly Element[];
    }
  | {
      readonly tag: "unsafeHtml";
      readonly value: string;
    };

const reUnescapedHtml = /[&<>"'`]/g;

const escapeMap: Record<string, string> = {
  '"': "&quot;",
  "&": "&amp;",
  "'": "&#x27;",
  "<": "&lt;",
  ">": "&gt;",
  "`": "&#x60;", // http://html5sec.org/#102, http://html5sec.org/#108, and http://html5sec.org/#133
};

function escapeHTML(value: string): string {
  if (!reUnescapedHtml.test(value)) {
    return value;
  }
  return value.replace(reUnescapedHtml, (match) => escapeMap[match] ?? match);
}

function serializeAttribute([unsafeKey, value]: readonly [
  string,
  AttributeValues,
]): string {
  if (value === false || value === undefined || value === null) {
    return "";
  }

  const key = escapeHTML(unsafeKey);

  if (value === true) {
    return ` ${key}`;
  }

  if (typeof value === "string") {
    return ` ${key}="${escapeHTML(value)}"`;
  }

  if (typeof value === "number") {
    return ` ${key}="${value}"`;
  }

  if (value instanceof URL) {
    return ` ${key}="${value.href}"`;
  }

  value satisfies never;
  throw new Error(`Unsupported attribute: ${key}`);
}

export function render(element: Element): string {
  if (element === false || element === undefined) {
    return "";
  }

  if (typeof element === "string") {
    return escapeHTML(element);
  }

  if (element.tag === "unsafeHtml") {
    return element.value;
  }

  const attributes = Object.entries(element.attributes)
    .map(serializeAttribute)
    .join("");

  const beforeTag = element.tag === "html" ? "<!DOCTYPE html>" : "";

  if (element.children === undefined) {
    return `${beforeTag}<${element.tag}${attributes}>`;
  }

  const children = element.children.map(render).join("");
  return `${beforeTag}<${element.tag}${attributes}>${children}</${element.tag}>`;
}

export const unsafeHtml = (value: string): Element => ({
  tag: "unsafeHtml",
  value,
});

export const a = (
  attributes: {
    href?: string;
    // ... other attributes
  },
  children: readonly Element[],
): Element => ({
  tag: "a",
  attributes,
  children,
});
export const address = (
  attributes: Attributes<"address">,
  children: readonly Element[],
): Element => ({ tag: "address", attributes, children });
export const area = (attributes: Attributes<"area">): Element => ({
  tag: "area",
  attributes,
});
export const article = (
  attributes: Attributes<"article">,
  children: readonly Element[],
): Element => ({ tag: "article", attributes, children });
export const aside = (
  attributes: Attributes<"aside">,
  children: readonly Element[],
): Element => ({
  tag: "aside",
  attributes,
  children,
});
export const audio = (
  attributes: Attributes<"audio">,
  children: readonly Element[],
): Element => ({
  tag: "audio",
  attributes,
  children,
});
export const b = (
  attributes: Attributes<"b">,
  children: readonly Element[],
): Element => ({
  tag: "b",
  attributes,
  children,
});
export const base = (attributes: Attributes<"base">): Element => ({
  tag: "base",
  attributes,
});
export const bdi = (
  attributes: Attributes<"bdi">,
  children: readonly Element[],
): Element => ({
  tag: "bdi",
  attributes,
  children,
});
export const bdo = (
  attributes: Attributes<"bdo">,
  children: readonly Element[],
): Element => ({
  tag: "bdo",
  attributes,
  children,
});
export const blockquote = (
  attributes: Attributes<"blockquote">,
  children: readonly Element[],
): Element => ({ tag: "blockquote", attributes, children });
export const body = (
  attributes: Attributes<"body">,
  children: readonly Element[],
): Element => ({
  tag: "body",
  attributes,
  children,
});
export const br = (attributes: Attributes<"br">): Element => ({
  tag: "br",
  attributes,
});
export const button = (
  attributes: Attributes<"button">,
  children: readonly Element[],
): Element => ({ tag: "button", attributes, children });
export const canvas = (
  attributes: Attributes<"canvas">,
  children: readonly Element[],
): Element => ({ tag: "canvas", attributes, children });
export const caption = (
  attributes: Attributes<"caption">,
  children: readonly Element[],
): Element => ({ tag: "caption", attributes, children });
export const cite = (
  attributes: Attributes<"cite">,
  children: readonly Element[],
): Element => ({
  tag: "cite",
  attributes,
  children,
});
export const code = (
  attributes: Attributes<"code">,
  children: readonly Element[],
): Element => ({
  tag: "code",
  attributes,
  children,
});
export const col = (attributes: Attributes<"col">): Element => ({
  tag: "col",
  attributes,
});
export const colgroup = (
  attributes: Attributes<"colgroup">,
  children: readonly Element[],
): Element => ({ tag: "colgroup", attributes, children });
export const data = (
  attributes: Attributes<"data">,
  children: readonly Element[],
): Element => ({
  tag: "data",
  attributes,
  children,
});
export const datalist = (
  attributes: Attributes<"datalist">,
  children: readonly Element[],
): Element => ({ tag: "datalist", attributes, children });
export const dd = (
  attributes: Attributes<"dd">,
  children: readonly Element[],
): Element => ({
  tag: "dd",
  attributes,
  children,
});
export const del = (
  attributes: Attributes<"del">,
  children: readonly Element[],
): Element => ({
  tag: "del",
  attributes,
  children,
});
export const details = (
  attributes: Attributes<"details">,
  children: readonly Element[],
): Element => ({ tag: "details", attributes, children });
export const dfn = (
  attributes: Attributes<"dfn">,
  children: readonly Element[],
): Element => ({
  tag: "dfn",
  attributes,
  children,
});
export const dialog = (
  attributes: Attributes<"dialog">,
  children: readonly Element[],
): Element => ({ tag: "dialog", attributes, children });
export const div = (
  attributes: Attributes<"div">,
  children: readonly Element[],
): Element => ({
  tag: "div",
  attributes,
  children,
});
export const dl = (
  attributes: Attributes<"dl">,
  children: readonly Element[],
): Element => ({
  tag: "dl",
  attributes,
  children,
});
export const dt = (
  attributes: Attributes<"dt">,
  children: readonly Element[],
): Element => ({
  tag: "dt",
  attributes,
  children,
});
export const em = (
  attributes: Attributes<"em">,
  children: readonly Element[],
): Element => ({
  tag: "em",
  attributes,
  children,
});
export const embed = (attributes: Attributes<"embed">): Element => ({
  tag: "embed",
  attributes,
});
export const fieldset = (
  attributes: Attributes<"fieldset">,
  children: readonly Element[],
): Element => ({ tag: "fieldset", attributes, children });
export const figcaption = (
  attributes: Attributes<"figcaption">,
  children: readonly Element[],
): Element => ({ tag: "figcaption", attributes, children });
export const figure = (
  attributes: Attributes<"figure">,
  children: readonly Element[],
): Element => ({ tag: "figure", attributes, children });
export const footer = (
  attributes: Attributes<"footer">,
  children: readonly Element[],
): Element => ({ tag: "footer", attributes, children });
export const form = (
  attributes: Attributes<"form">,
  children: readonly Element[],
): Element => ({
  tag: "form",
  attributes,
  children,
});
export const h1 = (
  attributes: Attributes<"h1">,
  children: readonly Element[],
): Element => ({
  tag: "h1",
  attributes,
  children,
});
export const h2 = (
  attributes: Attributes<"h2">,
  children: readonly Element[],
): Element => ({
  tag: "h2",
  attributes,
  children,
});
export const h3 = (
  attributes: Attributes<"h3">,
  children: readonly Element[],
): Element => ({
  tag: "h3",
  attributes,
  children,
});
export const h4 = (
  attributes: Attributes<"h4">,
  children: readonly Element[],
): Element => ({
  tag: "h4",
  attributes,
  children,
});
export const h5 = (
  attributes: Attributes<"h5">,
  children: readonly Element[],
): Element => ({
  tag: "h5",
  attributes,
  children,
});
export const h6 = (
  attributes: Attributes<"h6">,
  children: readonly Element[],
): Element => ({
  tag: "h6",
  attributes,
  children,
});
export const head = (
  attributes: Attributes<"head">,
  children: readonly Element[],
): Element => ({
  tag: "head",
  attributes,
  children,
});
export const header = (
  attributes: Attributes<"header">,
  children: readonly Element[],
): Element => ({ tag: "header", attributes, children });
export const hgroup = (
  attributes: Attributes<"hgroup">,
  children: readonly Element[],
): Element => ({ tag: "hgroup", attributes, children });
export const hr = (attributes: Attributes<"hr">): Element => ({
  tag: "hr",
  attributes,
});
export const html = (
  attributes: Attributes<"html">,
  children: readonly Element[],
): Element => ({
  tag: "html",
  attributes,
  children,
});
export const i = (
  attributes: Attributes<"i">,
  children: readonly Element[],
): Element => ({
  tag: "i",
  attributes,
  children,
});
export const iframe = (
  attributes: Attributes<"iframe">,
  children: readonly Element[],
): Element => ({ tag: "iframe", attributes, children });
export const img = (attributes: Attributes<"img">): Element => ({
  tag: "img",
  attributes,
});
export const input = (attributes: Attributes<"input">): Element => ({
  tag: "input",
  attributes,
});
export const ins = (
  attributes: Attributes<"ins">,
  children: readonly Element[],
): Element => ({
  tag: "ins",
  attributes,
  children,
});
export const kbd = (
  attributes: Attributes<"kbd">,
  children: readonly Element[],
): Element => ({
  tag: "kbd",
  attributes,
  children,
});
export const label = (
  attributes: Attributes<"label">,
  children: readonly Element[],
): Element => ({
  tag: "label",
  attributes,
  children,
});
export const legend = (
  attributes: Attributes<"legend">,
  children: readonly Element[],
): Element => ({ tag: "legend", attributes, children });
export const li = (
  attributes: Attributes<"li">,
  children: readonly Element[],
): Element => ({
  tag: "li",
  attributes,
  children,
});
export const link = (attributes: Attributes<"link">): Element => ({
  tag: "link",
  attributes,
});
export const main = (
  attributes: Attributes<"main">,
  children: readonly Element[],
): Element => ({
  tag: "main",
  attributes,
  children,
});
export const map = (
  attributes: Attributes<"map">,
  children: readonly Element[],
): Element => ({
  tag: "map",
  attributes,
  children,
});
export const mark = (
  attributes: Attributes<"mark">,
  children: readonly Element[],
): Element => ({
  tag: "mark",
  attributes,
  children,
});
export const menu = (
  attributes: Attributes<"menu">,
  children: readonly Element[],
): Element => ({
  tag: "menu",
  attributes,
  children,
});
export const meta = (attributes: Attributes<"meta">): Element => ({
  tag: "meta",
  attributes,
});
export const meter = (
  attributes: Attributes<"meter">,
  children: readonly Element[],
): Element => ({
  tag: "meter",
  attributes,
  children,
});
export const nav = (
  attributes: Attributes<"nav">,
  children: readonly Element[],
): Element => ({
  tag: "nav",
  attributes,
  children,
});
export const noscript = (
  attributes: Attributes<"noscript">,
  children: readonly Element[],
): Element => ({ tag: "noscript", attributes, children });
export const object = (
  attributes: Attributes<"object">,
  children: readonly Element[],
): Element => ({ tag: "object", attributes, children });
export const ol = (
  attributes: Attributes<"ol">,
  children: readonly Element[],
): Element => ({
  tag: "ol",
  attributes,
  children,
});
export const optgroup = (
  attributes: Attributes<"optgroup">,
  children: readonly Element[],
): Element => ({ tag: "optgroup", attributes, children });
export const option = (
  attributes: Attributes<"option">,
  children: readonly Element[],
): Element => ({ tag: "option", attributes, children });
export const output = (
  attributes: Attributes<"output">,
  children: readonly Element[],
): Element => ({ tag: "output", attributes, children });
export const p = (
  attributes: Attributes<"p">,
  children: readonly Element[],
): Element => ({
  tag: "p",
  attributes,
  children,
});
export const param = (
  attributes: Attributes<"param">,
  children: readonly Element[],
): Element => ({
  tag: "param",
  attributes,
  children,
});
export const picture = (
  attributes: Attributes<"picture">,
  children: readonly Element[],
): Element => ({ tag: "picture", attributes, children });
export const pre = (
  attributes: Attributes<"pre">,
  children: readonly Element[],
): Element => ({
  tag: "pre",
  attributes,
  children,
});
export const progress = (
  attributes: Attributes<"progress">,
  children: readonly Element[],
): Element => ({ tag: "progress", attributes, children });
export const q = (
  attributes: Attributes<"q">,
  children: readonly Element[],
): Element => ({
  tag: "q",
  attributes,
  children,
});
export const rp = (
  attributes: Attributes<"rp">,
  children: readonly Element[],
): Element => ({
  tag: "rp",
  attributes,
  children,
});
export const rt = (
  attributes: Attributes<"rt">,
  children: readonly Element[],
): Element => ({
  tag: "rt",
  attributes,
  children,
});
export const ruby = (
  attributes: Attributes<"ruby">,
  children: readonly Element[],
): Element => ({
  tag: "ruby",
  attributes,
  children,
});
export const s = (
  attributes: Attributes<"s">,
  children: readonly Element[],
): Element => ({
  tag: "s",
  attributes,
  children,
});
export const samp = (
  attributes: Attributes<"samp">,
  children: readonly Element[],
): Element => ({
  tag: "samp",
  attributes,
  children,
});
export const script = (
  attributes: Attributes<"script">,
  children: readonly Element[],
): Element => ({ tag: "script", attributes, children });
export const slot = (
  attributes: Attributes<"slot">,
  children: readonly Element[],
): Element => ({
  tag: "slot",
  attributes,
  children,
});
export const section = (
  attributes: Attributes<"section">,
  children: readonly Element[],
): Element => ({ tag: "section", attributes, children });
export const select = (
  attributes: Attributes<"select">,
  children: readonly Element[],
): Element => ({ tag: "select", attributes, children });
export const small = (
  attributes: Attributes<"small">,
  children: readonly Element[],
): Element => ({
  tag: "small",
  attributes,
  children,
});
export const source = (attributes: Attributes<"source">): Element => ({
  tag: "source",
  attributes,
});
export const span = (
  attributes: Attributes<"span">,
  children: readonly Element[],
): Element => ({
  tag: "span",
  attributes,
  children,
});
export const strong = (
  attributes: Attributes<"strong">,
  children: readonly Element[],
): Element => ({ tag: "strong", attributes, children });
export const sub = (
  attributes: Attributes<"sub">,
  children: readonly Element[],
): Element => ({
  tag: "sub",
  attributes,
  children,
});
export const summary = (
  attributes: Attributes<"summary">,
  children: readonly Element[],
): Element => ({ tag: "summary", attributes, children });
export const sup = (
  attributes: Attributes<"sup">,
  children: readonly Element[],
): Element => ({
  tag: "sup",
  attributes,
  children,
});
export const table = (
  attributes: Attributes<"table">,
  children: readonly Element[],
): Element => ({
  tag: "table",
  attributes,
  children,
});
export const tbody = (
  attributes: Attributes<"tbody">,
  children: readonly Element[],
): Element => ({
  tag: "tbody",
  attributes,
  children,
});
export const td = (
  attributes: Attributes<"td">,
  children: readonly Element[],
): Element => ({
  tag: "td",
  attributes,
  children,
});
export const template = (
  attributes: Attributes<"template">,
  children: readonly Element[],
): Element => ({ tag: "template", attributes, children });
export const textarea = (
  attributes: Attributes<"textarea">,
  children: readonly Element[],
): Element => ({ tag: "textarea", attributes, children });
export const tfoot = (
  attributes: Attributes<"tfoot">,
  children: readonly Element[],
): Element => ({
  tag: "tfoot",
  attributes,
  children,
});
export const th = (
  attributes: Attributes<"th">,
  children: readonly Element[],
): Element => ({
  tag: "th",
  attributes,
  children,
});
export const thead = (
  attributes: Attributes<"thead">,
  children: readonly Element[],
): Element => ({
  tag: "thead",
  attributes,
  children,
});
export const time = (
  attributes: Attributes<"time">,
  children: readonly Element[],
): Element => ({
  tag: "time",
  attributes,
  children,
});
export const title = (
  attributes: Attributes<"title">,
  children: readonly Element[],
): Element => ({
  tag: "title",
  attributes,
  children,
});
export const tr = (
  attributes: Attributes<"tr">,
  children: readonly Element[],
): Element => ({
  tag: "tr",
  attributes,
  children,
});
export const track = (attributes: Attributes<"track">): Element => ({
  tag: "track",
  attributes,
});
export const u = (
  attributes: Attributes<"u">,
  children: readonly Element[],
): Element => ({
  tag: "u",
  attributes,
  children,
});
export const ul = (
  attributes: Attributes<"ul">,
  children: readonly Element[],
): Element => ({
  tag: "ul",
  attributes,
  children,
});
export const var_ = (
  attributes: Attributes<"var">,
  children: readonly Element[],
): Element => ({
  tag: "var",
  attributes,
  children,
});
export const video = (
  attributes: Attributes<"video">,
  children: readonly Element[],
): Element => ({
  tag: "video",
  attributes,
  children,
});
export const wbr = (attributes: Attributes<"wbr">): Element => ({
  tag: "wbr",
  attributes,
});
