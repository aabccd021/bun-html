import type { Element } from "./html.ts";

type ValueSets = {
  b: "true" | "false";
  u: "true" | "false" | "undefined";
  o: "on" | "off";
  y: "yes" | "no";
  w: "soft" | "hard";
  d: "ltr" | "rtl" | "auto";
  m: "get" | "post" | "dialog";
  fm: "get" | "post";
  s: "row" | "col" | "rowgroup" | "colgroup";
  t:
    | "hidden"
    | "text"
    | "search"
    | "tel"
    | "url"
    | "email"
    | "password"
    | "datetime"
    | "date"
    | "month"
    | "week"
    | "time"
    | "datetime-local"
    | "number"
    | "range"
    | "color"
    | "checkbox"
    | "radio"
    | "file"
    | "submit"
    | "image"
    | "reset"
    | "button";
  im:
    | "verbatim"
    | "latin"
    | "latin-name"
    | "latin-prose"
    | "full-width-latin"
    | "kana"
    | "kana-name"
    | "katakana"
    | "numeric"
    | "tel"
    | "email"
    | "url";
  bt: "button" | "submit" | "reset";
  lt: "1" | "a" | "A" | "i" | "I";
  mt: "context" | "toolbar";
  mit: "command" | "checkbox" | "radio";
  et:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  tk: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  pl: "none" | "metadata" | "auto";
  sh: "circle" | "default" | "poly" | "rect";
  xo: "anonymous" | "use-credentials";
  target: "_self" | "_blank" | "_parent" | "_top";
  sb:
    | "allow-forms"
    | "allow-modals"
    | "allow-pointer-lock"
    | "allow-popups"
    | "allow-popups-to-escape-sandbox"
    | "allow-same-origin"
    | "allow-scripts"
    | "allow-top-navigation";
  tristate: "true" | "false" | "mixed" | "undefined";
  inputautocomplete:
    | "additional-name"
    | "address-level1"
    | "address-level2"
    | "address-level3"
    | "address-level4"
    | "address-line1"
    | "address-line2"
    | "address-line3"
    | "bday"
    | "bday-year"
    | "bday-day"
    | "bday-month"
    | "billing"
    | "cc-additional-name"
    | "cc-csc"
    | "cc-exp"
    | "cc-exp-month"
    | "cc-exp-year"
    | "cc-family-name"
    | "cc-given-name"
    | "cc-name"
    | "cc-number"
    | "cc-type"
    | "country"
    | "country-name"
    | "current-password"
    | "email"
    | "family-name"
    | "fax"
    | "given-name"
    | "home"
    | "honorific-prefix"
    | "honorific-suffix"
    | "impp"
    | "language"
    | "mobile"
    | "name"
    | "new-password"
    | "nickname"
    | "off"
    | "on"
    | "organization"
    | "organization-title"
    | "pager"
    | "photo"
    | "postal-code"
    | "sex"
    | "shipping"
    | "street-address"
    | "tel-area-code"
    | "tel"
    | "tel-country-code"
    | "tel-extension"
    | "tel-local"
    | "tel-local-prefix"
    | "tel-local-suffix"
    | "tel-national"
    | "transaction-amount"
    | "transaction-currency"
    | "url"
    | "username"
    | "work";
  autocomplete: "inline" | "list" | "both" | "none";
  current: "page" | "step" | "location" | "date" | "time" | "true" | "false";
  dropeffect: "copy" | "move" | "link" | "execute" | "popup" | "none";
  invalid: "grammar" | "false" | "spelling" | "true";
  live: "off" | "polite" | "assertive";
  orientation: "vertical" | "horizontal" | "undefined";
  relevant: "additions" | "removals" | "text" | "all" | "additions text";
  sort: "ascending" | "descending" | "none" | "other";
  roles:
    | "alert"
    | "alertdialog"
    | "button"
    | "checkbox"
    | "dialog"
    | "gridcell"
    | "link"
    | "log"
    | "marquee"
    | "menuitem"
    | "menuitemcheckbox"
    | "menuitemradio"
    | "option"
    | "progressbar"
    | "radio"
    | "scrollbar"
    | "searchbox"
    | "slider"
    | "spinbutton"
    | "status"
    | "switch"
    | "tab"
    | "tabpanel"
    | "textbox"
    | "timer"
    | "tooltip"
    | "treeitem"
    | "combobox"
    | "grid"
    | "listbox"
    | "menu"
    | "menubar"
    | "radiogroup"
    | "tablist"
    | "tree"
    | "treegrid"
    | "application"
    | "article"
    | "cell"
    | "columnheader"
    | "definition"
    | "directory"
    | "document"
    | "feed"
    | "figure"
    | "group"
    | "heading"
    | "img"
    | "list"
    | "listitem"
    | "math"
    | "none"
    | "note"
    | "presentation"
    | "region"
    | "row"
    | "rowgroup"
    | "rowheader"
    | "separator"
    | "table"
    | "term"
    | "text"
    | "toolbar"
    | "banner"
    | "complementary"
    | "contentinfo"
    | "form"
    | "main"
    | "navigation"
    | "region"
    | "search"
    | "doc-abstract"
    | "doc-acknowledgments"
    | "doc-afterword"
    | "doc-appendix"
    | "doc-backlink"
    | "doc-biblioentry"
    | "doc-bibliography"
    | "doc-biblioref"
    | "doc-chapter"
    | "doc-colophon"
    | "doc-conclusion"
    | "doc-cover"
    | "doc-credit"
    | "doc-credits"
    | "doc-dedication"
    | "doc-endnote"
    | "doc-endnotes"
    | "doc-epigraph"
    | "doc-epilogue"
    | "doc-errata"
    | "doc-example"
    | "doc-footnote"
    | "doc-foreword"
    | "doc-glossary"
    | "doc-glossref"
    | "doc-index"
    | "doc-introduction"
    | "doc-noteref"
    | "doc-notice"
    | "doc-pagebreak"
    | "doc-pagelist"
    | "doc-part"
    | "doc-preface"
    | "doc-prologue"
    | "doc-pullquote"
    | "doc-qna"
    | "doc-subtitle"
    | "doc-tip"
    | "doc-toc";
  metanames:
    | "application-name"
    | "author"
    | "description"
    | "format-detection"
    | "generator"
    | "keywords"
    | "publisher"
    | "referrer"
    | "robots"
    | "theme-color"
    | "viewport";
  haspopup: "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
  decoding: "sync" | "async" | "auto";
  loading: "eager" | "lazy";
  referrerpolicy:
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url";
  enterkeyhint:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";
  popover: "auto" | "hint" | "manual";
  fetchpriority: "high" | "low" | "auto";
};

