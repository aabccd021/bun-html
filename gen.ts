import type { Element } from "./html.ts";

type ValueSets = {
  default: string | number | boolean | null;
  v: boolean;
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
  data?: Record<string, ValueSets["default"]>;
  accesskey?: ValueSets["default"];
  autocapitalize?: ValueSets["default"];
  autocorrect?: ValueSets["o"];
  autofocus?: ValueSets["default"];
  class?: ValueSets["default"];
  contenteditable?: ValueSets["default"];
  contextmenu?: ValueSets["default"];
  dir?: ValueSets["d"];
  draggable?: ValueSets["b"];
  dropzone?: ValueSets["default"];
  enterkeyhint?: ValueSets["enterkeyhint"];
  exportparts?: ValueSets["default"];
  hidden?: ValueSets["v"];
  id?: ValueSets["default"];
  inert?: ValueSets["default"];
  inputmode?: ValueSets["default"];
  is?: ValueSets["default"];
  itemid?: ValueSets["default"];
  itemprop?: ValueSets["default"];
  itemref?: ValueSets["default"];
  itemscope?: ValueSets["v"];
  itemtype?: ValueSets["default"];
  lang?: ValueSets["default"];
  nonce?: ValueSets["default"];
  part?: ValueSets["default"];
  popover?: ValueSets["popover"];
  role?: ValueSets["roles"];
  slot?: ValueSets["default"];
  spellcheck?: ValueSets["b"];
  style?: ValueSets["default"];
  tabindex?: ValueSets["default"];
  title?: ValueSets["default"];
  translate?: ValueSets["y"];
  virtualkeyboardpolicy?: ValueSets["b"];
  onabort?: ValueSets["default"];
  onblur?: ValueSets["default"];
  oncanplay?: ValueSets["default"];
  oncanplaythrough?: ValueSets["default"];
  onchange?: ValueSets["default"];
  onclick?: ValueSets["default"];
  oncontextmenu?: ValueSets["default"];
  ondblclick?: ValueSets["default"];
  ondrag?: ValueSets["default"];
  ondragend?: ValueSets["default"];
  ondragenter?: ValueSets["default"];
  ondragleave?: ValueSets["default"];
  ondragover?: ValueSets["default"];
  ondragstart?: ValueSets["default"];
  ondrop?: ValueSets["default"];
  ondurationchange?: ValueSets["default"];
  onemptied?: ValueSets["default"];
  onended?: ValueSets["default"];
  onerror?: ValueSets["default"];
  onfocus?: ValueSets["default"];
  onformchange?: ValueSets["default"];
  onforminput?: ValueSets["default"];
  oninput?: ValueSets["default"];
  oninvalid?: ValueSets["default"];
  onkeydown?: ValueSets["default"];
  onkeypress?: ValueSets["default"];
  onkeyup?: ValueSets["default"];
  onload?: ValueSets["default"];
  onloadeddata?: ValueSets["default"];
  onloadedmetadata?: ValueSets["default"];
  onloadstart?: ValueSets["default"];
  onmousedown?: ValueSets["default"];
  onmousemove?: ValueSets["default"];
  onmouseout?: ValueSets["default"];
  onmouseover?: ValueSets["default"];
  onmouseup?: ValueSets["default"];
  onmousewheel?: ValueSets["default"];
  onmouseenter?: ValueSets["default"];
  onmouseleave?: ValueSets["default"];
  onpause?: ValueSets["default"];
  onplay?: ValueSets["default"];
  onplaying?: ValueSets["default"];
  onprogress?: ValueSets["default"];
  onratechange?: ValueSets["default"];
  onreset?: ValueSets["default"];
  onresize?: ValueSets["default"];
  onreadystatechange?: ValueSets["default"];
  onscroll?: ValueSets["default"];
  onseeked?: ValueSets["default"];
  onseeking?: ValueSets["default"];
  onselect?: ValueSets["default"];
  onshow?: ValueSets["default"];
  onstalled?: ValueSets["default"];
  onsubmit?: ValueSets["default"];
  onsuspend?: ValueSets["default"];
  ontimeupdate?: ValueSets["default"];
  onvolumechange?: ValueSets["default"];
  onwaiting?: ValueSets["default"];
  onpointercancel?: ValueSets["default"];
  onpointerdown?: ValueSets["default"];
  onpointerenter?: ValueSets["default"];
  onpointerleave?: ValueSets["default"];
  onpointerlockchange?: ValueSets["default"];
  onpointerlockerror?: ValueSets["default"];
  onpointermove?: ValueSets["default"];
  onpointerout?: ValueSets["default"];
  onpointerover?: ValueSets["default"];
  onpointerup?: ValueSets["default"];
  "aria-activedescendant"?: ValueSets["default"];
  "aria-atomic"?: ValueSets["b"];
  "aria-autocomplete"?: ValueSets["autocomplete"];
  "aria-busy"?: ValueSets["b"];
  "aria-checked"?: ValueSets["tristate"];
  "aria-colcount"?: ValueSets["default"];
  "aria-colindex"?: ValueSets["default"];
  "aria-colspan"?: ValueSets["default"];
  "aria-controls"?: ValueSets["default"];
  "aria-current"?: ValueSets["current"];
  "aria-describedby"?: ValueSets["default"];
  "aria-disabled"?: ValueSets["b"];
  "aria-dropeffect"?: ValueSets["dropeffect"];
  "aria-errormessage"?: ValueSets["default"];
  "aria-expanded"?: ValueSets["u"];
  "aria-flowto"?: ValueSets["default"];
  "aria-grabbed"?: ValueSets["u"];
  "aria-haspopup"?: ValueSets["haspopup"];
  "aria-hidden"?: ValueSets["b"];
  "aria-invalid"?: ValueSets["invalid"];
  "aria-label"?: ValueSets["default"];
  "aria-labelledby"?: ValueSets["default"];
  "aria-level"?: ValueSets["default"];
  "aria-live"?: ValueSets["live"];
  "aria-modal"?: ValueSets["b"];
  "aria-multiline"?: ValueSets["b"];
  "aria-multiselectable"?: ValueSets["b"];
  "aria-orientation"?: ValueSets["orientation"];
  "aria-owns"?: ValueSets["default"];
  "aria-placeholder"?: ValueSets["default"];
  "aria-posinset"?: ValueSets["default"];
  "aria-pressed"?: ValueSets["tristate"];
  "aria-readonly"?: ValueSets["b"];
  "aria-relevant"?: ValueSets["relevant"];
  "aria-required"?: ValueSets["b"];
  "aria-roledescription"?: ValueSets["default"];
  "aria-rowcount"?: ValueSets["default"];
  "aria-rowindex"?: ValueSets["default"];
  "aria-rowspan"?: ValueSets["default"];
  "aria-selected"?: ValueSets["u"];
  "aria-setsize"?: ValueSets["default"];
  "aria-sort"?: ValueSets["sort"];
  "aria-valuemax"?: ValueSets["default"];
  "aria-valuemin"?: ValueSets["default"];
  "aria-valuenow"?: ValueSets["default"];
  "aria-valuetext"?: ValueSets["default"];
  "aria-details"?: ValueSets["default"];
  "aria-keyshortcuts"?: ValueSets["default"];
};

