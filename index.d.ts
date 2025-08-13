type render = (element: Element) => string;

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
  [k in `data-${string}`]?: AttributeValues
};

type El<A> = (attributes: ElAttributes<A>, children: Element[]) => Element;

type VoidEl<A> = (attributes: ElAttributes<A>) => Element;

type ValueSet = {
  "b": "true" | "false";
  "u": "true" | "false" | "undefined";
  "o": "on" | "off";
  "y": "yes" | "no";
  "w": "soft" | "hard";
  "d": "ltr" | "rtl" | "auto";
  "m": "get" | "post" | "dialog";
  "fm": "get" | "post";
  "s": "row" | "col" | "rowgroup" | "colgroup";
  "t": "hidden" | "text" | "search" | "tel" | "url" | "email" | "password" | "datetime" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "range" | "color" | "checkbox" | "radio" | "file" | "submit" | "image" | "reset" | "button";
  "im": "verbatim" | "latin" | "latin-name" | "latin-prose" | "full-width-latin" | "kana" | "kana-name" | "katakana" | "numeric" | "tel" | "email" | "url";
  "bt": "button" | "submit" | "reset";
  "lt": "1" | "a" | "A" | "i" | "I";
  "mt": "context" | "toolbar";
  "mit": "command" | "checkbox" | "radio";
  "et": "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
  "tk": "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  "pl": "none" | "metadata" | "auto";
  "sh": "circle" | "default" | "poly" | "rect";
  "xo": "anonymous" | "use-credentials";
  "target": "_self" | "_blank" | "_parent" | "_top";
  "sb": "allow-forms" | "allow-modals" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-same-origin" | "allow-scripts" | "allow-top-navigation";
  "tristate": "true" | "false" | "mixed" | "undefined";
  "inputautocomplete": "additional-name" | "address-level1" | "address-level2" | "address-level3" | "address-level4" | "address-line1" | "address-line2" | "address-line3" | "bday" | "bday-year" | "bday-day" | "bday-month" | "billing" | "cc-additional-name" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-family-name" | "cc-given-name" | "cc-name" | "cc-number" | "cc-type" | "country" | "country-name" | "current-password" | "email" | "family-name" | "fax" | "given-name" | "home" | "honorific-prefix" | "honorific-suffix" | "impp" | "language" | "mobile" | "name" | "new-password" | "nickname" | "off" | "on" | "organization" | "organization-title" | "pager" | "photo" | "postal-code" | "sex" | "shipping" | "street-address" | "tel-area-code" | "tel" | "tel-country-code" | "tel-extension" | "tel-local" | "tel-local-prefix" | "tel-local-suffix" | "tel-national" | "transaction-amount" | "transaction-currency" | "url" | "username" | "work";
  "autocomplete": "inline" | "list" | "both" | "none";
  "current": "page" | "step" | "location" | "date" | "time" | "true" | "false";
  "dropeffect": "copy" | "move" | "link" | "execute" | "popup" | "none";
  "invalid": "grammar" | "false" | "spelling" | "true";
  "live": "off" | "polite" | "assertive";
  "orientation": "vertical" | "horizontal" | "undefined";
  "relevant": "additions" | "removals" | "text" | "all" | "additions text";
  "sort": "ascending" | "descending" | "none" | "other";
  "roles": "alert" | "alertdialog" | "button" | "checkbox" | "dialog" | "gridcell" | "link" | "log" | "marquee" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "progressbar" | "radio" | "scrollbar" | "searchbox" | "slider" | "spinbutton" | "status" | "switch" | "tab" | "tabpanel" | "textbox" | "timer" | "tooltip" | "treeitem" | "combobox" | "grid" | "listbox" | "menu" | "menubar" | "radiogroup" | "tablist" | "tree" | "treegrid" | "application" | "article" | "cell" | "columnheader" | "definition" | "directory" | "document" | "feed" | "figure" | "group" | "heading" | "img" | "list" | "listitem" | "math" | "none" | "note" | "presentation" | "region" | "row" | "rowgroup" | "rowheader" | "separator" | "table" | "term" | "text" | "toolbar" | "banner" | "complementary" | "contentinfo" | "form" | "main" | "navigation" | "region" | "search" | "doc-abstract" | "doc-acknowledgments" | "doc-afterword" | "doc-appendix" | "doc-backlink" | "doc-biblioentry" | "doc-bibliography" | "doc-biblioref" | "doc-chapter" | "doc-colophon" | "doc-conclusion" | "doc-cover" | "doc-credit" | "doc-credits" | "doc-dedication" | "doc-endnote" | "doc-endnotes" | "doc-epigraph" | "doc-epilogue" | "doc-errata" | "doc-example" | "doc-footnote" | "doc-foreword" | "doc-glossary" | "doc-glossref" | "doc-index" | "doc-introduction" | "doc-noteref" | "doc-notice" | "doc-pagebreak" | "doc-pagelist" | "doc-part" | "doc-preface" | "doc-prologue" | "doc-pullquote" | "doc-qna" | "doc-subtitle" | "doc-tip" | "doc-toc";
  "metanames": "application-name" | "author" | "description" | "format-detection" | "generator" | "keywords" | "publisher" | "referrer" | "robots" | "theme-color" | "viewport";
  "haspopup": "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
  "decoding": "sync" | "async" | "auto";
  "loading": "eager" | "lazy";
  "referrerpolicy": "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  "enterkeyhint": "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  "popover": "auto" | "hint" | "manual";
  "fetchpriority": "high" | "low" | "auto";
  "default": string | number | boolean | null;
  "v": boolean;
}