type GlobalAttributes = {
  accesskey: string | number | boolean | null;
  autocapitalize: string | number | boolean | null;
  autocorrect: ValueSets["o"];
  autofocus: string | number | boolean | null;
  class: string | number | boolean | null;
  contenteditable: string | number | boolean | null;
  contextmenu: string | number | boolean | null;
  dir: ValueSets["d"];
  draggable: ValueSets["b"];
  dropzone: string | number | boolean | null;
  enterkeyhint: ValueSets["enterkeyhint"];
  exportparts: string | number | boolean | null;
  hidden: boolean;
  id: string | number | boolean | null;
  inert: string | number | boolean | null;
  inputmode: string | number | boolean | null;
  is: string | number | boolean | null;
  itemid: string | number | boolean | null;
  itemprop: string | number | boolean | null;
  itemref: string | number | boolean | null;
  itemscope: boolean;
  itemtype: string | number | boolean | null;
  lang: string | number | boolean | null;
  nonce: string | number | boolean | null;
  part: string | number | boolean | null;
  popover: ValueSets["popover"];
  role: ValueSets["roles"];
  slot: string | number | boolean | null;
  spellcheck: ValueSets["b"];
  style: string | number | boolean | null;
  tabindex: string | number | boolean | null;
  title: string | number | boolean | null;
  translate: ValueSets["y"];
  virtualkeyboardpolicy: ValueSets["b"];
  onabort: string | number | boolean | null;
  onblur: string | number | boolean | null;
  oncanplay: string | number | boolean | null;
  oncanplaythrough: string | number | boolean | null;
  onchange: string | number | boolean | null;
  onclick: string | number | boolean | null;
  oncontextmenu: string | number | boolean | null;
  ondblclick: string | number | boolean | null;
  ondrag: string | number | boolean | null;
  ondragend: string | number | boolean | null;
  ondragenter: string | number | boolean | null;
  ondragleave: string | number | boolean | null;
  ondragover: string | number | boolean | null;
  ondragstart: string | number | boolean | null;
  ondrop: string | number | boolean | null;
  ondurationchange: string | number | boolean | null;
  onemptied: string | number | boolean | null;
  onended: string | number | boolean | null;
  onerror: string | number | boolean | null;
  onfocus: string | number | boolean | null;
  onformchange: string | number | boolean | null;
  onforminput: string | number | boolean | null;
  oninput: string | number | boolean | null;
  oninvalid: string | number | boolean | null;
  onkeydown: string | number | boolean | null;
  onkeypress: string | number | boolean | null;
  onkeyup: string | number | boolean | null;
  onload: string | number | boolean | null;
  onloadeddata: string | number | boolean | null;
  onloadedmetadata: string | number | boolean | null;
  onloadstart: string | number | boolean | null;
  onmousedown: string | number | boolean | null;
  onmousemove: string | number | boolean | null;
  onmouseout: string | number | boolean | null;
  onmouseover: string | number | boolean | null;
  onmouseup: string | number | boolean | null;
  onmousewheel: string | number | boolean | null;
  onmouseenter: string | number | boolean | null;
  onmouseleave: string | number | boolean | null;
  onpause: string | number | boolean | null;
  onplay: string | number | boolean | null;
  onplaying: string | number | boolean | null;
  onprogress: string | number | boolean | null;
  onratechange: string | number | boolean | null;
  onreset: string | number | boolean | null;
  onresize: string | number | boolean | null;
  onreadystatechange: string | number | boolean | null;
  onscroll: string | number | boolean | null;
  onseeked: string | number | boolean | null;
  onseeking: string | number | boolean | null;
  onselect: string | number | boolean | null;
  onshow: string | number | boolean | null;
  onstalled: string | number | boolean | null;
  onsubmit: string | number | boolean | null;
  onsuspend: string | number | boolean | null;
  ontimeupdate: string | number | boolean | null;
  onvolumechange: string | number | boolean | null;
  onwaiting: string | number | boolean | null;
  onpointercancel: string | number | boolean | null;
  onpointerdown: string | number | boolean | null;
  onpointerenter: string | number | boolean | null;
  onpointerleave: string | number | boolean | null;
  onpointerlockchange: string | number | boolean | null;
  onpointerlockerror: string | number | boolean | null;
  onpointermove: string | number | boolean | null;
  onpointerout: string | number | boolean | null;
  onpointerover: string | number | boolean | null;
  onpointerup: string | number | boolean | null;
  "aria-activedescendant": string | number | boolean | null;
  "aria-atomic": ValueSets["b"];
  "aria-autocomplete": ValueSets["autocomplete"];
  "aria-busy": ValueSets["b"];
  "aria-checked": ValueSets["tristate"];
  "aria-colcount": string | number | boolean | null;
  "aria-colindex": string | number | boolean | null;
  "aria-colspan": string | number | boolean | null;
  "aria-controls": string | number | boolean | null;
  "aria-current": ValueSets["current"];
  "aria-describedby": string | number | boolean | null;
  "aria-disabled": ValueSets["b"];
  "aria-dropeffect": ValueSets["dropeffect"];
  "aria-errormessage": string | number | boolean | null;
  "aria-expanded": ValueSets["u"];
  "aria-flowto": string | number | boolean | null;
  "aria-grabbed": ValueSets["u"];
  "aria-haspopup": ValueSets["haspopup"];
  "aria-hidden": ValueSets["b"];
  "aria-invalid": ValueSets["invalid"];
  "aria-label": string | number | boolean | null;
  "aria-labelledby": string | number | boolean | null;
  "aria-level": string | number | boolean | null;
  "aria-live": ValueSets["live"];
  "aria-modal": ValueSets["b"];
  "aria-multiline": ValueSets["b"];
  "aria-multiselectable": ValueSets["b"];
  "aria-orientation": ValueSets["orientation"];
  "aria-owns": string | number | boolean | null;
  "aria-placeholder": string | number | boolean | null;
  "aria-posinset": string | number | boolean | null;
  "aria-pressed": ValueSets["tristate"];
  "aria-readonly": ValueSets["b"];
  "aria-relevant": ValueSets["relevant"];
  "aria-required": ValueSets["b"];
  "aria-roledescription": string | number | boolean | null;
  "aria-rowcount": string | number | boolean | null;
  "aria-rowindex": string | number | boolean | null;
  "aria-rowspan": string | number | boolean | null;
  "aria-selected": ValueSets["u"];
  "aria-setsize": string | number | boolean | null;
  "aria-sort": ValueSets["sort"];
  "aria-valuemax": string | number | boolean | null;
  "aria-valuemin": string | number | boolean | null;
  "aria-valuenow": string | number | boolean | null;
  "aria-valuetext": string | number | boolean | null;
  "aria-details": string | number | boolean | null;
  "aria-keyshortcuts": string | number | boolean | null;
};