export const html = (
  attributes: GlobalAttributes & {
    manifest?: ValueSets["default"];
    version?: ValueSets["default"];
    xmlns?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "html", attributes, children });

export const head = (
  attributes: GlobalAttributes & {
    profile?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "head", attributes, children });

export const title = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "title",
  attributes,
  children,
});

export const base = (
  attributes: GlobalAttributes & {
    href?: ValueSets["default"];
    target?: ValueSets["target"];
  },
): Element => ({ tag: "base", attributes });

export const link = (
  attributes: GlobalAttributes & {
    href?: ValueSets["default"];
    crossorigin?: ValueSets["xo"];
    rel?: ValueSets["default"];
    media?: ValueSets["default"];
    hreflang?: ValueSets["default"];
    type?: ValueSets["default"];
    sizes?: ValueSets["default"];
    as?: ValueSets["default"];
    importance?: ValueSets["default"];
    integrity?: ValueSets["default"];
    referrerpolicy?: ValueSets["default"];
    title?: ValueSets["default"];
  },
): Element => ({ tag: "link", attributes });

export const meta = (
  attributes: GlobalAttributes & {
    name?: ValueSets["default"];
    "http-equiv"?: ValueSets["default"];
    content?: ValueSets["default"];
    charset?: ValueSets["default"];
    scheme?: ValueSets["default"];
  },
): Element => ({ tag: "meta", attributes });