type GlobalAttributes = {
  "accesskey"?: ValueSet["default"]
  "autocapitalize"?: ValueSet["default"]
  "autocorrect"?: ValueSet["o"]
  "autofocus"?: ValueSet["default"]
  "class"?: ValueSet["default"]
  "contenteditable"?: ValueSet["default"]
  "contextmenu"?: ValueSet["default"]
  "dir"?: ValueSet["d"]
  "draggable"?: ValueSet["b"]
  "dropzone"?: ValueSet["default"]
  "enterkeyhint"?: ValueSet["enterkeyhint"]
  "exportparts"?: ValueSet["default"]
  "hidden"?: ValueSet["v"]
  "id"?: ValueSet["default"]
  "inert"?: ValueSet["default"]
  "inputmode"?: ValueSet["default"]
  "is"?: ValueSet["default"]
  "itemid"?: ValueSet["default"]
  "itemprop"?: ValueSet["default"]
  "itemref"?: ValueSet["default"]
  "itemscope"?: ValueSet["v"]
  "itemtype"?: ValueSet["default"]
  "lang"?: ValueSet["default"]
  "nonce"?: ValueSet["default"]
  "part"?: ValueSet["default"]
  "popover"?: ValueSet["popover"]
  "role"?: ValueSet["roles"]
  "slot"?: ValueSet["default"]
  "spellcheck"?: ValueSet["b"]
  "style"?: ValueSet["default"]
  "tabindex"?: ValueSet["default"]
  "title"?: ValueSet["default"]
  "translate"?: ValueSet["y"]
  "virtualkeyboardpolicy"?: ValueSet["b"]
  "onabort"?: ValueSet["default"]
  "onblur"?: ValueSet["default"]
  "oncanplay"?: ValueSet["default"]
  "oncanplaythrough"?: ValueSet["default"]
  "onchange"?: ValueSet["default"]
  "onclick"?: ValueSet["default"]
  "oncontextmenu"?: ValueSet["default"]
  "ondblclick"?: ValueSet["default"]
  "ondrag"?: ValueSet["default"]
  "ondragend"?: ValueSet["default"]
  "ondragenter"?: ValueSet["default"]
  "ondragleave"?: ValueSet["default"]
  "ondragover"?: ValueSet["default"]
  "ondragstart"?: ValueSet["default"]
  "ondrop"?: ValueSet["default"]
  "ondurationchange"?: ValueSet["default"]
  "onemptied"?: ValueSet["default"]
  "onended"?: ValueSet["default"]
  "onerror"?: ValueSet["default"]
  "onfocus"?: ValueSet["default"]
  "onformchange"?: ValueSet["default"]
  "onforminput"?: ValueSet["default"]
  "oninput"?: ValueSet["default"]
  "oninvalid"?: ValueSet["default"]
  "onkeydown"?: ValueSet["default"]
  "onkeypress"?: ValueSet["default"]
  "onkeyup"?: ValueSet["default"]
  "onload"?: ValueSet["default"]
  "onloadeddata"?: ValueSet["default"]
  "onloadedmetadata"?: ValueSet["default"]
  "onloadstart"?: ValueSet["default"]
  "onmousedown"?: ValueSet["default"]
  "onmousemove"?: ValueSet["default"]
  "onmouseout"?: ValueSet["default"]
  "onmouseover"?: ValueSet["default"]
  "onmouseup"?: ValueSet["default"]
  "onmousewheel"?: ValueSet["default"]
  "onmouseenter"?: ValueSet["default"]
  "onmouseleave"?: ValueSet["default"]
  "onpause"?: ValueSet["default"]
  "onplay"?: ValueSet["default"]
  "onplaying"?: ValueSet["default"]
  "onprogress"?: ValueSet["default"]
  "onratechange"?: ValueSet["default"]
  "onreset"?: ValueSet["default"]
  "onresize"?: ValueSet["default"]
  "onreadystatechange"?: ValueSet["default"]
  "onscroll"?: ValueSet["default"]
  "onseeked"?: ValueSet["default"]
  "onseeking"?: ValueSet["default"]
  "onselect"?: ValueSet["default"]
  "onshow"?: ValueSet["default"]
  "onstalled"?: ValueSet["default"]
  "onsubmit"?: ValueSet["default"]
  "onsuspend"?: ValueSet["default"]
  "ontimeupdate"?: ValueSet["default"]
  "onvolumechange"?: ValueSet["default"]
  "onwaiting"?: ValueSet["default"]
  "onpointercancel"?: ValueSet["default"]
  "onpointerdown"?: ValueSet["default"]
  "onpointerenter"?: ValueSet["default"]
  "onpointerleave"?: ValueSet["default"]
  "onpointerlockchange"?: ValueSet["default"]
  "onpointerlockerror"?: ValueSet["default"]
  "onpointermove"?: ValueSet["default"]
  "onpointerout"?: ValueSet["default"]
  "onpointerover"?: ValueSet["default"]
  "onpointerup"?: ValueSet["default"]
  "aria-activedescendant"?: ValueSet["default"]
  "aria-atomic"?: ValueSet["b"]
  "aria-autocomplete"?: ValueSet["autocomplete"]
  "aria-busy"?: ValueSet["b"]
  "aria-checked"?: ValueSet["tristate"]
  "aria-colcount"?: ValueSet["default"]
  "aria-colindex"?: ValueSet["default"]
  "aria-colspan"?: ValueSet["default"]
  "aria-controls"?: ValueSet["default"]
  "aria-current"?: ValueSet["current"]
  "aria-describedby"?: ValueSet["default"]
  "aria-disabled"?: ValueSet["b"]
  "aria-dropeffect"?: ValueSet["dropeffect"]
  "aria-errormessage"?: ValueSet["default"]
  "aria-expanded"?: ValueSet["u"]
  "aria-flowto"?: ValueSet["default"]
  "aria-grabbed"?: ValueSet["u"]
  "aria-haspopup"?: ValueSet["haspopup"]
  "aria-hidden"?: ValueSet["b"]
  "aria-invalid"?: ValueSet["invalid"]
  "aria-label"?: ValueSet["default"]
  "aria-labelledby"?: ValueSet["default"]
  "aria-level"?: ValueSet["default"]
  "aria-live"?: ValueSet["live"]
  "aria-modal"?: ValueSet["b"]
  "aria-multiline"?: ValueSet["b"]
  "aria-multiselectable"?: ValueSet["b"]
  "aria-orientation"?: ValueSet["orientation"]
  "aria-owns"?: ValueSet["default"]
  "aria-placeholder"?: ValueSet["default"]
  "aria-posinset"?: ValueSet["default"]
  "aria-pressed"?: ValueSet["tristate"]
  "aria-readonly"?: ValueSet["b"]
  "aria-relevant"?: ValueSet["relevant"]
  "aria-required"?: ValueSet["b"]
  "aria-roledescription"?: ValueSet["default"]
  "aria-rowcount"?: ValueSet["default"]
  "aria-rowindex"?: ValueSet["default"]
  "aria-rowspan"?: ValueSet["default"]
  "aria-selected"?: ValueSet["u"]
  "aria-setsize"?: ValueSet["default"]
  "aria-sort"?: ValueSet["sort"]
  "aria-valuemax"?: ValueSet["default"]
  "aria-valuemin"?: ValueSet["default"]
  "aria-valuenow"?: ValueSet["default"]
  "aria-valuetext"?: ValueSet["default"]
  "aria-details"?: ValueSet["default"]
  "aria-keyshortcuts"?: ValueSet["default"]
};