export type HtmlTags =
  | "html"
  | "head"
  | "title"
  | "base"
  | "link"
  | "meta"
  | "style"
  | "body"
  | "article"
  | "section"
  | "nav"
  | "aside"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "header"
  | "footer"
  | "address"
  | "p"
  | "hr"
  | "pre"
  | "blockquote"
  | "ol"
  | "ul"
  | "li"
  | "dl"
  | "dt"
  | "dd"
  | "figure"
  | "figcaption"
  | "main"
  | "div"
  | "a"
  | "em"
  | "strong"
  | "small"
  | "s"
  | "cite"
  | "q"
  | "dfn"
  | "abbr"
  | "ruby"
  | "rb"
  | "rt"
  | "rp"
  | "time"
  | "code"
  | "var"
  | "samp"
  | "kbd"
  | "sub"
  | "sup"
  | "i"
  | "b"
  | "u"
  | "mark"
  | "bdi"
  | "bdo"
  | "span"
  | "br"
  | "wbr"
  | "ins"
  | "del"
  | "picture"
  | "img"
  | "iframe"
  | "embed"
  | "object"
  | "param"
  | "video"
  | "audio"
  | "source"
  | "track"
  | "map"
  | "area"
  | "table"
  | "caption"
  | "colgroup"
  | "col"
  | "tbody"
  | "thead"
  | "tfoot"
  | "tr"
  | "td"
  | "th"
  | "form"
  | "label"
  | "input"
  | "button"
  | "select"
  | "datalist"
  | "optgroup"
  | "option"
  | "textarea"
  | "output"
  | "progress"
  | "meter"
  | "fieldset"
  | "legend"
  | "details"
  | "summary"
  | "dialog"
  | "script"
  | "noscript"
  | "template"
  | "canvas"
  | "slot"
  | "data"
  | "hgroup"
  | "menu"
  | "search"
  | "fencedframe"
  | "selectedcontent";