export const style = (
  attributes: GlobalAttributes & {
    media?: ValueSets["default"];
    nonce?: ValueSets["default"];
    type?: ValueSets["default"];
    scoped?: ValueSets["v"];
    title?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "style", attributes, children });

export const body = (
  attributes: GlobalAttributes & {
    onafterprint?: ValueSets["default"];
    onbeforeprint?: ValueSets["default"];
    onbeforeunload?: ValueSets["default"];
    onhashchange?: ValueSets["default"];
    onlanguagechange?: ValueSets["default"];
    onmessage?: ValueSets["default"];
    onoffline?: ValueSets["default"];
    ononline?: ValueSets["default"];
    onpagehide?: ValueSets["default"];
    onpageshow?: ValueSets["default"];
    onpopstate?: ValueSets["default"];
    onstorage?: ValueSets["default"];
    onunload?: ValueSets["default"];
    alink?: ValueSets["default"];
    background?: ValueSets["default"];
    bgcolor?: ValueSets["default"];
    bottommargin?: ValueSets["default"];
    leftmargin?: ValueSets["default"];
    link?: ValueSets["default"];
    onblur?: ValueSets["default"];
    onerror?: ValueSets["default"];
    onfocus?: ValueSets["default"];
    onload?: ValueSets["default"];
    onredo?: ValueSets["default"];
    onresize?: ValueSets["default"];
    onundo?: ValueSets["default"];
    rightmargin?: ValueSets["default"];
    text?: ValueSets["default"];
    topmargin?: ValueSets["default"];
    vlink?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "body", attributes, children });

export const article = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "article",
  attributes,
  children,
});

export const section = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "section",
  attributes,
  children,
});

export const nav = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "nav",
  attributes,
  children,
});

export const aside = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "aside",
  attributes,
  children,
});

export const h1 = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "h1",
  attributes,
  children,
});

export const h2 = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "h2",
  attributes,
  children,
});

export const h3 = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "h3",
  attributes,
  children,
});

export const h4 = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "h4",
  attributes,
  children,
});

export const h5 = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "h5",
  attributes,
  children,
});

export const h6 = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "h6",
  attributes,
  children,
});

export const header = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "header",
  attributes,
  children,
});

export const footer = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "footer",
  attributes,
  children,
});

export const address = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "address",
  attributes,
  children,
});

export const p = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "p",
  attributes,
  children,
});

export const hr = (
  attributes: GlobalAttributes & {
    align?: ValueSets["default"];
    color?: ValueSets["default"];
    noshade?: ValueSets["default"];
    size?: ValueSets["default"];
    width?: ValueSets["default"];
  },
): Element => ({ tag: "hr", attributes });

export const pre = (
  attributes: GlobalAttributes & {
    cols?: ValueSets["default"];
    width?: ValueSets["default"];
    wrap?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "pre", attributes, children });

export const blockquote = (
  attributes: GlobalAttributes & {
    cite?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "blockquote", attributes, children });

export const ol = (
  attributes: GlobalAttributes & {
    reversed?: ValueSets["v"];
    start?: ValueSets["default"];
    type?: ValueSets["lt"];
    compact?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "ol", attributes, children });

export const ul = (
  attributes: GlobalAttributes & {
    compact?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "ul", attributes, children });

export const li = (
  attributes: GlobalAttributes & {
    value?: ValueSets["default"];
    type?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "li", attributes, children });

export const dl = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "dl",
  attributes,
  children,
});

export const dt = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "dt",
  attributes,
  children,
});