type html = El<{
  "manifest"?: ValueSet["default"]
  "version"?: ValueSet["default"]
  "xmlns"?: ValueSet["default"]
}>;
export const html: html;

type head = El<{
  "profile"?: ValueSet["default"]
}>;
export const head: head;

type title = El<{}>;
export const title: title;

type base = VoidEl<{
  "href"?: ValueSet["default"]
  "target"?: ValueSet["target"]
}>;
export const base: base;

type link = VoidEl<{
  "href"?: ValueSet["default"]
  "crossorigin"?: ValueSet["xo"]
  "rel"?: ValueSet["default"]
  "media"?: ValueSet["default"]
  "hreflang"?: ValueSet["default"]
  "type"?: ValueSet["default"]
  "sizes"?: ValueSet["default"]
  "as"?: ValueSet["default"]
  "importance"?: ValueSet["default"]
  "integrity"?: ValueSet["default"]
  "referrerpolicy"?: ValueSet["default"]
  "title"?: ValueSet["default"]
}>;
export const link: link;

type meta = VoidEl<{
  "name"?: ValueSet["default"]
  "http-equiv"?: ValueSet["default"]
  "content"?: ValueSet["default"]
  "charset"?: ValueSet["default"]
  "scheme"?: ValueSet["default"]
}>;
export const meta: meta;