export const html = (
  attributes: GlobalAttributes & {
    manifest: string | number | boolean | null;
    version: string | number | boolean | null;
    xmlns: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "html", attributes, children });

export const head = (
  attributes: GlobalAttributes & {
    profile: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "head", attributes, children });

export const title = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "title",
  attributes,
  children,
});

export const base = (
  attributes: GlobalAttributes & {
    href: string | number | boolean | null;
    target: ValueSets["target"];
  },
  children: readonly Element[],
): Element => ({ tag: "base", attributes, children });

export const link = (
  attributes: GlobalAttributes & {
    href: string | number | boolean | null;
    crossorigin: ValueSets["xo"];
    rel: string | number | boolean | null;
    media: string | number | boolean | null;
    hreflang: string | number | boolean | null;
    type: string | number | boolean | null;
    sizes: string | number | boolean | null;
    as: string | number | boolean | null;
    importance: string | number | boolean | null;
    integrity: string | number | boolean | null;
    referrerpolicy: string | number | boolean | null;
    title: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "link", attributes, children });

export const meta = (
  attributes: GlobalAttributes & {
    name: string | number | boolean | null;
    "http-equiv": string | number | boolean | null;
    content: string | number | boolean | null;
    charset: string | number | boolean | null;
    scheme: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "meta", attributes, children });

export const style = (
  attributes: GlobalAttributes & {
    media: string | number | boolean | null;
    nonce: string | number | boolean | null;
    type: string | number | boolean | null;
    scoped: boolean;
    title: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "style", attributes, children });