export const dd = (
  attributes: GlobalAttributes & {
    nowrap?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "dd", attributes, children });

export const figure = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "figure",
  attributes,
  children,
});

export const figcaption = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({ tag: "figcaption", attributes, children });

export const main = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "main",
  attributes,
  children,
});

export const div = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "div",
  attributes,
  children,
});

export const a = (
  attributes: GlobalAttributes & {
    href?: ValueSets["default"];
    target?: ValueSets["target"];
    download?: ValueSets["default"];
    ping?: ValueSets["default"];
    rel?: ValueSets["default"];
    hreflang?: ValueSets["default"];
    type?: ValueSets["default"];
    referrerpolicy?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "a", attributes, children });

export const em = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "em",
  attributes,
  children,
});

export const strong = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "strong",
  attributes,
  children,
});

export const small = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "small",
  attributes,
  children,
});

export const s = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "s",
  attributes,
  children,
});

export const cite = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "cite",
  attributes,
  children,
});

export const q = (
  attributes: GlobalAttributes & {
    cite?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "q", attributes, children });

export const dfn = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "dfn",
  attributes,
  children,
});

export const abbr = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "abbr",
  attributes,
  children,
});

export const ruby = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "ruby",
  attributes,
  children,
});

export const rb = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "rb",
  attributes,
  children,
});

export const rt = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "rt",
  attributes,
  children,
});

export const rp = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "rp",
  attributes,
  children,
});

export const time = (
  attributes: GlobalAttributes & {
    datetime?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "time", attributes, children });

export const code = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "code",
  attributes,
  children,
});

export const var_ = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "var",
  attributes,
  children,
});

export const samp = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "samp",
  attributes,
  children,
});

export const kbd = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "kbd",
  attributes,
  children,
});

export const sub = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "sub",
  attributes,
  children,
});

export const sup = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "sup",
  attributes,
  children,
});

export const i = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "i",
  attributes,
  children,
});

export const b = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "b",
  attributes,
  children,
});

export const u = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "u",
  attributes,
  children,
});

export const mark = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "mark",
  attributes,
  children,
});

export const bdi = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "bdi",
  attributes,
  children,
});

export const bdo = (
  attributes: GlobalAttributes & {
    dir?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "bdo", attributes, children });

export const span = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "span",
  attributes,
  children,
});

export const br = (
  attributes: GlobalAttributes & {
    clear?: ValueSets["default"];
  },
): Element => ({ tag: "br", attributes });

export const wbr = (attributes: GlobalAttributes): Element => ({
  tag: "wbr",
  attributes,
});

export const ins = (
  attributes: GlobalAttributes & {
    cite?: ValueSets["default"];
    datetime?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "ins", attributes, children });

export const del = (
  attributes: GlobalAttributes & {
    cite?: ValueSets["default"];
    datetime?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "del", attributes, children });

export const picture = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "picture",
  attributes,
  children,
});

export const img = (
  attributes: GlobalAttributes & {
    alt?: ValueSets["default"];
    src?: ValueSets["default"];
    srcset?: ValueSets["default"];
    crossorigin?: ValueSets["xo"];
    usemap?: ValueSets["default"];
    ismap?: ValueSets["v"];
    width?: ValueSets["default"];
    height?: ValueSets["default"];
    decoding?: ValueSets["decoding"];
    loading?: ValueSets["loading"];
    fetchpriority?: ValueSets["fetchpriority"];
    referrerpolicy?: ValueSets["referrerpolicy"];
    sizes?: ValueSets["default"];
    importance?: ValueSets["default"];
    intrinsicsize?: ValueSets["default"];
  },
): Element => ({ tag: "img", attributes });

export const iframe = (
  attributes: GlobalAttributes & {
    src?: ValueSets["default"];
    srcdoc?: ValueSets["default"];
    name?: ValueSets["default"];
    sandbox?: ValueSets["sb"];
    seamless?: ValueSets["v"];
    allowfullscreen?: ValueSets["v"];
    width?: ValueSets["default"];
    height?: ValueSets["default"];
    allow?: ValueSets["default"];
    allowpaymentrequest?: ValueSets["default"];
    csp?: ValueSets["default"];
    importance?: ValueSets["default"];
    referrerpolicy?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "iframe", attributes, children });