type style = El<{
  "media"?: ValueSet["default"]
  "nonce"?: ValueSet["default"]
  "type"?: ValueSet["default"]
  "scoped"?: ValueSet["v"]
  "title"?: ValueSet["default"]
}>;
export const style: style;

type body = El<{
  "onafterprint"?: ValueSet["default"]
  "onbeforeprint"?: ValueSet["default"]
  "onbeforeunload"?: ValueSet["default"]
  "onhashchange"?: ValueSet["default"]
  "onlanguagechange"?: ValueSet["default"]
  "onmessage"?: ValueSet["default"]
  "onoffline"?: ValueSet["default"]
  "ononline"?: ValueSet["default"]
  "onpagehide"?: ValueSet["default"]
  "onpageshow"?: ValueSet["default"]
  "onpopstate"?: ValueSet["default"]
  "onstorage"?: ValueSet["default"]
  "onunload"?: ValueSet["default"]
  "alink"?: ValueSet["default"]
  "background"?: ValueSet["default"]
  "bgcolor"?: ValueSet["default"]
  "bottommargin"?: ValueSet["default"]
  "leftmargin"?: ValueSet["default"]
  "link"?: ValueSet["default"]
  "onblur"?: ValueSet["default"]
  "onerror"?: ValueSet["default"]
  "onfocus"?: ValueSet["default"]
  "onload"?: ValueSet["default"]
  "onredo"?: ValueSet["default"]
  "onresize"?: ValueSet["default"]
  "onundo"?: ValueSet["default"]
  "rightmargin"?: ValueSet["default"]
  "text"?: ValueSet["default"]
  "topmargin"?: ValueSet["default"]
  "vlink"?: ValueSet["default"]
}>;
export const body: body;

type article = El<{}>;
export const article: article;

type section = El<{}>;
export const section: section;

type nav = El<{}>;
export const nav: nav;

type aside = El<{}>;
export const aside: aside;

type h1 = El<{}>;
export const h1: h1;

type h2 = El<{}>;
export const h2: h2;

type h3 = El<{}>;
export const h3: h3;

type h4 = El<{}>;
export const h4: h4;

type h5 = El<{}>;
export const h5: h5;

type h6 = El<{}>;
export const h6: h6;

type header = El<{}>;
export const header: header;

type footer = El<{}>;
export const footer: footer;

type address = El<{}>;
export const address: address;

type p = El<{}>;
export const p: p;

type hr = VoidEl<{
  "align"?: ValueSet["default"]
  "color"?: ValueSet["default"]
  "noshade"?: ValueSet["default"]
  "size"?: ValueSet["default"]
  "width"?: ValueSet["default"]
}>;
export const hr: hr;