export const body = (
  attributes: GlobalAttributes & {
    onafterprint: string | number | boolean | null;
    onbeforeprint: string | number | boolean | null;
    onbeforeunload: string | number | boolean | null;
    onhashchange: string | number | boolean | null;
    onlanguagechange: string | number | boolean | null;
    onmessage: string | number | boolean | null;
    onoffline: string | number | boolean | null;
    ononline: string | number | boolean | null;
    onpagehide: string | number | boolean | null;
    onpageshow: string | number | boolean | null;
    onpopstate: string | number | boolean | null;
    onstorage: string | number | boolean | null;
    onunload: string | number | boolean | null;
    alink: string | number | boolean | null;
    background: string | number | boolean | null;
    bgcolor: string | number | boolean | null;
    bottommargin: string | number | boolean | null;
    leftmargin: string | number | boolean | null;
    link: string | number | boolean | null;
    onblur: string | number | boolean | null;
    onerror: string | number | boolean | null;
    onfocus: string | number | boolean | null;
    onload: string | number | boolean | null;
    onredo: string | number | boolean | null;
    onresize: string | number | boolean | null;
    onundo: string | number | boolean | null;
    rightmargin: string | number | boolean | null;
    text: string | number | boolean | null;
    topmargin: string | number | boolean | null;
    vlink: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "body", attributes, children });

export const article = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "article",
  attributes,
  children,
});

export const section = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "section",
  attributes,
  children,
});

export const nav = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "nav",
  attributes,
  children,
});

export const aside = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "aside",
  attributes,
  children,
});

export const h1 = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "h1",
  attributes,
  children,
});

export const h2 = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "h2",
  attributes,
  children,
});

export const h3 = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "h3",
  attributes,
  children,
});

export const h4 = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "h4",
  attributes,
  children,
});

export const h5 = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "h5",
  attributes,
  children,
});

export const h6 = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "h6",
  attributes,
  children,
});

export const header = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "header",
  attributes,
  children,
});

export const footer = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "footer",
  attributes,
  children,
});

export const address = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "address",
  attributes,
  children,
});

export const p = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "p",
  attributes,
  children,
});

export const hr = (
  attributes: GlobalAttributes & {
    align: string | number | boolean | null;
    color: string | number | boolean | null;
    noshade: string | number | boolean | null;
    size: string | number | boolean | null;
    width: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "hr", attributes, children });

export const pre = (
  attributes: GlobalAttributes & {
    cols: string | number | boolean | null;
    width: string | number | boolean | null;
    wrap: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "pre", attributes, children });

export const blockquote = (
  attributes: GlobalAttributes & {
    cite: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "blockquote", attributes, children });

export const ol = (
  attributes: GlobalAttributes & {
    reversed: boolean;
    start: string | number | boolean | null;
    type: ValueSets["lt"];
    compact: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "ol", attributes, children });

export const ul = (
  attributes: GlobalAttributes & {
    compact: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "ul", attributes, children });

export const li = (
  attributes: GlobalAttributes & {
    value: string | number | boolean | null;
    type: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "li", attributes, children });

export const dl = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "dl",
  attributes,
  children,
});

export const dt = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "dt",
  attributes,
  children,
});

export const dd = (
  attributes: GlobalAttributes & {
    nowrap: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "dd", attributes, children });

export const figure = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "figure",
  attributes,
  children,
});

export const figcaption = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({ tag: "figcaption", attributes, children });

export const main = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "main",
  attributes,
  children,
});

export const div = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "div",
  attributes,
  children,
});

export const a = (
  attributes: GlobalAttributes & {
    href: string | number | boolean | null;
    target: ValueSets["target"];
    download: string | number | boolean | null;
    ping: string | number | boolean | null;
    rel: string | number | boolean | null;
    hreflang: string | number | boolean | null;
    type: string | number | boolean | null;
    referrerpolicy: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "a", attributes, children });

export const em = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "em",
  attributes,
  children,
});

export const strong = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "strong",
  attributes,
  children,
});

export const small = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "small",
  attributes,
  children,
});

export const s = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "s",
  attributes,
  children,
});

export const cite = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "cite",
  attributes,
  children,
});

export const q = (
  attributes: GlobalAttributes & {
    cite: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "q", attributes, children });

export const dfn = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "dfn",
  attributes,
  children,
});

export const abbr = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "abbr",
  attributes,
  children,
});

export const ruby = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "ruby",
  attributes,
  children,
});

export const rb = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "rb",
  attributes,
  children,
});

export const rt = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "rt",
  attributes,
  children,
});

export const rp = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "rp",
  attributes,
  children,
});

export const time = (
  attributes: GlobalAttributes & {
    datetime: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "time", attributes, children });

export const code = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "code",
  attributes,
  children,
});

export const var_ = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "var",
  attributes,
  children,
});

export const samp = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "samp",
  attributes,
  children,
});

export const kbd = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "kbd",
  attributes,
  children,
});

export const sub = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "sub",
  attributes,
  children,
});

export const sup = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "sup",
  attributes,
  children,
});