export const embed = (
  attributes: GlobalAttributes & {
    src?: ValueSets["default"];
    type?: ValueSets["default"];
    width?: ValueSets["default"];
    height?: ValueSets["default"];
  },
): Element => ({ tag: "embed", attributes });

export const object = (
  attributes: GlobalAttributes & {
    data?: ValueSets["default"];
    type?: ValueSets["default"];
    typemustmatch?: ValueSets["v"];
    name?: ValueSets["default"];
    usemap?: ValueSets["default"];
    form?: ValueSets["default"];
    width?: ValueSets["default"];
    height?: ValueSets["default"];
    archive?: ValueSets["default"];
    border?: ValueSets["default"];
    classid?: ValueSets["default"];
    codebase?: ValueSets["default"];
    codetype?: ValueSets["default"];
    declare?: ValueSets["default"];
    standby?: ValueSets["default"];
    tabindex?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "object", attributes, children });

export const param = (
  attributes: GlobalAttributes & {
    name?: ValueSets["default"];
    value?: ValueSets["default"];
    type?: ValueSets["default"];
    valuetype?: ValueSets["default"];
  },
): Element => ({ tag: "param", attributes });

export const video = (
  attributes: GlobalAttributes & {
    src?: ValueSets["default"];
    crossorigin?: ValueSets["xo"];
    poster?: ValueSets["default"];
    preload?: ValueSets["pl"];
    autoplay?: ValueSets["v"];
    mediagroup?: ValueSets["default"];
    loop?: ValueSets["v"];
    muted?: ValueSets["v"];
    controls?: ValueSets["v"];
    width?: ValueSets["default"];
    height?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "video", attributes, children });

export const audio = (
  attributes: GlobalAttributes & {
    src?: ValueSets["default"];
    crossorigin?: ValueSets["xo"];
    preload?: ValueSets["pl"];
    autoplay?: ValueSets["v"];
    mediagroup?: ValueSets["default"];
    loop?: ValueSets["v"];
    muted?: ValueSets["v"];
    controls?: ValueSets["v"];
  },
  children?: readonly Element[],
): Element => ({ tag: "audio", attributes, children });

export const source = (
  attributes: GlobalAttributes & {
    src?: ValueSets["default"];
    type?: ValueSets["default"];
    sizes?: ValueSets["default"];
    srcset?: ValueSets["default"];
    media?: ValueSets["default"];
  },
): Element => ({ tag: "source", attributes });

export const track = (
  attributes: GlobalAttributes & {
    default?: ValueSets["v"];
    kind?: ValueSets["tk"];
    label?: ValueSets["default"];
    src?: ValueSets["default"];
    srclang?: ValueSets["default"];
  },
): Element => ({ tag: "track", attributes });

export const map = (
  attributes: GlobalAttributes & {
    name?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "map", attributes, children });

export const area = (
  attributes: GlobalAttributes & {
    alt?: ValueSets["default"];
    coords?: ValueSets["default"];
    shape?: ValueSets["sh"];
    href?: ValueSets["default"];
    target?: ValueSets["target"];
    download?: ValueSets["default"];
    ping?: ValueSets["default"];
    rel?: ValueSets["default"];
    hreflang?: ValueSets["default"];
    type?: ValueSets["default"];
    accesskey?: ValueSets["default"];
  },
): Element => ({ tag: "area", attributes });

export const table = (
  attributes: GlobalAttributes & {
    border?: ValueSets["default"];
    align?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "table", attributes, children });

export const caption = (
  attributes: GlobalAttributes & {
    align?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "caption", attributes, children });

export const colgroup = (
  attributes: GlobalAttributes & {
    span?: ValueSets["default"];
    align?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "colgroup", attributes, children });

export const col = (
  attributes: GlobalAttributes & {
    span?: ValueSets["default"];
    align?: ValueSets["default"];
  },
): Element => ({ tag: "col", attributes });