type pre = El<{
  "cols"?: ValueSet["default"]
  "width"?: ValueSet["default"]
  "wrap"?: ValueSet["default"]
}>;
export const pre: pre;

type blockquote = El<{
  "cite"?: ValueSet["default"]
}>;
export const blockquote: blockquote;

type ol = El<{
  "reversed"?: ValueSet["v"]
  "start"?: ValueSet["default"]
  "type"?: ValueSet["lt"]
  "compact"?: ValueSet["default"]
}>;
export const ol: ol;

type ul = El<{
  "compact"?: ValueSet["default"]
}>;
export const ul: ul;

type li = El<{
  "value"?: ValueSet["default"]
  "type"?: ValueSet["default"]
}>;
export const li: li;

type dl = El<{}>;
export const dl: dl;

type dt = El<{}>;
export const dt: dt;

type dd = El<{
  "nowrap"?: ValueSet["default"]
}>;
export const dd: dd;

type figure = El<{}>;
export const figure: figure;

type figcaption = El<{}>;
export const figcaption: figcaption;

type main = El<{}>;
export const main: main;

type div = El<{}>;
export const div: div;

type a = El<{
  "href"?: ValueSet["default"]
  "target"?: ValueSet["target"]
  "download"?: ValueSet["default"]
  "ping"?: ValueSet["default"]
  "rel"?: ValueSet["default"]
  "hreflang"?: ValueSet["default"]
  "type"?: ValueSet["default"]
  "referrerpolicy"?: ValueSet["default"]
}>;
export const a: a;

type em = El<{}>;
export const em: em;

type strong = El<{}>;
export const strong: strong;

type small = El<{}>;
export const small: small;

type s = El<{}>;
export const s: s;

type cite = El<{}>;
export const cite: cite;

type q = El<{
  "cite"?: ValueSet["default"]
}>;
export const q: q;

type dfn = El<{}>;
export const dfn: dfn;

type abbr = El<{}>;
export const abbr: abbr;

type ruby = El<{}>;
export const ruby: ruby;

type rb = El<{}>;
export const rb: rb;

type rt = El<{}>;
export const rt: rt;

type rp = El<{}>;
export const rp: rp;

type time = El<{
  "datetime"?: ValueSet["default"]
}>;
export const time: time;

type code = El<{}>;
export const code: code;

type var_ = El<{}>;
export const var_: var_;

type samp = El<{}>;
export const samp: samp;

type kbd = El<{}>;
export const kbd: kbd;

type sub = El<{}>;
export const sub: sub;

type sup = El<{}>;
export const sup: sup;

type i = El<{}>;
export const i: i;

type b = El<{}>;
export const b: b;

type u = El<{}>;
export const u: u;

type mark = El<{}>;
export const mark: mark;

type bdi = El<{}>;
export const bdi: bdi;

type bdo = El<{
  "dir"?: ValueSet["default"]
}>;
export const bdo: bdo;

type span = El<{}>;
export const span: span;

type br = VoidEl<{
  "clear"?: ValueSet["default"]
}>;
export const br: br;

type wbr = VoidEl<{}>;
export const wbr: wbr;

type ins = El<{
  "cite"?: ValueSet["default"]
  "datetime"?: ValueSet["default"]
}>;
export const ins: ins;

type del = El<{
  "cite"?: ValueSet["default"]
  "datetime"?: ValueSet["default"]
}>;
export const del: del;

type picture = El<{}>;
export const picture: picture;

type img = VoidEl<{
  "alt"?: ValueSet["default"]
  "src"?: ValueSet["default"]
  "srcset"?: ValueSet["default"]
  "crossorigin"?: ValueSet["xo"]
  "usemap"?: ValueSet["default"]
  "ismap"?: ValueSet["v"]
  "width"?: ValueSet["default"]
  "height"?: ValueSet["default"]
  "decoding"?: ValueSet["decoding"]
  "loading"?: ValueSet["loading"]
  "fetchpriority"?: ValueSet["fetchpriority"]
  "referrerpolicy"?: ValueSet["referrerpolicy"]
  "sizes"?: ValueSet["default"]
  "importance"?: ValueSet["default"]
  "intrinsicsize"?: ValueSet["default"]
}>;
export const img: img;

