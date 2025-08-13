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
 * @type {import("./index").render}
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
 * @type {import("./index").unsafeHtml}
 */
export const unsafeHtml = (value) => ({ value });

/**
 * @type {import("./index").html}
 */
export const html = (attributes, children) => ({ tag: "html", attributes, children });

/**
 * @type {import("./index").head}
 */
export const head = (attributes, children) => ({ tag: "head", attributes, children });

/**
 * @type {import("./index").title}
 */
export const title = (attributes, children) => ({ tag: "title", attributes, children });

/**
 * @type {import("./index").base}
 */
export const base = (attributes) => ({ tag: "base", attributes });

/**
 * @type {import("./index").link}
 */
export const link = (attributes) => ({ tag: "link", attributes });

/**
 * @type {import("./index").meta}
 */
export const meta = (attributes) => ({ tag: "meta", attributes });

/**
 * @type {import("./index").style}
 */
export const style = (attributes, children) => ({ tag: "style", attributes, children });

/**
 * @type {import("./index").body}
 */
export const body = (attributes, children) => ({ tag: "body", attributes, children });

/**
 * @type {import("./index").article}
 */
export const article = (attributes, children) => ({ tag: "article", attributes, children });

/**
 * @type {import("./index").section}
 */
export const section = (attributes, children) => ({ tag: "section", attributes, children });

/**
 * @type {import("./index").nav}
 */
export const nav = (attributes, children) => ({ tag: "nav", attributes, children });

/**
 * @type {import("./index").aside}
 */
export const aside = (attributes, children) => ({ tag: "aside", attributes, children });

/**
 * @type {import("./index").h1}
 */
export const h1 = (attributes, children) => ({ tag: "h1", attributes, children });

/**
 * @type {import("./index").h2}
 */
export const h2 = (attributes, children) => ({ tag: "h2", attributes, children });

/**
 * @type {import("./index").h3}
 */
export const h3 = (attributes, children) => ({ tag: "h3", attributes, children });

/**
 * @type {import("./index").h4}
 */
export const h4 = (attributes, children) => ({ tag: "h4", attributes, children });

/**
 * @type {import("./index").h5}
 */
export const h5 = (attributes, children) => ({ tag: "h5", attributes, children });

/**
 * @type {import("./index").h6}
 */
export const h6 = (attributes, children) => ({ tag: "h6", attributes, children });

/**
 * @type {import("./index").header}
 */
export const header = (attributes, children) => ({ tag: "header", attributes, children });

/**
 * @type {import("./index").footer}
 */
export const footer = (attributes, children) => ({ tag: "footer", attributes, children });

/**
 * @type {import("./index").address}
 */
export const address = (attributes, children) => ({ tag: "address", attributes, children });

/**
 * @type {import("./index").p}
 */
export const p = (attributes, children) => ({ tag: "p", attributes, children });

/**
 * @type {import("./index").hr}
 */
export const hr = (attributes) => ({ tag: "hr", attributes });

/**
 * @type {import("./index").pre}
 */
export const pre = (attributes, children) => ({ tag: "pre", attributes, children });

/**
 * @type {import("./index").blockquote}
 */
export const blockquote = (attributes, children) => ({ tag: "blockquote", attributes, children });

/**
 * @type {import("./index").ol}
 */
export const ol = (attributes, children) => ({ tag: "ol", attributes, children });

/**
 * @type {import("./index").ul}
 */
export const ul = (attributes, children) => ({ tag: "ul", attributes, children });

/**
 * @type {import("./index").li}
 */
export const li = (attributes, children) => ({ tag: "li", attributes, children });

/**
 * @type {import("./index").dl}
 */
export const dl = (attributes, children) => ({ tag: "dl", attributes, children });

/**
 * @type {import("./index").dt}
 */
export const dt = (attributes, children) => ({ tag: "dt", attributes, children });

/**
 * @type {import("./index").dd}
 */
export const dd = (attributes, children) => ({ tag: "dd", attributes, children });

/**
 * @type {import("./index").figure}
 */
export const figure = (attributes, children) => ({ tag: "figure", attributes, children });

/**
 * @type {import("./index").figcaption}
 */
export const figcaption = (attributes, children) => ({ tag: "figcaption", attributes, children });

/**
 * @type {import("./index").main}
 */
export const main = (attributes, children) => ({ tag: "main", attributes, children });

/**
 * @type {import("./index").div}
 */
export const div = (attributes, children) => ({ tag: "div", attributes, children });

/**
 * @type {import("./index").a}
 */
export const a = (attributes, children) => ({ tag: "a", attributes, children });

/**
 * @type {import("./index").em}
 */
export const em = (attributes, children) => ({ tag: "em", attributes, children });

/**
 * @type {import("./index").strong}
 */
export const strong = (attributes, children) => ({ tag: "strong", attributes, children });