export const i = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "i",
  attributes,
  children,
});

export const b = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "b",
  attributes,
  children,
});

export const u = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "u",
  attributes,
  children,
});

export const mark = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "mark",
  attributes,
  children,
});

export const bdi = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "bdi",
  attributes,
  children,
});

export const bdo = (
  attributes: GlobalAttributes & {
    dir: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "bdo", attributes, children });

export const span = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "span",
  attributes,
  children,
});

export const br = (
  attributes: GlobalAttributes & {
    clear: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "br", attributes, children });

export const wbr = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "wbr",
  attributes,
  children,
});

export const ins = (
  attributes: GlobalAttributes & {
    cite: string | number | boolean | null;
    datetime: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "ins", attributes, children });

export const del = (
  attributes: GlobalAttributes & {
    cite: string | number | boolean | null;
    datetime: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "del", attributes, children });

export const picture = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "picture",
  attributes,
  children,
});

export const img = (
  attributes: GlobalAttributes & {
    alt: string | number | boolean | null;
    src: string | number | boolean | null;
    srcset: string | number | boolean | null;
    crossorigin: ValueSets["xo"];
    usemap: string | number | boolean | null;
    ismap: boolean;
    width: string | number | boolean | null;
    height: string | number | boolean | null;
    decoding: ValueSets["decoding"];
    loading: ValueSets["loading"];
    fetchpriority: ValueSets["fetchpriority"];
    referrerpolicy: ValueSets["referrerpolicy"];
    sizes: string | number | boolean | null;
    importance: string | number | boolean | null;
    intrinsicsize: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "img", attributes, children });

export const iframe = (
  attributes: GlobalAttributes & {
    src: string | number | boolean | null;
    srcdoc: string | number | boolean | null;
    name: string | number | boolean | null;
    sandbox: ValueSets["sb"];
    seamless: boolean;
    allowfullscreen: boolean;
    width: string | number | boolean | null;
    height: string | number | boolean | null;
    allow: string | number | boolean | null;
    allowpaymentrequest: string | number | boolean | null;
    csp: string | number | boolean | null;
    importance: string | number | boolean | null;
    referrerpolicy: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "iframe", attributes, children });

export const embed = (
  attributes: GlobalAttributes & {
    src: string | number | boolean | null;
    type: string | number | boolean | null;
    width: string | number | boolean | null;
    height: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "embed", attributes, children });

export const object = (
  attributes: GlobalAttributes & {
    data: string | number | boolean | null;
    type: string | number | boolean | null;
    typemustmatch: boolean;
    name: string | number | boolean | null;
    usemap: string | number | boolean | null;
    form: string | number | boolean | null;
    width: string | number | boolean | null;
    height: string | number | boolean | null;
    archive: string | number | boolean | null;
    border: string | number | boolean | null;
    classid: string | number | boolean | null;
    codebase: string | number | boolean | null;
    codetype: string | number | boolean | null;
    declare: string | number | boolean | null;
    standby: string | number | boolean | null;
    tabindex: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "object", attributes, children });

export const param = (
  attributes: GlobalAttributes & {
    name: string | number | boolean | null;
    value: string | number | boolean | null;
    type: string | number | boolean | null;
    valuetype: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "param", attributes, children });

export const video = (
  attributes: GlobalAttributes & {
    src: string | number | boolean | null;
    crossorigin: ValueSets["xo"];
    poster: string | number | boolean | null;
    preload: ValueSets["pl"];
    autoplay: boolean;
    mediagroup: string | number | boolean | null;
    loop: boolean;
    muted: boolean;
    controls: boolean;
    width: string | number | boolean | null;
    height: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "video", attributes, children });

export const audio = (
  attributes: GlobalAttributes & {
    src: string | number | boolean | null;
    crossorigin: ValueSets["xo"];
    preload: ValueSets["pl"];
    autoplay: boolean;
    mediagroup: string | number | boolean | null;
    loop: boolean;
    muted: boolean;
    controls: boolean;
  },
  children: readonly Element[],
): Element => ({ tag: "audio", attributes, children });

export const source = (
  attributes: GlobalAttributes & {
    src: string | number | boolean | null;
    type: string | number | boolean | null;
    sizes: string | number | boolean | null;
    srcset: string | number | boolean | null;
    media: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "source", attributes, children });

export const track = (
  attributes: GlobalAttributes & {
    default: boolean;
    kind: ValueSets["tk"];
    label: string | number | boolean | null;
    src: string | number | boolean | null;
    srclang: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "track", attributes, children });