type iframe = El<{
  "src"?: ValueSet["default"]
  "srcdoc"?: ValueSet["default"]
  "name"?: ValueSet["default"]
  "sandbox"?: ValueSet["sb"]
  "seamless"?: ValueSet["v"]
  "allowfullscreen"?: ValueSet["v"]
  "width"?: ValueSet["default"]
  "height"?: ValueSet["default"]
  "allow"?: ValueSet["default"]
  "allowpaymentrequest"?: ValueSet["default"]
  "csp"?: ValueSet["default"]
  "importance"?: ValueSet["default"]
  "referrerpolicy"?: ValueSet["default"]
}>;
export const iframe: iframe;

type embed = VoidEl<{
  "src"?: ValueSet["default"]
  "type"?: ValueSet["default"]
  "width"?: ValueSet["default"]
  "height"?: ValueSet["default"]
}>;
export const embed: embed;

type object_ = El<{
  "data"?: ValueSet["default"]
  "type"?: ValueSet["default"]
  "typemustmatch"?: ValueSet["v"]
  "name"?: ValueSet["default"]
  "usemap"?: ValueSet["default"]
  "form"?: ValueSet["default"]
  "width"?: ValueSet["default"]
  "height"?: ValueSet["default"]
  "archive"?: ValueSet["default"]
  "border"?: ValueSet["default"]
  "classid"?: ValueSet["default"]
  "codebase"?: ValueSet["default"]
  "codetype"?: ValueSet["default"]
  "declare"?: ValueSet["default"]
  "standby"?: ValueSet["default"]
  "tabindex"?: ValueSet["default"]
}>;
export const object_: object_;

type param = VoidEl<{
  "name"?: ValueSet["default"]
  "value"?: ValueSet["default"]
  "type"?: ValueSet["default"]
  "valuetype"?: ValueSet["default"]
}>;
export const param: param;

type video = El<{
  "src"?: ValueSet["default"]
  "crossorigin"?: ValueSet["xo"]
  "poster"?: ValueSet["default"]
  "preload"?: ValueSet["pl"]
  "autoplay"?: ValueSet["v"]
  "mediagroup"?: ValueSet["default"]
  "loop"?: ValueSet["v"]
  "muted"?: ValueSet["v"]
  "controls"?: ValueSet["v"]
  "width"?: ValueSet["default"]
  "height"?: ValueSet["default"]
}>;
export const video: video;

type audio = El<{
  "src"?: ValueSet["default"]
  "crossorigin"?: ValueSet["xo"]
  "preload"?: ValueSet["pl"]
  "autoplay"?: ValueSet["v"]
  "mediagroup"?: ValueSet["default"]
  "loop"?: ValueSet["v"]
  "muted"?: ValueSet["v"]
  "controls"?: ValueSet["v"]
}>;
export const audio: audio;

type source = VoidEl<{
  "src"?: ValueSet["default"]
  "type"?: ValueSet["default"]
  "sizes"?: ValueSet["default"]
  "srcset"?: ValueSet["default"]
  "media"?: ValueSet["default"]
}>;
export const source: source;

type track = VoidEl<{
  "default"?: ValueSet["v"]
  "kind"?: ValueSet["tk"]
  "label"?: ValueSet["default"]
  "src"?: ValueSet["default"]
  "srclang"?: ValueSet["default"]
}>;
export const track: track;

type map = El<{
  "name"?: ValueSet["default"]
}>;
export const map: map;

type area = VoidEl<{
  "alt"?: ValueSet["default"]
  "coords"?: ValueSet["default"]
  "shape"?: ValueSet["sh"]
  "href"?: ValueSet["default"]
  "target"?: ValueSet["target"]
  "download"?: ValueSet["default"]
  "ping"?: ValueSet["default"]
  "rel"?: ValueSet["default"]
  "hreflang"?: ValueSet["default"]
  "type"?: ValueSet["default"]
  "accesskey"?: ValueSet["default"]
}>;
export const area: area;

type table = El<{
  "border"?: ValueSet["default"]
  "align"?: ValueSet["default"]
}>;
export const table: table;

type caption = El<{
  "align"?: ValueSet["default"]
}>;
export const caption: caption;

type colgroup = El<{
  "span"?: ValueSet["default"]
  "align"?: ValueSet["default"]
}>;
export const colgroup: colgroup;