/**
 * @type {import("./index").small}
 */
export const small = (attributes, children) => ({ tag: "small", attributes, children });

/**
 * @type {import("./index").s}
 */
export const s = (attributes, children) => ({ tag: "s", attributes, children });

/**
 * @type {import("./index").cite}
 */
export const cite = (attributes, children) => ({ tag: "cite", attributes, children });

/**
 * @type {import("./index").q}
 */
export const q = (attributes, children) => ({ tag: "q", attributes, children });

/**
 * @type {import("./index").dfn}
 */
export const dfn = (attributes, children) => ({ tag: "dfn", attributes, children });

/**
 * @type {import("./index").abbr}
 */
export const abbr = (attributes, children) => ({ tag: "abbr", attributes, children });

/**
 * @type {import("./index").ruby}
 */
export const ruby = (attributes, children) => ({ tag: "ruby", attributes, children });

/**
 * @type {import("./index").rb}
 */
export const rb = (attributes, children) => ({ tag: "rb", attributes, children });

/**
 * @type {import("./index").rt}
 */
export const rt = (attributes, children) => ({ tag: "rt", attributes, children });

/**
 * @type {import("./index").rp}
 */
export const rp = (attributes, children) => ({ tag: "rp", attributes, children });

/**
 * @type {import("./index").time}
 */
export const time = (attributes, children) => ({ tag: "time", attributes, children });

/**
 * @type {import("./index").code}
 */
export const code = (attributes, children) => ({ tag: "code", attributes, children });

/**
 * @type {import("./index").var_}
 */
export const var_ = (attributes, children) => ({ tag: "var", attributes, children });

/**
 * @type {import("./index").samp}
 */
export const samp = (attributes, children) => ({ tag: "samp", attributes, children });

/**
 * @type {import("./index").kbd}
 */
export const kbd = (attributes, children) => ({ tag: "kbd", attributes, children });

/**
 * @type {import("./index").sub}
 */
export const sub = (attributes, children) => ({ tag: "sub", attributes, children });

/**
 * @type {import("./index").sup}
 */
export const sup = (attributes, children) => ({ tag: "sup", attributes, children });

/**
 * @type {import("./index").i}
 */
export const i = (attributes, children) => ({ tag: "i", attributes, children });

/**
 * @type {import("./index").b}
 */
export const b = (attributes, children) => ({ tag: "b", attributes, children });

/**
 * @type {import("./index").u}
 */
export const u = (attributes, children) => ({ tag: "u", attributes, children });

/**
 * @type {import("./index").mark}
 */
export const mark = (attributes, children) => ({ tag: "mark", attributes, children });

/**
 * @type {import("./index").bdi}
 */
export const bdi = (attributes, children) => ({ tag: "bdi", attributes, children });

/**
 * @type {import("./index").bdo}
 */
export const bdo = (attributes, children) => ({ tag: "bdo", attributes, children });

/**
 * @type {import("./index").span}
 */
export const span = (attributes, children) => ({ tag: "span", attributes, children });

/**
 * @type {import("./index").br}
 */
export const br = (attributes) => ({ tag: "br", attributes });

/**
 * @type {import("./index").wbr}
 */
export const wbr = (attributes) => ({ tag: "wbr", attributes });

/**
 * @type {import("./index").ins}
 */
export const ins = (attributes, children) => ({ tag: "ins", attributes, children });

/**
 * @type {import("./index").del}
 */
export const del = (attributes, children) => ({ tag: "del", attributes, children });

/**
 * @type {import("./index").picture}
 */
export const picture = (attributes, children) => ({ tag: "picture", attributes, children });

/**
 * @type {import("./index").img}
 */
export const img = (attributes) => ({ tag: "img", attributes });

/**
 * @type {import("./index").iframe}
 */
export const iframe = (attributes, children) => ({ tag: "iframe", attributes, children });

/**
 * @type {import("./index").embed}
 */
export const embed = (attributes) => ({ tag: "embed", attributes });

/**
 * @type {import("./index").object_}
 */
export const object_ = (attributes, children) => ({ tag: "object", attributes, children });

/**
 * @type {import("./index").param}
 */
export const param = (attributes) => ({ tag: "param", attributes });

/**
 * @type {import("./index").video}
 */
export const video = (attributes, children) => ({ tag: "video", attributes, children });

/**
 * @type {import("./index").audio}
 */
export const audio = (attributes, children) => ({ tag: "audio", attributes, children });

/**
 * @type {import("./index").source}
 */
export const source = (attributes) => ({ tag: "source", attributes });

/**
 * @type {import("./index").track}
 */
export const track = (attributes) => ({ tag: "track", attributes });

/**
 * @type {import("./index").map}
 */
export const map = (attributes, children) => ({ tag: "map", attributes, children });

/**
 * @type {import("./index").area}
 */
export const area = (attributes) => ({ tag: "area", attributes });

