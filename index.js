/**
 * @type {Object.<string, string>}
 */
const escapeMap = {
  '"': "&quot;",
  "&": "&amp;",
  "'": "&#x27;",
  "<": "&lt;",
  ">": "&gt;",
  "`": "&#x60;", // http://html5sec.org/#102, http://html5sec.org/#108, http://html5sec.org/#133
};

const reUnescapedHtml = /[&<>"'`]/g;

/**
 * @param {string} value
 */
function escapeHTML(value) {
  if (!reUnescapedHtml.test(value)) {
    return value;
  }
  return value.replace(reUnescapedHtml, (match) => escapeMap[match] ?? match);
}

/**
 * @param {[string, import("./index").AttributeValues]} value
 * @returns {string}
 */
function serializeAttribute([unsafeKey, value]) {
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

  throw new Error(`Unsupported attribute value type for key "${key}": ${typeof value}`);
}

/**
 * @type {import("./index").Render}
 */
export const render = (element) => {
  if (element === false || element === undefined) {
    return "";
  }

  if (typeof element === "string") {
    return escapeHTML(element);
  }

  if ("value" in element) {
    return element.value;
  }

  const attributes = Object.entries(element.attributes).map(serializeAttribute).join("");

  const beforeTag = element.tag === "html" ? "<!DOCTYPE html>" : "";

  if (element.children === undefined) {
    return `${beforeTag}<${element.tag}${attributes}>`;
  }

  const children = element.children.map(render).join("");
  return `${beforeTag}<${element.tag}${attributes}>${children}</${element.tag}>`;
};

/**
 * @type {import("./index").UnsafeHtml}
 */
export const unsafeHtml = (value) => ({ value });

/**
 * @type {import("./index").Html}
 */
export const html = (attributes, children) => ({ tag: "html", attributes, children });

/**
 * @type {import("./index").Head}
 */
export const head = (attributes, children) => ({ tag: "head", attributes, children });

/**
 * @type {import("./index").Title}
 */
export const title = (attributes, children) => ({ tag: "title", attributes, children });

/**
 * @type {import("./index").Base}
 */
export const base = (attributes) => ({ tag: "base", attributes });

/**
 * @type {import("./index").Link}
 */
export const link = (attributes) => ({ tag: "link", attributes });

/**
 * @type {import("./index").Meta}
 */
export const meta = (attributes) => ({ tag: "meta", attributes });

/**
 * @type {import("./index").Style}
 */
export const style = (attributes, children) => ({ tag: "style", attributes, children });

/**
 * @type {import("./index").Body}
 */
export const body = (attributes, children) => ({ tag: "body", attributes, children });

/**
 * @type {import("./index").Article}
 */
export const article = (attributes, children) => ({ tag: "article", attributes, children });

/**
 * @type {import("./index").Section}
 */
export const section = (attributes, children) => ({ tag: "section", attributes, children });

/**
 * @type {import("./index").Nav}
 */
export const nav = (attributes, children) => ({ tag: "nav", attributes, children });

/**
 * @type {import("./index").Aside}
 */
export const aside = (attributes, children) => ({ tag: "aside", attributes, children });

/**
 * @type {import("./index").H1}
 */
export const h1 = (attributes, children) => ({ tag: "h1", attributes, children });

/**
 * @type {import("./index").H2}
 */
export const h2 = (attributes, children) => ({ tag: "h2", attributes, children });

/**
 * @type {import("./index").H3}
 */
export const h3 = (attributes, children) => ({ tag: "h3", attributes, children });

/**
 * @type {import("./index").H4}
 */
export const h4 = (attributes, children) => ({ tag: "h4", attributes, children });

/**
 * @type {import("./index").H5}
 */
export const h5 = (attributes, children) => ({ tag: "h5", attributes, children });

/**
 * @type {import("./index").H6}
 */
export const h6 = (attributes, children) => ({ tag: "h6", attributes, children });

/**
 * @type {import("./index").Header}
 */
export const header = (attributes, children) => ({ tag: "header", attributes, children });

/**
 * @type {import("./index").Footer}
 */
export const footer = (attributes, children) => ({ tag: "footer", attributes, children });

/**
 * @type {import("./index").Address}
 */
export const address = (attributes, children) => ({ tag: "address", attributes, children });

/**
 * @type {import("./index").P}
 */
export const p = (attributes, children) => ({ tag: "p", attributes, children });

/**
 * @type {import("./index").Hr}
 */
export const hr = (attributes) => ({ tag: "hr", attributes });

/**
 * @type {import("./index").Pre}
 */
export const pre = (attributes, children) => ({ tag: "pre", attributes, children });

/**
 * @type {import("./index").Blockquote}
 */
export const blockquote = (attributes, children) => ({ tag: "blockquote", attributes, children });

/**
 * @type {import("./index").Ol}
 */
export const ol = (attributes, children) => ({ tag: "ol", attributes, children });

/**
 * @type {import("./index").Ul}
 */
export const ul = (attributes, children) => ({ tag: "ul", attributes, children });

/**
 * @type {import("./index").Li}
 */
export const li = (attributes, children) => ({ tag: "li", attributes, children });

/**
 * @type {import("./index").Dl}
 */
export const dl = (attributes, children) => ({ tag: "dl", attributes, children });

/**
 * @type {import("./index").Dt}
 */
export const dt = (attributes, children) => ({ tag: "dt", attributes, children });

/**
 * @type {import("./index").Dd}
 */
export const dd = (attributes, children) => ({ tag: "dd", attributes, children });

/**
 * @type {import("./index").Figure}
 */
export const figure = (attributes, children) => ({ tag: "figure", attributes, children });

/**
 * @type {import("./index").Figcaption}
 */
export const figcaption = (attributes, children) => ({ tag: "figcaption", attributes, children });

/**
 * @type {import("./index").Main}
 */
export const main = (attributes, children) => ({ tag: "main", attributes, children });

/**
 * @type {import("./index").Div}
 */
export const div = (attributes, children) => ({ tag: "div", attributes, children });

/**
 * @type {import("./index").A}
 */
export const a = (attributes, children) => ({ tag: "a", attributes, children });

/**
 * @type {import("./index").Em}
 */
export const em = (attributes, children) => ({ tag: "em", attributes, children });

/**
 * @type {import("./index").Strong}
 */
export const strong = (attributes, children) => ({ tag: "strong", attributes, children });

/**
 * @type {import("./index").Small}
 */
export const small = (attributes, children) => ({ tag: "small", attributes, children });

/**
 * @type {import("./index").S}
 */
export const s = (attributes, children) => ({ tag: "s", attributes, children });

/**
 * @type {import("./index").Cite}
 */
export const cite = (attributes, children) => ({ tag: "cite", attributes, children });

/**
 * @type {import("./index").Q}
 */
export const q = (attributes, children) => ({ tag: "q", attributes, children });

/**
 * @type {import("./index").Dfn}
 */
export const dfn = (attributes, children) => ({ tag: "dfn", attributes, children });

/**
 * @type {import("./index").Abbr}
 */
export const abbr = (attributes, children) => ({ tag: "abbr", attributes, children });

/**
 * @type {import("./index").Ruby}
 */
export const ruby = (attributes, children) => ({ tag: "ruby", attributes, children });

/**
 * @type {import("./index").Rb}
 */
export const rb = (attributes, children) => ({ tag: "rb", attributes, children });

/**
 * @type {import("./index").Rt}
 */
export const rt = (attributes, children) => ({ tag: "rt", attributes, children });

/**
 * @type {import("./index").Rp}
 */
export const rp = (attributes, children) => ({ tag: "rp", attributes, children });

/**
 * @type {import("./index").Time}
 */
export const time = (attributes, children) => ({ tag: "time", attributes, children });

/**
 * @type {import("./index").Code}
 */
export const code = (attributes, children) => ({ tag: "code", attributes, children });

/**
 * @type {import("./index").Var}
 */
export const var_ = (attributes, children) => ({ tag: "var", attributes, children });

/**
 * @type {import("./index").Samp}
 */
export const samp = (attributes, children) => ({ tag: "samp", attributes, children });

/**
 * @type {import("./index").Kbd}
 */
export const kbd = (attributes, children) => ({ tag: "kbd", attributes, children });

/**
 * @type {import("./index").Sub}
 */
export const sub = (attributes, children) => ({ tag: "sub", attributes, children });

/**
 * @type {import("./index").Sup}
 */
export const sup = (attributes, children) => ({ tag: "sup", attributes, children });

/**
 * @type {import("./index").I}
 */
export const i = (attributes, children) => ({ tag: "i", attributes, children });

/**
 * @type {import("./index").B}
 */
export const b = (attributes, children) => ({ tag: "b", attributes, children });

/**
 * @type {import("./index").U}
 */
export const u = (attributes, children) => ({ tag: "u", attributes, children });

/**
 * @type {import("./index").Mark}
 */
export const mark = (attributes, children) => ({ tag: "mark", attributes, children });

/**
 * @type {import("./index").Bdi}
 */
export const bdi = (attributes, children) => ({ tag: "bdi", attributes, children });

/**
 * @type {import("./index").Bdo}
 */
export const bdo = (attributes, children) => ({ tag: "bdo", attributes, children });

/**
 * @type {import("./index").Span}
 */
export const span = (attributes, children) => ({ tag: "span", attributes, children });

/**
 * @type {import("./index").Br}
 */
export const br = (attributes) => ({ tag: "br", attributes });

/**
 * @type {import("./index").Wbr}
 */
export const wbr = (attributes) => ({ tag: "wbr", attributes });

/**
 * @type {import("./index").Ins}
 */
export const ins = (attributes, children) => ({ tag: "ins", attributes, children });

/**
 * @type {import("./index").Del}
 */
export const del = (attributes, children) => ({ tag: "del", attributes, children });

/**
 * @type {import("./index").Picture}
 */
export const picture = (attributes, children) => ({ tag: "picture", attributes, children });

/**
 * @type {import("./index").Img}
 */
export const img = (attributes) => ({ tag: "img", attributes });

/**
 * @type {import("./index").Iframe}
 */
export const iframe = (attributes, children) => ({ tag: "iframe", attributes, children });

/**
 * @type {import("./index").Embed}
 */
export const embed = (attributes) => ({ tag: "embed", attributes });

/**
 * @type {import("./index").Object}
 */
export const object = (attributes, children) => ({ tag: "object", attributes, children });

/**
 * @type {import("./index").Param}
 */
export const param = (attributes) => ({ tag: "param", attributes });

/**
 * @type {import("./index").Video}
 */
export const video = (attributes, children) => ({ tag: "video", attributes, children });

/**
 * @type {import("./index").Audio}
 */
export const audio = (attributes, children) => ({ tag: "audio", attributes, children });

/**
 * @type {import("./index").Source}
 */
export const source = (attributes) => ({ tag: "source", attributes });

/**
 * @type {import("./index").Track}
 */
export const track = (attributes) => ({ tag: "track", attributes });

/**
 * @type {import("./index").Map}
 */
export const map = (attributes, children) => ({ tag: "map", attributes, children });

/**
 * @type {import("./index").Area}
 */
export const area = (attributes) => ({ tag: "area", attributes });

/**
 * @type {import("./index").Table}
 */
export const table = (attributes, children) => ({ tag: "table", attributes, children });

/**
 * @type {import("./index").Caption}
 */
export const caption = (attributes, children) => ({ tag: "caption", attributes, children });

/**
 * @type {import("./index").Colgroup}
 */
export const colgroup = (attributes, children) => ({ tag: "colgroup", attributes, children });

/**
 * @type {import("./index").Col}
 */
export const col = (attributes) => ({ tag: "col", attributes });

/**
 * @type {import("./index").Tbody}
 */
export const tbody = (attributes, children) => ({ tag: "tbody", attributes, children });

/**
 * @type {import("./index").Thead}
 */
export const thead = (attributes, children) => ({ tag: "thead", attributes, children });

/**
 * @type {import("./index").Tfoot}
 */
export const tfoot = (attributes, children) => ({ tag: "tfoot", attributes, children });

/**
 * @type {import("./index").Tr}
 */
export const tr = (attributes, children) => ({ tag: "tr", attributes, children });

/**
 * @type {import("./index").Td}
 */
export const td = (attributes, children) => ({ tag: "td", attributes, children });

/**
 * @type {import("./index").Th}
 */
export const th = (attributes, children) => ({ tag: "th", attributes, children });

/**
 * @type {import("./index").Form}
 */
export const form = (attributes, children) => ({ tag: "form", attributes, children });

/**
 * @type {import("./index").Label}
 */
export const label = (attributes, children) => ({ tag: "label", attributes, children });

/**
 * @type {import("./index").Input}
 */
export const input = (attributes) => ({ tag: "input", attributes });

/**
 * @type {import("./index").Button}
 */
export const button = (attributes, children) => ({ tag: "button", attributes, children });

/**
 * @type {import("./index").Select}
 */
export const select = (attributes, children) => ({ tag: "select", attributes, children });

/**
 * @type {import("./index").Datalist}
 */
export const datalist = (attributes, children) => ({ tag: "datalist", attributes, children });

/**
 * @type {import("./index").Optgroup}
 */
export const optgroup = (attributes, children) => ({ tag: "optgroup", attributes, children });

/**
 * @type {import("./index").Option}
 */
export const option = (attributes, children) => ({ tag: "option", attributes, children });

/**
 * @type {import("./index").Textarea}
 */
export const textarea = (attributes, children) => ({ tag: "textarea", attributes, children });

/**
 * @type {import("./index").Output}
 */
export const output = (attributes, children) => ({ tag: "output", attributes, children });

/**
 * @type {import("./index").Progress}
 */
export const progress = (attributes, children) => ({ tag: "progress", attributes, children });

/**
 * @type {import("./index").Meter}
 */
export const meter = (attributes, children) => ({ tag: "meter", attributes, children });

/**
 * @type {import("./index").Fieldset}
 */
export const fieldset = (attributes, children) => ({ tag: "fieldset", attributes, children });

/**
 * @type {import("./index").Legend}
 */
export const legend = (attributes, children) => ({ tag: "legend", attributes, children });

/**
 * @type {import("./index").Details}
 */
export const details = (attributes, children) => ({ tag: "details", attributes, children });

/**
 * @type {import("./index").Summary}
 */
export const summary = (attributes, children) => ({ tag: "summary", attributes, children });

/**
 * @type {import("./index").Dialog}
 */
export const dialog = (attributes, children) => ({ tag: "dialog", attributes, children });

/**
 * @type {import("./index").Script}
 */
export const script = (attributes, children) => ({ tag: "script", attributes, children });

/**
 * @type {import("./index").Noscript}
 */
export const noscript = (attributes, children) => ({ tag: "noscript", attributes, children });

/**
 * @type {import("./index").Template}
 */
export const template = (attributes, children) => ({ tag: "template", attributes, children });

/**
 * @type {import("./index").Canvas}
 */
export const canvas = (attributes, children) => ({ tag: "canvas", attributes, children });

/**
 * @type {import("./index").Slot}
 */
export const slot = (attributes, children) => ({ tag: "slot", attributes, children });

/**
 * @type {import("./index").Data}
 */
export const data = (attributes, children) => ({ tag: "data", attributes, children });

/**
 * @type {import("./index").Hgroup}
 */
export const hgroup = (attributes, children) => ({ tag: "hgroup", attributes, children });

/**
 * @type {import("./index").Menu}
 */
export const menu = (attributes, children) => ({ tag: "menu", attributes, children });

/**
 * @type {import("./index").Search}
 */
export const search = (attributes, children) => ({ tag: "search", attributes, children });

/**
 * @type {import("./index").Fencedframe}
 */
export const fencedframe = (attributes, children) => ({ tag: "fencedframe", attributes, children });

/**
 * @type {import("./index").Selectedcontent}
 */
export const selectedcontent = (attributes, children) => ({
  tag: "selectedcontent",
  attributes,
  children,
});