export const map = (
  attributes: GlobalAttributes & {
    name: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "map", attributes, children });

export const area = (
  attributes: GlobalAttributes & {
    alt: string | number | boolean | null;
    coords: string | number | boolean | null;
    shape: ValueSets["sh"];
    href: string | number | boolean | null;
    target: ValueSets["target"];
    download: string | number | boolean | null;
    ping: string | number | boolean | null;
    rel: string | number | boolean | null;
    hreflang: string | number | boolean | null;
    type: string | number | boolean | null;
    accesskey: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "area", attributes, children });

export const table = (
  attributes: GlobalAttributes & {
    border: string | number | boolean | null;
    align: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "table", attributes, children });

export const caption = (
  attributes: GlobalAttributes & {
    align: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "caption", attributes, children });

export const colgroup = (
  attributes: GlobalAttributes & {
    span: string | number | boolean | null;
    align: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "colgroup", attributes, children });

export const col = (
  attributes: GlobalAttributes & {
    span: string | number | boolean | null;
    align: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "col", attributes, children });

export const tbody = (
  attributes: GlobalAttributes & {
    align: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "tbody", attributes, children });

export const thead = (
  attributes: GlobalAttributes & {
    align: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "thead", attributes, children });

export const tfoot = (
  attributes: GlobalAttributes & {
    align: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "tfoot", attributes, children });

export const tr = (
  attributes: GlobalAttributes & {
    align: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "tr", attributes, children });

export const td = (
  attributes: GlobalAttributes & {
    colspan: string | number | boolean | null;
    rowspan: string | number | boolean | null;
    headers: string | number | boolean | null;
    abbr: string | number | boolean | null;
    align: string | number | boolean | null;
    axis: string | number | boolean | null;
    bgcolor: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "td", attributes, children });

export const th = (
  attributes: GlobalAttributes & {
    colspan: string | number | boolean | null;
    rowspan: string | number | boolean | null;
    headers: string | number | boolean | null;
    scope: ValueSets["s"];
    sorted: string | number | boolean | null;
    abbr: string | number | boolean | null;
    align: string | number | boolean | null;
    axis: string | number | boolean | null;
    bgcolor: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "th", attributes, children });

export const form = (
  attributes: GlobalAttributes & {
    "accept-charset": string | number | boolean | null;
    action: string | number | boolean | null;
    autocomplete: ValueSets["o"];
    enctype: ValueSets["et"];
    method: ValueSets["m"];
    name: string | number | boolean | null;
    novalidate: boolean;
    target: ValueSets["target"];
    accept: string | number | boolean | null;
    autocapitalize: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "form", attributes, children });

export const label = (
  attributes: GlobalAttributes & {
    form: string | number | boolean | null;
    for: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "label", attributes, children });

export const input = (
  attributes: GlobalAttributes & {
    accept: string | number | boolean | null;
    alt: string | number | boolean | null;
    autocomplete: ValueSets["inputautocomplete"];
    autofocus: boolean;
    checked: boolean;
    dirname: string | number | boolean | null;
    disabled: boolean;
    form: string | number | boolean | null;
    formaction: string | number | boolean | null;
    formenctype: ValueSets["et"];
    formmethod: ValueSets["fm"];
    formnovalidate: boolean;
    formtarget: string | number | boolean | null;
    height: string | number | boolean | null;
    inputmode: ValueSets["im"];
    list: string | number | boolean | null;
    max: string | number | boolean | null;
    maxlength: string | number | boolean | null;
    min: string | number | boolean | null;
    minlength: string | number | boolean | null;
    multiple: boolean;
    name: string | number | boolean | null;
    pattern: string | number | boolean | null;
    placeholder: string | number | boolean | null;
    popovertarget: string | number | boolean | null;
    popovertargetaction: string | number | boolean | null;
    readonly: boolean;
    required: boolean;
    size: string | number | boolean | null;
    src: string | number | boolean | null;
    step: string | number | boolean | null;
    type: ValueSets["t"];
    value: string | number | boolean | null;
    width: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "input", attributes, children });