type col = VoidEl<{
  "span"?: ValueSet["default"]
  "align"?: ValueSet["default"]
}>;
export const col: col;

type tbody = El<{
  "align"?: ValueSet["default"]
}>;
export const tbody: tbody;

type thead = El<{
  "align"?: ValueSet["default"]
}>;
export const thead: thead;

type tfoot = El<{
  "align"?: ValueSet["default"]
}>;
export const tfoot: tfoot;

type tr = El<{
  "align"?: ValueSet["default"]
}>;
export const tr: tr;

type td = El<{
  "colspan"?: ValueSet["default"]
  "rowspan"?: ValueSet["default"]
  "headers"?: ValueSet["default"]
  "abbr"?: ValueSet["default"]
  "align"?: ValueSet["default"]
  "axis"?: ValueSet["default"]
  "bgcolor"?: ValueSet["default"]
}>;
export const td: td;

type th = El<{
  "colspan"?: ValueSet["default"]
  "rowspan"?: ValueSet["default"]
  "headers"?: ValueSet["default"]
  "scope"?: ValueSet["s"]
  "sorted"?: ValueSet["default"]
  "abbr"?: ValueSet["default"]
  "align"?: ValueSet["default"]
  "axis"?: ValueSet["default"]
  "bgcolor"?: ValueSet["default"]
}>;
export const th: th;

type form = El<{
  "accept-charset"?: ValueSet["default"]
  "action"?: ValueSet["default"]
  "autocomplete"?: ValueSet["o"]
  "enctype"?: ValueSet["et"]
  "method"?: ValueSet["m"]
  "name"?: ValueSet["default"]
  "novalidate"?: ValueSet["v"]
  "target"?: ValueSet["target"]
  "accept"?: ValueSet["default"]
  "autocapitalize"?: ValueSet["default"]
}>;
export const form: form;

type label = El<{
  "form"?: ValueSet["default"]
  "for"?: ValueSet["default"]
}>;
export const label: label;

type input = VoidEl<{
  "accept"?: ValueSet["default"]
  "alt"?: ValueSet["default"]
  "autocomplete"?: ValueSet["inputautocomplete"]
  "autofocus"?: ValueSet["v"]
  "checked"?: ValueSet["v"]
  "dirname"?: ValueSet["default"]
  "disabled"?: ValueSet["v"]
  "form"?: ValueSet["default"]
  "formaction"?: ValueSet["default"]
  "formenctype"?: ValueSet["et"]
  "formmethod"?: ValueSet["fm"]
  "formnovalidate"?: ValueSet["v"]
  "formtarget"?: ValueSet["default"]
  "height"?: ValueSet["default"]
  "inputmode"?: ValueSet["im"]
  "list"?: ValueSet["default"]
  "max"?: ValueSet["default"]
  "maxlength"?: ValueSet["default"]
  "min"?: ValueSet["default"]
  "minlength"?: ValueSet["default"]
  "multiple"?: ValueSet["v"]
  "name"?: ValueSet["default"]
  "pattern"?: ValueSet["default"]
  "placeholder"?: ValueSet["default"]
  "popovertarget"?: ValueSet["default"]
  "popovertargetaction"?: ValueSet["default"]
  "readonly"?: ValueSet["v"]
  "required"?: ValueSet["v"]
  "size"?: ValueSet["default"]
  "src"?: ValueSet["default"]
  "step"?: ValueSet["default"]
  "type"?: ValueSet["t"]
  "value"?: ValueSet["default"]
  "width"?: ValueSet["default"]
}>;
export const input: input;

type button = El<{
  "autofocus"?: ValueSet["v"]
  "disabled"?: ValueSet["v"]
  "form"?: ValueSet["default"]
  "formaction"?: ValueSet["default"]
  "formenctype"?: ValueSet["et"]
  "formmethod"?: ValueSet["fm"]
  "formnovalidate"?: ValueSet["v"]
  "formtarget"?: ValueSet["default"]
  "name"?: ValueSet["default"]
  "popovertarget"?: ValueSet["default"]
  "popovertargetaction"?: ValueSet["default"]
  "type"?: ValueSet["bt"]
  "value"?: ValueSet["default"]
  "autocomplete"?: ValueSet["default"]
}>;
export const button: button;