/**
 * @type {import("./index").table}
 */
export const table = (attributes, children) => ({ tag: "table", attributes, children });

/**
 * @type {import("./index").caption}
 */
export const caption = (attributes, children) => ({ tag: "caption", attributes, children });

/**
 * @type {import("./index").colgroup}
 */
export const colgroup = (attributes, children) => ({ tag: "colgroup", attributes, children });

/**
 * @type {import("./index").col}
 */
export const col = (attributes) => ({ tag: "col", attributes });

/**
 * @type {import("./index").tbody}
 */
export const tbody = (attributes, children) => ({ tag: "tbody", attributes, children });

/**
 * @type {import("./index").thead}
 */
export const thead = (attributes, children) => ({ tag: "thead", attributes, children });

/**
 * @type {import("./index").tfoot}
 */
export const tfoot = (attributes, children) => ({ tag: "tfoot", attributes, children });

/**
 * @type {import("./index").tr}
 */
export const tr = (attributes, children) => ({ tag: "tr", attributes, children });

/**
 * @type {import("./index").td}
 */
export const td = (attributes, children) => ({ tag: "td", attributes, children });

/**
 * @type {import("./index").th}
 */
export const th = (attributes, children) => ({ tag: "th", attributes, children });

/**
 * @type {import("./index").form}
 */
export const form = (attributes, children) => ({ tag: "form", attributes, children });

/**
 * @type {import("./index").label}
 */
export const label = (attributes, children) => ({ tag: "label", attributes, children });

/**
 * @type {import("./index").input}
 */
export const input = (attributes) => ({ tag: "input", attributes });

/**
 * @type {import("./index").button}
 */
export const button = (attributes, children) => ({ tag: "button", attributes, children });

/**
 * @type {import("./index").select}
 */
export const select = (attributes, children) => ({ tag: "select", attributes, children });

/**
 * @type {import("./index").datalist}
 */
export const datalist = (attributes, children) => ({ tag: "datalist", attributes, children });

/**
 * @type {import("./index").optgroup}
 */
export const optgroup = (attributes, children) => ({ tag: "optgroup", attributes, children });

/**
 * @type {import("./index").option}
 */
export const option = (attributes, children) => ({ tag: "option", attributes, children });

/**
 * @type {import("./index").textarea}
 */
export const textarea = (attributes, children) => ({ tag: "textarea", attributes, children });

/**
 * @type {import("./index").output}
 */
export const output = (attributes, children) => ({ tag: "output", attributes, children });

/**
 * @type {import("./index").progress}
 */
export const progress = (attributes, children) => ({ tag: "progress", attributes, children });

/**
 * @type {import("./index").meter}
 */
export const meter = (attributes, children) => ({ tag: "meter", attributes, children });

/**
 * @type {import("./index").fieldset}
 */
export const fieldset = (attributes, children) => ({ tag: "fieldset", attributes, children });

/**
 * @type {import("./index").legend}
 */
export const legend = (attributes, children) => ({ tag: "legend", attributes, children });

/**
 * @type {import("./index").details}
 */
export const details = (attributes, children) => ({ tag: "details", attributes, children });

/**
 * @type {import("./index").summary}
 */
export const summary = (attributes, children) => ({ tag: "summary", attributes, children });

/**
 * @type {import("./index").dialog}
 */
export const dialog = (attributes, children) => ({ tag: "dialog", attributes, children });

/**
 * @type {import("./index").script}
 */
export const script = (attributes, children) => ({ tag: "script", attributes, children });

/**
 * @type {import("./index").noscript}
 */
export const noscript = (attributes, children) => ({ tag: "noscript", attributes, children });

/**
 * @type {import("./index").template}
 */
export const template = (attributes, children) => ({ tag: "template", attributes, children });

/**
 * @type {import("./index").canvas}
 */
export const canvas = (attributes, children) => ({ tag: "canvas", attributes, children });

/**
 * @type {import("./index").slot}
 */
export const slot = (attributes, children) => ({ tag: "slot", attributes, children });

/**
 * @type {import("./index").data}
 */
export const data = (attributes, children) => ({ tag: "data", attributes, children });

/**
 * @type {import("./index").hgroup}
 */
export const hgroup = (attributes, children) => ({ tag: "hgroup", attributes, children });

/**
 * @type {import("./index").menu}
 */
export const menu = (attributes, children) => ({ tag: "menu", attributes, children });

/**
 * @type {import("./index").search}
 */
export const search = (attributes, children) => ({ tag: "search", attributes, children });

/**
 * @type {import("./index").fencedframe}
 */
export const fencedframe = (attributes, children) => ({ tag: "fencedframe", attributes, children });

/**
 * @type {import("./index").selectedcontent}
 */
export const selectedcontent = (attributes, children) => ({
  tag: "selectedcontent",
  attributes,
  children,
});