export const button = (
  attributes: GlobalAttributes & {
    autofocus: boolean;
    disabled: boolean;
    form: string | number | boolean | null;
    formaction: string | number | boolean | null;
    formenctype: ValueSets["et"];
    formmethod: ValueSets["fm"];
    formnovalidate: boolean;
    formtarget: string | number | boolean | null;
    name: string | number | boolean | null;
    popovertarget: string | number | boolean | null;
    popovertargetaction: string | number | boolean | null;
    type: ValueSets["bt"];
    value: string | number | boolean | null;
    autocomplete: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "button", attributes, children });

export const select = (
  attributes: GlobalAttributes & {
    autocomplete: ValueSets["inputautocomplete"];
    autofocus: boolean;
    disabled: boolean;
    form: string | number | boolean | null;
    multiple: boolean;
    name: string | number | boolean | null;
    required: boolean;
    size: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "select", attributes, children });

export const datalist = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "datalist",
  attributes,
  children,
});

export const optgroup = (
  attributes: GlobalAttributes & {
    disabled: boolean;
    label: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "optgroup", attributes, children });

export const option = (
  attributes: GlobalAttributes & {
    disabled: boolean;
    label: string | number | boolean | null;
    selected: boolean;
    value: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "option", attributes, children });

export const textarea = (
  attributes: GlobalAttributes & {
    autocomplete: ValueSets["inputautocomplete"];
    autofocus: boolean;
    cols: string | number | boolean | null;
    dirname: string | number | boolean | null;
    disabled: boolean;
    form: string | number | boolean | null;
    inputmode: ValueSets["im"];
    maxlength: string | number | boolean | null;
    minlength: string | number | boolean | null;
    name: string | number | boolean | null;
    placeholder: string | number | boolean | null;
    readonly: boolean;
    required: boolean;
    rows: string | number | boolean | null;
    wrap: ValueSets["w"];
    autocapitalize: string | number | boolean | null;
    spellcheck: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "textarea", attributes, children });

export const output = (
  attributes: GlobalAttributes & {
    for: string | number | boolean | null;
    form: string | number | boolean | null;
    name: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "output", attributes, children });

export const progress = (
  attributes: GlobalAttributes & {
    value: string | number | boolean | null;
    max: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "progress", attributes, children });

export const meter = (
  attributes: GlobalAttributes & {
    value: string | number | boolean | null;
    min: string | number | boolean | null;
    max: string | number | boolean | null;
    low: string | number | boolean | null;
    high: string | number | boolean | null;
    optimum: string | number | boolean | null;
    form: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "meter", attributes, children });

export const fieldset = (
  attributes: GlobalAttributes & {
    disabled: boolean;
    form: string | number | boolean | null;
    name: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "fieldset", attributes, children });

export const legend = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "legend",
  attributes,
  children,
});

export const details = (
  attributes: GlobalAttributes & {
    open: boolean;
  },
  children: readonly Element[],
): Element => ({ tag: "details", attributes, children });

export const summary = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "summary",
  attributes,
  children,
});

export const dialog = (
  attributes: GlobalAttributes & {
    open: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "dialog", attributes, children });

export const script = (
  attributes: GlobalAttributes & {
    src: string | number | boolean | null;
    type: string | number | boolean | null;
    charset: string | number | boolean | null;
    async: boolean;
    defer: boolean;
    crossorigin: ValueSets["xo"];
    nonce: string | number | boolean | null;
    integrity: string | number | boolean | null;
    nomodule: string | number | boolean | null;
    referrerpolicy: string | number | boolean | null;
    text: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "script", attributes, children });

export const noscript = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "noscript",
  attributes,
  children,
});

export const template = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "template",
  attributes,
  children,
});

export const canvas = (
  attributes: GlobalAttributes & {
    width: string | number | boolean | null;
    height: string | number | boolean | null;
    "moz-opaque": string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "canvas", attributes, children });

export const slot = (
  attributes: GlobalAttributes & {
    name: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "slot", attributes, children });

export const data = (
  attributes: GlobalAttributes & {
    value: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "data", attributes, children });

export const hgroup = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "hgroup",
  attributes,
  children,
});

export const menu = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "menu",
  attributes,
  children,
});

export const search = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({
  tag: "search",
  attributes,
  children,
});

export const fencedframe = (
  attributes: GlobalAttributes & {
    allow: string | number | boolean | null;
    height: string | number | boolean | null;
    width: string | number | boolean | null;
  },
  children: readonly Element[],
): Element => ({ tag: "fencedframe", attributes, children });

export const selectedcontent = (
  attributes: GlobalAttributes,
  children: readonly Element[],
): Element => ({ tag: "selectedcontent", attributes, children });
