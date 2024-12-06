import type * as michi from "@michijs/htmltype";

type HTMLTags = keyof michi.HTMLElements;

type EventAttributes =
  | keyof michi.GlobalEvents<EventTarget>
  | keyof michi.WindowEvents<unknown>;

// Exclude event attributes
type ElementAttributes = {
  readonly [Tag in HTMLTags]: Omit<michi.HTMLElements[Tag], EventAttributes>;
};

type AttributeValues = michi.ValueSets[keyof michi.ValueSets];

export type Element =
  | {
      readonly tag: HTMLTags;
      readonly attributes: Record<string, AttributeValues>;
      readonly children: readonly Element[] | undefined;
    }
  | {
      readonly tag: "unsafeHtml";
      readonly value: string;
    }
  | string
  | false
  | undefined;

function serializeAttribute(key: string, value: AttributeValues): string {
  if (value === true) {
    return key;
  }
  if (value === false) {
    return "";
  }
  if (value === undefined) {
    return "";
  }
  if (typeof value === "string") {
    return `${key}="${Bun.escapeHTML(value)}"`;
  }
  if (typeof value === "number") {
    return `${key}="${value}"`;
  }
  if (value instanceof URL) {
    return `${key}="${value.href}"`;
  }
  throw new Error("Unsupported value");
}

export function render(element: Element): string {
  if (typeof element === "string") {
    return Bun.escapeHTML(element);
  }
  if (element === false) {
    return "";
  }
  if (element === undefined) {
    return "";
  }
  if (element.tag === "unsafeHtml") {
    return element.value;
  }
  const attributes = Object.entries(element.attributes)
    .map(([key, val]) => ` ${serializeAttribute(key, val)}`)
    .join("");
  if (element.children === undefined) {
    return `<${element.tag}${attributes}>`;
  }
  const children = element.children.map(render).join("");
  return `<${element.tag}${attributes}>${children}</${element.tag}>`;
}

export const unsafeHtml = (value: string): Element => ({
  tag: "unsafeHtml",
  value,
});

const el =
  <Tag extends HTMLTags>(tag: Tag) =>
  (
    attributes: ElementAttributes[Tag],
    children: readonly Element[],
  ): Element => ({
    tag,
    attributes,
    children,
  });

const voidEl =
  <Tag extends HTMLTags>(tag: Tag) =>
  (attributes: ElementAttributes[Tag]): Element => ({
    tag,
    attributes,
    children: undefined,
  });

export const a = el("a");
export const address = el("address");
export const area = voidEl("area");
export const article = el("article");
export const aside = el("aside");
export const audio = el("audio");
export const b = el("b");
export const base = voidEl("base");
export const bdi = el("bdi");
export const bdo = el("bdo");
export const blockquote = el("blockquote");
export const body = el("body");
export const br = voidEl("br");
export const button = el("button");
export const canvas = el("canvas");
export const caption = el("caption");
export const cite = el("cite");
export const code = el("code");
export const col = voidEl("col");
export const colgroup = el("colgroup");
export const data = el("data");
export const datalist = el("datalist");
export const dd = el("dd");
export const del = el("del");
export const details = el("details");
export const dfn = el("dfn");
export const dialog = el("dialog");
export const div = el("div");
export const dl = el("dl");
export const dt = el("dt");
export const em = el("em");
export const embed = voidEl("embed");
export const fieldset = el("fieldset");
export const figcaption = el("figcaption");
export const figure = el("figure");
export const footer = el("footer");
export const form = el("form");
export const h1 = el("h1");
export const h2 = el("h2");
export const h3 = el("h3");
export const h4 = el("h4");
export const h5 = el("h5");
export const h6 = el("h6");
export const head = el("head");
export const header = el("header");
export const hgroup = el("hgroup");
export const hr = voidEl("hr");
export const html = el("html");
export const i = el("i");
export const iframe = el("iframe");
export const img = voidEl("img");
export const input = voidEl("input");
export const ins = el("ins");
export const kbd = el("kbd");
export const label = el("label");
export const legend = el("legend");
export const li = el("li");
export const link = voidEl("link");
export const main = el("main");
export const map = el("map");
export const mark = el("mark");
export const menu = el("menu");
export const meta = voidEl("meta");
export const meter = el("meter");
export const nav = el("nav");
export const noscript = el("noscript");
export const object = el("object");
export const ol = el("ol");
export const optgroup = el("optgroup");
export const option = el("option");
export const output = el("output");
export const p = el("p");
export const param = el("param");
export const picture = el("picture");
export const pre = el("pre");
export const progress = el("progress");
export const q = el("q");
export const rp = el("rp");
export const rt = el("rt");
export const ruby = el("ruby");
export const s = el("s");
export const samp = el("samp");
export const script = el("script");
export const slot = el("slot");
export const section = el("section");
export const select = el("select");
export const small = el("small");
export const source = voidEl("source");
export const span = el("span");
export const strong = el("strong");
export const sub = el("sub");
export const summary = el("summary");
export const sup = el("sup");
export const table = el("table");
export const tbody = el("tbody");
export const td = el("td");
export const template = el("template");
export const textarea = el("textarea");
export const tfoot = el("tfoot");
export const th = el("th");
export const thead = el("thead");
export const time = el("time");
export const title = el("title");
export const tr = el("tr");
export const track = voidEl("track");
export const u = el("u");
export const ul = el("ul");
export const vartag = el("var");
export const video = el("video");
export const wbr = voidEl("wbr");