export const tbody = (
  attributes: GlobalAttributes & {
    align?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "tbody", attributes, children });

export const thead = (
  attributes: GlobalAttributes & {
    align?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "thead", attributes, children });

export const tfoot = (
  attributes: GlobalAttributes & {
    align?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "tfoot", attributes, children });

export const tr = (
  attributes: GlobalAttributes & {
    align?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "tr", attributes, children });

export const td = (
  attributes: GlobalAttributes & {
    colspan?: ValueSets["default"];
    rowspan?: ValueSets["default"];
    headers?: ValueSets["default"];
    abbr?: ValueSets["default"];
    align?: ValueSets["default"];
    axis?: ValueSets["default"];
    bgcolor?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "td", attributes, children });

export const th = (
  attributes: GlobalAttributes & {
    colspan?: ValueSets["default"];
    rowspan?: ValueSets["default"];
    headers?: ValueSets["default"];
    scope?: ValueSets["s"];
    sorted?: ValueSets["default"];
    abbr?: ValueSets["default"];
    align?: ValueSets["default"];
    axis?: ValueSets["default"];
    bgcolor?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "th", attributes, children });

export const form = (
  attributes: GlobalAttributes & {
    "accept-charset"?: ValueSets["default"];
    action?: ValueSets["default"];
    autocomplete?: ValueSets["o"];
    enctype?: ValueSets["et"];
    method?: ValueSets["m"];
    name?: ValueSets["default"];
    novalidate?: ValueSets["v"];
    target?: ValueSets["target"];
    accept?: ValueSets["default"];
    autocapitalize?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "form", attributes, children });

export const label = (
  attributes: GlobalAttributes & {
    form?: ValueSets["default"];
    for?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "label", attributes, children });

export const input = (
  attributes: GlobalAttributes & {
    accept?: ValueSets["default"];
    alt?: ValueSets["default"];
    autocomplete?: ValueSets["inputautocomplete"];
    autofocus?: ValueSets["v"];
    checked?: ValueSets["v"];
    dirname?: ValueSets["default"];
    disabled?: ValueSets["v"];
    form?: ValueSets["default"];
    formaction?: ValueSets["default"];
    formenctype?: ValueSets["et"];
    formmethod?: ValueSets["fm"];
    formnovalidate?: ValueSets["v"];
    formtarget?: ValueSets["default"];
    height?: ValueSets["default"];
    inputmode?: ValueSets["im"];
    list?: ValueSets["default"];
    max?: ValueSets["default"];
    maxlength?: ValueSets["default"];
    min?: ValueSets["default"];
    minlength?: ValueSets["default"];
    multiple?: ValueSets["v"];
    name?: ValueSets["default"];
    pattern?: ValueSets["default"];
    placeholder?: ValueSets["default"];
    popovertarget?: ValueSets["default"];
    popovertargetaction?: ValueSets["default"];
    readonly?: ValueSets["v"];
    required?: ValueSets["v"];
    size?: ValueSets["default"];
    src?: ValueSets["default"];
    step?: ValueSets["default"];
    type?: ValueSets["t"];
    value?: ValueSets["default"];
    width?: ValueSets["default"];
  },
): Element => ({ tag: "input", attributes });

export const button = (
  attributes: GlobalAttributes & {
    autofocus?: ValueSets["v"];
    disabled?: ValueSets["v"];
    form?: ValueSets["default"];
    formaction?: ValueSets["default"];
    formenctype?: ValueSets["et"];
    formmethod?: ValueSets["fm"];
    formnovalidate?: ValueSets["v"];
    formtarget?: ValueSets["default"];
    name?: ValueSets["default"];
    popovertarget?: ValueSets["default"];
    popovertargetaction?: ValueSets["default"];
    type?: ValueSets["bt"];
    value?: ValueSets["default"];
    autocomplete?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "button", attributes, children });

export const select = (
  attributes: GlobalAttributes & {
    autocomplete?: ValueSets["inputautocomplete"];
    autofocus?: ValueSets["v"];
    disabled?: ValueSets["v"];
    form?: ValueSets["default"];
    multiple?: ValueSets["v"];
    name?: ValueSets["default"];
    required?: ValueSets["v"];
    size?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "select", attributes, children });