type select = El<{
  "autocomplete"?: ValueSet["inputautocomplete"]
  "autofocus"?: ValueSet["v"]
  "disabled"?: ValueSet["v"]
  "form"?: ValueSet["default"]
  "multiple"?: ValueSet["v"]
  "name"?: ValueSet["default"]
  "required"?: ValueSet["v"]
  "size"?: ValueSet["default"]
}>;
export const select: select;

type datalist = El<{}>;
export const datalist: datalist;

type optgroup = El<{
  "disabled"?: ValueSet["v"]
  "label"?: ValueSet["default"]
}>;
export const optgroup: optgroup;

type option = El<{
  "disabled"?: ValueSet["v"]
  "label"?: ValueSet["default"]
  "selected"?: ValueSet["v"]
  "value"?: ValueSet["default"]
}>;
export const option: option;

type textarea = El<{
  "autocomplete"?: ValueSet["inputautocomplete"]
  "autofocus"?: ValueSet["v"]
  "cols"?: ValueSet["default"]
  "dirname"?: ValueSet["default"]
  "disabled"?: ValueSet["v"]
  "form"?: ValueSet["default"]
  "inputmode"?: ValueSet["im"]
  "maxlength"?: ValueSet["default"]
  "minlength"?: ValueSet["default"]
  "name"?: ValueSet["default"]
  "placeholder"?: ValueSet["default"]
  "readonly"?: ValueSet["v"]
  "required"?: ValueSet["v"]
  "rows"?: ValueSet["default"]
  "wrap"?: ValueSet["w"]
  "autocapitalize"?: ValueSet["default"]
  "spellcheck"?: ValueSet["default"]
}>;
export const textarea: textarea;

type output = El<{
  "for"?: ValueSet["default"]
  "form"?: ValueSet["default"]
  "name"?: ValueSet["default"]
}>;
export const output: output;

type progress = El<{
  "value"?: ValueSet["default"]
  "max"?: ValueSet["default"]
}>;
export const progress: progress;

type meter = El<{
  "value"?: ValueSet["default"]
  "min"?: ValueSet["default"]
  "max"?: ValueSet["default"]
  "low"?: ValueSet["default"]
  "high"?: ValueSet["default"]
  "optimum"?: ValueSet["default"]
  "form"?: ValueSet["default"]
}>;
export const meter: meter;

type fieldset = El<{
  "disabled"?: ValueSet["v"]
  "form"?: ValueSet["default"]
  "name"?: ValueSet["default"]
}>;
export const fieldset: fieldset;

type legend = El<{}>;
export const legend: legend;

type details = El<{
  "open"?: ValueSet["v"]
}>;
export const details: details;

type summary = El<{}>;
export const summary: summary;

type dialog = El<{
  "open"?: ValueSet["default"]
}>;
export const dialog: dialog;

type script = El<{
  "src"?: ValueSet["default"]
  "type"?: ValueSet["default"]
  "charset"?: ValueSet["default"]
  "async"?: ValueSet["v"]
  "defer"?: ValueSet["v"]
  "crossorigin"?: ValueSet["xo"]
  "nonce"?: ValueSet["default"]
  "integrity"?: ValueSet["default"]
  "nomodule"?: ValueSet["default"]
  "referrerpolicy"?: ValueSet["default"]
  "text"?: ValueSet["default"]
}>;
export const script: script;

type noscript = El<{}>;
export const noscript: noscript;

type template = El<{}>;
export const template: template;

type canvas = El<{
  "width"?: ValueSet["default"]
  "height"?: ValueSet["default"]
  "moz-opaque"?: ValueSet["default"]
}>;
export const canvas: canvas;

type slot = El<{
  "name"?: ValueSet["default"]
}>;
export const slot: slot;

type data = El<{
  "value"?: ValueSet["default"]
}>;
export const data: data;

type hgroup = El<{}>;
export const hgroup: hgroup;

type menu = El<{}>;
export const menu: menu;

type search = El<{}>;
export const search: search;

type fencedframe = El<{
  "allow"?: ValueSet["default"]
  "height"?: ValueSet["default"]
  "width"?: ValueSet["default"]
}>;
export const fencedframe: fencedframe;

type selectedcontent = El<{}>;
export const selectedcontent: selectedcontent;