export const datalist = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "datalist",
  attributes,
  children,
});

export const optgroup = (
  attributes: GlobalAttributes & {
    disabled?: ValueSets["v"];
    label?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "optgroup", attributes, children });

export const option = (
  attributes: GlobalAttributes & {
    disabled?: ValueSets["v"];
    label?: ValueSets["default"];
    selected?: ValueSets["v"];
    value?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "option", attributes, children });

export const textarea = (
  attributes: GlobalAttributes & {
    autocomplete?: ValueSets["inputautocomplete"];
    autofocus?: ValueSets["v"];
    cols?: ValueSets["default"];
    dirname?: ValueSets["default"];
    disabled?: ValueSets["v"];
    form?: ValueSets["default"];
    inputmode?: ValueSets["im"];
    maxlength?: ValueSets["default"];
    minlength?: ValueSets["default"];
    name?: ValueSets["default"];
    placeholder?: ValueSets["default"];
    readonly?: ValueSets["v"];
    required?: ValueSets["v"];
    rows?: ValueSets["default"];
    wrap?: ValueSets["w"];
    autocapitalize?: ValueSets["default"];
    spellcheck?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "textarea", attributes, children });

export const output = (
  attributes: GlobalAttributes & {
    for?: ValueSets["default"];
    form?: ValueSets["default"];
    name?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "output", attributes, children });

export const progress = (
  attributes: GlobalAttributes & {
    value?: ValueSets["default"];
    max?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "progress", attributes, children });

export const meter = (
  attributes: GlobalAttributes & {
    value?: ValueSets["default"];
    min?: ValueSets["default"];
    max?: ValueSets["default"];
    low?: ValueSets["default"];
    high?: ValueSets["default"];
    optimum?: ValueSets["default"];
    form?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "meter", attributes, children });

export const fieldset = (
  attributes: GlobalAttributes & {
    disabled?: ValueSets["v"];
    form?: ValueSets["default"];
    name?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "fieldset", attributes, children });

export const legend = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "legend",
  attributes,
  children,
});

export const details = (
  attributes: GlobalAttributes & {
    open?: ValueSets["v"];
  },
  children?: readonly Element[],
): Element => ({ tag: "details", attributes, children });

export const summary = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "summary",
  attributes,
  children,
});

export const dialog = (
  attributes: GlobalAttributes & {
    open?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "dialog", attributes, children });

export const script = (
  attributes: GlobalAttributes & {
    src?: ValueSets["default"];
    type?: ValueSets["default"];
    charset?: ValueSets["default"];
    async?: ValueSets["v"];
    defer?: ValueSets["v"];
    crossorigin?: ValueSets["xo"];
    nonce?: ValueSets["default"];
    integrity?: ValueSets["default"];
    nomodule?: ValueSets["default"];
    referrerpolicy?: ValueSets["default"];
    text?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "script", attributes, children });

export const noscript = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "noscript",
  attributes,
  children,
});

export const template = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "template",
  attributes,
  children,
});

export const canvas = (
  attributes: GlobalAttributes & {
    width?: ValueSets["default"];
    height?: ValueSets["default"];
    "moz-opaque"?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "canvas", attributes, children });

export const slot = (
  attributes: GlobalAttributes & {
    name?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "slot", attributes, children });

export const data = (
  attributes: GlobalAttributes & {
    value?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "data", attributes, children });

export const hgroup = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "hgroup",
  attributes,
  children,
});

export const menu = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "menu",
  attributes,
  children,
});

export const search = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({
  tag: "search",
  attributes,
  children,
});

export const fencedframe = (
  attributes: GlobalAttributes & {
    allow?: ValueSets["default"];
    height?: ValueSets["default"];
    width?: ValueSets["default"];
  },
  children?: readonly Element[],
): Element => ({ tag: "fencedframe", attributes, children });

export const selectedcontent = (
  attributes: GlobalAttributes,
  children?: readonly Element[],
): Element => ({ tag: "selectedcontent", attributes, children });
