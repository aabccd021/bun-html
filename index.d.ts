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

type GlobalAttributes = {
  "accesskey"?: string | number | boolean | null;
  "autocapitalize"?: string | number | boolean | null;
  "autocorrect"?: "on" | "off";
  "autofocus"?: string | number | boolean | null;
  "class"?: string | number | boolean | null;
  "contenteditable"?: string | number | boolean | null;
  "contextmenu"?: string | number | boolean | null;
  "dir"?: "ltr" | "rtl" | "auto";
  "draggable"?: "true" | "false";
  "dropzone"?: string | number | boolean | null;
  "enterkeyhint"?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  "exportparts"?: string | number | boolean | null;
  "hidden"?: boolean;
  "id"?: string | number | boolean | null;
  "inert"?: string | number | boolean | null;
  "inputmode"?: string | number | boolean | null;
  "is"?: string | number | boolean | null;
  "itemid"?: string | number | boolean | null;
  "itemprop"?: string | number | boolean | null;
  "itemref"?: string | number | boolean | null;
  "itemscope"?: boolean;
  "itemtype"?: string | number | boolean | null;
  "lang"?: string | number | boolean | null;
  "nonce"?: string | number | boolean | null;
  "part"?: string | number | boolean | null;
  "popover"?: "auto" | "hint" | "manual";
  "role"?: "alert" | "alertdialog" | "button" | "checkbox" | "dialog" | "gridcell" | "link" | "log" | "marquee" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "option" | "progressbar" | "radio" | "scrollbar" | "searchbox" | "slider" | "spinbutton" | "status" | "switch" | "tab" | "tabpanel" | "textbox" | "timer" | "tooltip" | "treeitem" | "combobox" | "grid" | "listbox" | "menu" | "menubar" | "radiogroup" | "tablist" | "tree" | "treegrid" | "application" | "article" | "cell" | "columnheader" | "definition" | "directory" | "document" | "feed" | "figure" | "group" | "heading" | "img" | "list" | "listitem" | "math" | "none" | "note" | "presentation" | "region" | "row" | "rowgroup" | "rowheader" | "separator" | "table" | "term" | "text" | "toolbar" | "banner" | "complementary" | "contentinfo" | "form" | "main" | "navigation" | "region" | "search" | "doc-abstract" | "doc-acknowledgments" | "doc-afterword" | "doc-appendix" | "doc-backlink" | "doc-biblioentry" | "doc-bibliography" | "doc-biblioref" | "doc-chapter" | "doc-colophon" | "doc-conclusion" | "doc-cover" | "doc-credit" | "doc-credits" | "doc-dedication" | "doc-endnote" | "doc-endnotes" | "doc-epigraph" | "doc-epilogue" | "doc-errata" | "doc-example" | "doc-footnote" | "doc-foreword" | "doc-glossary" | "doc-glossref" | "doc-index" | "doc-introduction" | "doc-noteref" | "doc-notice" | "doc-pagebreak" | "doc-pagelist" | "doc-part" | "doc-preface" | "doc-prologue" | "doc-pullquote" | "doc-qna" | "doc-subtitle" | "doc-tip" | "doc-toc";
  "slot"?: string | number | boolean | null;
  "spellcheck"?: "true" | "false";
  "style"?: string | number | boolean | null;
  "tabindex"?: string | number | boolean | null;
  "title"?: string | number | boolean | null;
  "translate"?: "yes" | "no";
  "virtualkeyboardpolicy"?: "true" | "false";
  "onabort"?: string | number | boolean | null;
  "onblur"?: string | number | boolean | null;
  "oncanplay"?: string | number | boolean | null;
  "oncanplaythrough"?: string | number | boolean | null;
  "onchange"?: string | number | boolean | null;
  "onclick"?: string | number | boolean | null;
  "oncontextmenu"?: string | number | boolean | null;
  "ondblclick"?: string | number | boolean | null;
  "ondrag"?: string | number | boolean | null;
  "ondragend"?: string | number | boolean | null;
  "ondragenter"?: string | number | boolean | null;
  "ondragleave"?: string | number | boolean | null;
  "ondragover"?: string | number | boolean | null;
  "ondragstart"?: string | number | boolean | null;
  "ondrop"?: string | number | boolean | null;
  "ondurationchange"?: string | number | boolean | null;
  "onemptied"?: string | number | boolean | null;
  "onended"?: string | number | boolean | null;
  "onerror"?: string | number | boolean | null;
  "onfocus"?: string | number | boolean | null;
  "onformchange"?: string | number | boolean | null;
  "onforminput"?: string | number | boolean | null;
  "oninput"?: string | number | boolean | null;
  "oninvalid"?: string | number | boolean | null;
  "onkeydown"?: string | number | boolean | null;
  "onkeypress"?: string | number | boolean | null;
  "onkeyup"?: string | number | boolean | null;
  "onload"?: string | number | boolean | null;
  "onloadeddata"?: string | number | boolean | null;
  "onloadedmetadata"?: string | number | boolean | null;
  "onloadstart"?: string | number | boolean | null;
  "onmousedown"?: string | number | boolean | null;
  "onmousemove"?: string | number | boolean | null;
  "onmouseout"?: string | number | boolean | null;
  "onmouseover"?: string | number | boolean | null;
  "onmouseup"?: string | number | boolean | null;
  "onmousewheel"?: string | number | boolean | null;
  "onmouseenter"?: string | number | boolean | null;
  "onmouseleave"?: string | number | boolean | null;
  "onpause"?: string | number | boolean | null;
  "onplay"?: string | number | boolean | null;
  "onplaying"?: string | number | boolean | null;
  "onprogress"?: string | number | boolean | null;
  "onratechange"?: string | number | boolean | null;
  "onreset"?: string | number | boolean | null;
  "onresize"?: string | number | boolean | null;
  "onreadystatechange"?: string | number | boolean | null;
  "onscroll"?: string | number | boolean | null;
  "onseeked"?: string | number | boolean | null;
  "onseeking"?: string | number | boolean | null;
  "onselect"?: string | number | boolean | null;
  "onshow"?: string | number | boolean | null;
  "onstalled"?: string | number | boolean | null;
  "onsubmit"?: string | number | boolean | null;
  "onsuspend"?: string | number | boolean | null;
  "ontimeupdate"?: string | number | boolean | null;
  "onvolumechange"?: string | number | boolean | null;
  "onwaiting"?: string | number | boolean | null;
  "onpointercancel"?: string | number | boolean | null;
  "onpointerdown"?: string | number | boolean | null;
  "onpointerenter"?: string | number | boolean | null;
  "onpointerleave"?: string | number | boolean | null;
  "onpointerlockchange"?: string | number | boolean | null;
  "onpointerlockerror"?: string | number | boolean | null;
  "onpointermove"?: string | number | boolean | null;
  "onpointerout"?: string | number | boolean | null;
  "onpointerover"?: string | number | boolean | null;
  "onpointerup"?: string | number | boolean | null;
  "aria-activedescendant"?: string | number | boolean | null;
  "aria-atomic"?: "true" | "false";
  "aria-autocomplete"?: "inline" | "list" | "both" | "none";
  "aria-busy"?: "true" | "false";
  "aria-checked"?: "true" | "false" | "mixed" | "undefined";
  "aria-colcount"?: string | number | boolean | null;
  "aria-colindex"?: string | number | boolean | null;
  "aria-colspan"?: string | number | boolean | null;
  "aria-controls"?: string | number | boolean | null;
  "aria-current"?: "page" | "step" | "location" | "date" | "time" | "true" | "false";
  "aria-describedby"?: string | number | boolean | null;
  "aria-disabled"?: "true" | "false";
  "aria-dropeffect"?: "copy" | "move" | "link" | "execute" | "popup" | "none";
  "aria-errormessage"?: string | number | boolean | null;
  "aria-expanded"?: "true" | "false" | "undefined";
  "aria-flowto"?: string | number | boolean | null;
  "aria-grabbed"?: "true" | "false" | "undefined";
  "aria-haspopup"?: "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog";
  "aria-hidden"?: "true" | "false";
  "aria-invalid"?: "grammar" | "false" | "spelling" | "true";
  "aria-label"?: string | number | boolean | null;
  "aria-labelledby"?: string | number | boolean | null;
  "aria-level"?: string | number | boolean | null;
  "aria-live"?: "off" | "polite" | "assertive";
  "aria-modal"?: "true" | "false";
  "aria-multiline"?: "true" | "false";
  "aria-multiselectable"?: "true" | "false";
  "aria-orientation"?: "vertical" | "horizontal" | "undefined";
  "aria-owns"?: string | number | boolean | null;
  "aria-placeholder"?: string | number | boolean | null;
  "aria-posinset"?: string | number | boolean | null;
  "aria-pressed"?: "true" | "false" | "mixed" | "undefined";
  "aria-readonly"?: "true" | "false";
  "aria-relevant"?: "additions" | "removals" | "text" | "all" | "additions text";
  "aria-required"?: "true" | "false";
  "aria-roledescription"?: string | number | boolean | null;
  "aria-rowcount"?: string | number | boolean | null;
  "aria-rowindex"?: string | number | boolean | null;
  "aria-rowspan"?: string | number | boolean | null;
  "aria-selected"?: "true" | "false" | "undefined";
  "aria-setsize"?: string | number | boolean | null;
  "aria-sort"?: "ascending" | "descending" | "none" | "other";
  "aria-valuemax"?: string | number | boolean | null;
  "aria-valuemin"?: string | number | boolean | null;
  "aria-valuenow"?: string | number | boolean | null;
  "aria-valuetext"?: string | number | boolean | null;
  "aria-details"?: string | number | boolean | null;
  "aria-keyshortcuts"?: string | number | boolean | null;
};

type html = El<{
  "manifest"?: string | number | boolean | null;
  "version"?: string | number | boolean | null;
  "xmlns"?: string | number | boolean | null;
}>;
export const html: html;

type head = El<{
  "profile"?: string | number | boolean | null;
}>;
export const head: head;

type title = El<{}>;
export const title: title;

type base = VoidEl<{
  "href"?: string | number | boolean | null;
  "target"?: "_self" | "_blank" | "_parent" | "_top";
}>;
export const base: base;

type link = VoidEl<{
  "href"?: string | number | boolean | null;
  "crossorigin"?: "anonymous" | "use-credentials";
  "rel"?: string | number | boolean | null;
  "media"?: string | number | boolean | null;
  "hreflang"?: string | number | boolean | null;
  "type"?: string | number | boolean | null;
  "sizes"?: string | number | boolean | null;
  "as"?: string | number | boolean | null;
  "importance"?: string | number | boolean | null;
  "integrity"?: string | number | boolean | null;
  "referrerpolicy"?: string | number | boolean | null;
  "title"?: string | number | boolean | null;
}>;
export const link: link;

type meta = VoidEl<{
  "name"?: string | number | boolean | null;
  "http-equiv"?: string | number | boolean | null;
  "content"?: string | number | boolean | null;
  "charset"?: string | number | boolean | null;
  "scheme"?: string | number | boolean | null;
}>;
export const meta: meta;

type style = El<{
  "media"?: string | number | boolean | null;
  "nonce"?: string | number | boolean | null;
  "type"?: string | number | boolean | null;
  "scoped"?: boolean;
  "title"?: string | number | boolean | null;
}>;
export const style: style;

type body = El<{
  "onafterprint"?: string | number | boolean | null;
  "onbeforeprint"?: string | number | boolean | null;
  "onbeforeunload"?: string | number | boolean | null;
  "onhashchange"?: string | number | boolean | null;
  "onlanguagechange"?: string | number | boolean | null;
  "onmessage"?: string | number | boolean | null;
  "onoffline"?: string | number | boolean | null;
  "ononline"?: string | number | boolean | null;
  "onpagehide"?: string | number | boolean | null;
  "onpageshow"?: string | number | boolean | null;
  "onpopstate"?: string | number | boolean | null;
  "onstorage"?: string | number | boolean | null;
  "onunload"?: string | number | boolean | null;
  "alink"?: string | number | boolean | null;
  "background"?: string | number | boolean | null;
  "bgcolor"?: string | number | boolean | null;
  "bottommargin"?: string | number | boolean | null;
  "leftmargin"?: string | number | boolean | null;
  "link"?: string | number | boolean | null;
  "onblur"?: string | number | boolean | null;
  "onerror"?: string | number | boolean | null;
  "onfocus"?: string | number | boolean | null;
  "onload"?: string | number | boolean | null;
  "onredo"?: string | number | boolean | null;
  "onresize"?: string | number | boolean | null;
  "onundo"?: string | number | boolean | null;
  "rightmargin"?: string | number | boolean | null;
  "text"?: string | number | boolean | null;
  "topmargin"?: string | number | boolean | null;
  "vlink"?: string | number | boolean | null;
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
  "align"?: string | number | boolean | null;
  "color"?: string | number | boolean | null;
  "noshade"?: string | number | boolean | null;
  "size"?: string | number | boolean | null;
  "width"?: string | number | boolean | null;
}>;
export const hr: hr;

type pre = El<{
  "cols"?: string | number | boolean | null;
  "width"?: string | number | boolean | null;
  "wrap"?: string | number | boolean | null;
}>;
export const pre: pre;

type blockquote = El<{
  "cite"?: string | number | boolean | null;
}>;
export const blockquote: blockquote;

type ol = El<{
  "reversed"?: boolean;
  "start"?: string | number | boolean | null;
  "type"?: "1" | "a" | "A" | "i" | "I";
  "compact"?: string | number | boolean | null;
}>;
export const ol: ol;

type ul = El<{
  "compact"?: string | number | boolean | null;
}>;
export const ul: ul;

type li = El<{
  "value"?: string | number | boolean | null;
  "type"?: string | number | boolean | null;
}>;
export const li: li;

type dl = El<{}>;
export const dl: dl;

type dt = El<{}>;
export const dt: dt;

type dd = El<{
  "nowrap"?: string | number | boolean | null;
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
  "href"?: string | number | boolean | null;
  "target"?: "_self" | "_blank" | "_parent" | "_top";
  "download"?: string | number | boolean | null;
  "ping"?: string | number | boolean | null;
  "rel"?: string | number | boolean | null;
  "hreflang"?: string | number | boolean | null;
  "type"?: string | number | boolean | null;
  "referrerpolicy"?: string | number | boolean | null;
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
  "cite"?: string | number | boolean | null;
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
  "datetime"?: string | number | boolean | null;
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
  "dir"?: string | number | boolean | null;
}>;
export const bdo: bdo;

type span = El<{}>;
export const span: span;

type br = VoidEl<{
  "clear"?: string | number | boolean | null;
}>;
export const br: br;

type wbr = VoidEl<{}>;
export const wbr: wbr;

type ins = El<{
  "cite"?: string | number | boolean | null;
  "datetime"?: string | number | boolean | null;
}>;
export const ins: ins;

type del = El<{
  "cite"?: string | number | boolean | null;
  "datetime"?: string | number | boolean | null;
}>;
export const del: del;

type picture = El<{}>;
export const picture: picture;

type img = VoidEl<{
  "alt"?: string | number | boolean | null;
  "src"?: string | number | boolean | null;
  "srcset"?: string | number | boolean | null;
  "crossorigin"?: "anonymous" | "use-credentials";
  "usemap"?: string | number | boolean | null;
  "ismap"?: boolean;
  "width"?: string | number | boolean | null;
  "height"?: string | number | boolean | null;
  "decoding"?: "sync" | "async" | "auto";
  "loading"?: "eager" | "lazy";
  "fetchpriority"?: "high" | "low" | "auto";
  "referrerpolicy"?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  "sizes"?: string | number | boolean | null;
  "importance"?: string | number | boolean | null;
  "intrinsicsize"?: string | number | boolean | null;
}>;
export const img: img;

type iframe = El<{
  "src"?: string | number | boolean | null;
  "srcdoc"?: string | number | boolean | null;
  "name"?: string | number | boolean | null;
  "sandbox"?: "allow-forms" | "allow-modals" | "allow-pointer-lock" | "allow-popups" | "allow-popups-to-escape-sandbox" | "allow-same-origin" | "allow-scripts" | "allow-top-navigation";
  "seamless"?: boolean;
  "allowfullscreen"?: boolean;
  "width"?: string | number | boolean | null;
  "height"?: string | number | boolean | null;
  "allow"?: string | number | boolean | null;
  "allowpaymentrequest"?: string | number | boolean | null;
  "csp"?: string | number | boolean | null;
  "importance"?: string | number | boolean | null;
  "referrerpolicy"?: string | number | boolean | null;
}>;
export const iframe: iframe;

type embed = VoidEl<{
  "src"?: string | number | boolean | null;
  "type"?: string | number | boolean | null;
  "width"?: string | number | boolean | null;
  "height"?: string | number | boolean | null;
}>;
export const embed: embed;

type object_ = El<{
  "data"?: string | number | boolean | null;
  "type"?: string | number | boolean | null;
  "typemustmatch"?: boolean;
  "name"?: string | number | boolean | null;
  "usemap"?: string | number | boolean | null;
  "form"?: string | number | boolean | null;
  "width"?: string | number | boolean | null;
  "height"?: string | number | boolean | null;
  "archive"?: string | number | boolean | null;
  "border"?: string | number | boolean | null;
  "classid"?: string | number | boolean | null;
  "codebase"?: string | number | boolean | null;
  "codetype"?: string | number | boolean | null;
  "declare"?: string | number | boolean | null;
  "standby"?: string | number | boolean | null;
  "tabindex"?: string | number | boolean | null;
}>;
export const object_: object_;

type param = VoidEl<{
  "name"?: string | number | boolean | null;
  "value"?: string | number | boolean | null;
  "type"?: string | number | boolean | null;
  "valuetype"?: string | number | boolean | null;
}>;
export const param: param;

type video = El<{
  "src"?: string | number | boolean | null;
  "crossorigin"?: "anonymous" | "use-credentials";
  "poster"?: string | number | boolean | null;
  "preload"?: "none" | "metadata" | "auto";
  "autoplay"?: boolean;
  "mediagroup"?: string | number | boolean | null;
  "loop"?: boolean;
  "muted"?: boolean;
  "controls"?: boolean;
  "width"?: string | number | boolean | null;
  "height"?: string | number | boolean | null;
}>;
export const video: video;

type audio = El<{
  "src"?: string | number | boolean | null;
  "crossorigin"?: "anonymous" | "use-credentials";
  "preload"?: "none" | "metadata" | "auto";
  "autoplay"?: boolean;
  "mediagroup"?: string | number | boolean | null;
  "loop"?: boolean;
  "muted"?: boolean;
  "controls"?: boolean;
}>;
export const audio: audio;

type source = VoidEl<{
  "src"?: string | number | boolean | null;
  "type"?: string | number | boolean | null;
  "sizes"?: string | number | boolean | null;
  "srcset"?: string | number | boolean | null;
  "media"?: string | number | boolean | null;
}>;
export const source: source;

type track = VoidEl<{
  "default"?: boolean;
  "kind"?: "subtitles" | "captions" | "descriptions" | "chapters" | "metadata";
  "label"?: string | number | boolean | null;
  "src"?: string | number | boolean | null;
  "srclang"?: string | number | boolean | null;
}>;
export const track: track;

type map = El<{
  "name"?: string | number | boolean | null;
}>;
export const map: map;

type area = VoidEl<{
  "alt"?: string | number | boolean | null;
  "coords"?: string | number | boolean | null;
  "shape"?: "circle" | "default" | "poly" | "rect";
  "href"?: string | number | boolean | null;
  "target"?: "_self" | "_blank" | "_parent" | "_top";
  "download"?: string | number | boolean | null;
  "ping"?: string | number | boolean | null;
  "rel"?: string | number | boolean | null;
  "hreflang"?: string | number | boolean | null;
  "type"?: string | number | boolean | null;
  "accesskey"?: string | number | boolean | null;
}>;
export const area: area;

type table = El<{
  "border"?: string | number | boolean | null;
  "align"?: string | number | boolean | null;
}>;
export const table: table;

type caption = El<{
  "align"?: string | number | boolean | null;
}>;
export const caption: caption;

type colgroup = El<{
  "span"?: string | number | boolean | null;
  "align"?: string | number | boolean | null;
}>;
export const colgroup: colgroup;

type col = VoidEl<{
  "span"?: string | number | boolean | null;
  "align"?: string | number | boolean | null;
}>;
export const col: col;

type tbody = El<{
  "align"?: string | number | boolean | null;
}>;
export const tbody: tbody;

type thead = El<{
  "align"?: string | number | boolean | null;
}>;
export const thead: thead;

type tfoot = El<{
  "align"?: string | number | boolean | null;
}>;
export const tfoot: tfoot;

type tr = El<{
  "align"?: string | number | boolean | null;
}>;
export const tr: tr;

type td = El<{
  "colspan"?: string | number | boolean | null;
  "rowspan"?: string | number | boolean | null;
  "headers"?: string | number | boolean | null;
  "abbr"?: string | number | boolean | null;
  "align"?: string | number | boolean | null;
  "axis"?: string | number | boolean | null;
  "bgcolor"?: string | number | boolean | null;
}>;
export const td: td;

type th = El<{
  "colspan"?: string | number | boolean | null;
  "rowspan"?: string | number | boolean | null;
  "headers"?: string | number | boolean | null;
  "scope"?: "row" | "col" | "rowgroup" | "colgroup";
  "sorted"?: string | number | boolean | null;
  "abbr"?: string | number | boolean | null;
  "align"?: string | number | boolean | null;
  "axis"?: string | number | boolean | null;
  "bgcolor"?: string | number | boolean | null;
}>;
export const th: th;

type form = El<{
  "accept-charset"?: string | number | boolean | null;
  "action"?: string | number | boolean | null;
  "autocomplete"?: "on" | "off";
  "enctype"?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
  "method"?: "get" | "post" | "dialog";
  "name"?: string | number | boolean | null;
  "novalidate"?: boolean;
  "target"?: "_self" | "_blank" | "_parent" | "_top";
  "accept"?: string | number | boolean | null;
  "autocapitalize"?: string | number | boolean | null;
}>;
export const form: form;

type label = El<{
  "form"?: string | number | boolean | null;
  "for"?: string | number | boolean | null;
}>;
export const label: label;

type input = VoidEl<{
  "accept"?: string | number | boolean | null;
  "alt"?: string | number | boolean | null;
  "autocomplete"?: "additional-name" | "address-level1" | "address-level2" | "address-level3" | "address-level4" | "address-line1" | "address-line2" | "address-line3" | "bday" | "bday-year" | "bday-day" | "bday-month" | "billing" | "cc-additional-name" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-family-name" | "cc-given-name" | "cc-name" | "cc-number" | "cc-type" | "country" | "country-name" | "current-password" | "email" | "family-name" | "fax" | "given-name" | "home" | "honorific-prefix" | "honorific-suffix" | "impp" | "language" | "mobile" | "name" | "new-password" | "nickname" | "off" | "on" | "organization" | "organization-title" | "pager" | "photo" | "postal-code" | "sex" | "shipping" | "street-address" | "tel-area-code" | "tel" | "tel-country-code" | "tel-extension" | "tel-local" | "tel-local-prefix" | "tel-local-suffix" | "tel-national" | "transaction-amount" | "transaction-currency" | "url" | "username" | "work";
  "autofocus"?: boolean;
  "checked"?: boolean;
  "dirname"?: string | number | boolean | null;
  "disabled"?: boolean;
  "form"?: string | number | boolean | null;
  "formaction"?: string | number | boolean | null;
  "formenctype"?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
  "formmethod"?: "get" | "post";
  "formnovalidate"?: boolean;
  "formtarget"?: string | number | boolean | null;
  "height"?: string | number | boolean | null;
  "inputmode"?: "verbatim" | "latin" | "latin-name" | "latin-prose" | "full-width-latin" | "kana" | "kana-name" | "katakana" | "numeric" | "tel" | "email" | "url";
  "list"?: string | number | boolean | null;
  "max"?: string | number | boolean | null;
  "maxlength"?: string | number | boolean | null;
  "min"?: string | number | boolean | null;
  "minlength"?: string | number | boolean | null;
  "multiple"?: boolean;
  "name"?: string | number | boolean | null;
  "pattern"?: string | number | boolean | null;
  "placeholder"?: string | number | boolean | null;
  "popovertarget"?: string | number | boolean | null;
  "popovertargetaction"?: string | number | boolean | null;
  "readonly"?: boolean;
  "required"?: boolean;
  "size"?: string | number | boolean | null;
  "src"?: string | number | boolean | null;
  "step"?: string | number | boolean | null;
  "type"?: "hidden" | "text" | "search" | "tel" | "url" | "email" | "password" | "datetime" | "date" | "month" | "week" | "time" | "datetime-local" | "number" | "range" | "color" | "checkbox" | "radio" | "file" | "submit" | "image" | "reset" | "button";
  "value"?: string | number | boolean | null;
  "width"?: string | number | boolean | null;
}>;
export const input: input;

type button = El<{
  "autofocus"?: boolean;
  "disabled"?: boolean;
  "form"?: string | number | boolean | null;
  "formaction"?: string | number | boolean | null;
  "formenctype"?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
  "formmethod"?: "get" | "post";
  "formnovalidate"?: boolean;
  "formtarget"?: string | number | boolean | null;
  "name"?: string | number | boolean | null;
  "popovertarget"?: string | number | boolean | null;
  "popovertargetaction"?: string | number | boolean | null;
  "type"?: "button" | "submit" | "reset";
  "value"?: string | number | boolean | null;
  "autocomplete"?: string | number | boolean | null;
}>;
export const button: button;

type select = El<{
  "autocomplete"?: "additional-name" | "address-level1" | "address-level2" | "address-level3" | "address-level4" | "address-line1" | "address-line2" | "address-line3" | "bday" | "bday-year" | "bday-day" | "bday-month" | "billing" | "cc-additional-name" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-family-name" | "cc-given-name" | "cc-name" | "cc-number" | "cc-type" | "country" | "country-name" | "current-password" | "email" | "family-name" | "fax" | "given-name" | "home" | "honorific-prefix" | "honorific-suffix" | "impp" | "language" | "mobile" | "name" | "new-password" | "nickname" | "off" | "on" | "organization" | "organization-title" | "pager" | "photo" | "postal-code" | "sex" | "shipping" | "street-address" | "tel-area-code" | "tel" | "tel-country-code" | "tel-extension" | "tel-local" | "tel-local-prefix" | "tel-local-suffix" | "tel-national" | "transaction-amount" | "transaction-currency" | "url" | "username" | "work";
  "autofocus"?: boolean;
  "disabled"?: boolean;
  "form"?: string | number | boolean | null;
  "multiple"?: boolean;
  "name"?: string | number | boolean | null;
  "required"?: boolean;
  "size"?: string | number | boolean | null;
}>;
export const select: select;

type datalist = El<{}>;
export const datalist: datalist;

type optgroup = El<{
  "disabled"?: boolean;
  "label"?: string | number | boolean | null;
}>;
export const optgroup: optgroup;

type option = El<{
  "disabled"?: boolean;
  "label"?: string | number | boolean | null;
  "selected"?: boolean;
  "value"?: string | number | boolean | null;
}>;
export const option: option;

type textarea = El<{
  "autocomplete"?: "additional-name" | "address-level1" | "address-level2" | "address-level3" | "address-level4" | "address-line1" | "address-line2" | "address-line3" | "bday" | "bday-year" | "bday-day" | "bday-month" | "billing" | "cc-additional-name" | "cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-family-name" | "cc-given-name" | "cc-name" | "cc-number" | "cc-type" | "country" | "country-name" | "current-password" | "email" | "family-name" | "fax" | "given-name" | "home" | "honorific-prefix" | "honorific-suffix" | "impp" | "language" | "mobile" | "name" | "new-password" | "nickname" | "off" | "on" | "organization" | "organization-title" | "pager" | "photo" | "postal-code" | "sex" | "shipping" | "street-address" | "tel-area-code" | "tel" | "tel-country-code" | "tel-extension" | "tel-local" | "tel-local-prefix" | "tel-local-suffix" | "tel-national" | "transaction-amount" | "transaction-currency" | "url" | "username" | "work";
  "autofocus"?: boolean;
  "cols"?: string | number | boolean | null;
  "dirname"?: string | number | boolean | null;
  "disabled"?: boolean;
  "form"?: string | number | boolean | null;
  "inputmode"?: "verbatim" | "latin" | "latin-name" | "latin-prose" | "full-width-latin" | "kana" | "kana-name" | "katakana" | "numeric" | "tel" | "email" | "url";
  "maxlength"?: string | number | boolean | null;
  "minlength"?: string | number | boolean | null;
  "name"?: string | number | boolean | null;
  "placeholder"?: string | number | boolean | null;
  "readonly"?: boolean;
  "required"?: boolean;
  "rows"?: string | number | boolean | null;
  "wrap"?: "soft" | "hard";
  "autocapitalize"?: string | number | boolean | null;
  "spellcheck"?: string | number | boolean | null;
}>;
export const textarea: textarea;

type output = El<{
  "for"?: string | number | boolean | null;
  "form"?: string | number | boolean | null;
  "name"?: string | number | boolean | null;
}>;
export const output: output;

type progress = El<{
  "value"?: string | number | boolean | null;
  "max"?: string | number | boolean | null;
}>;
export const progress: progress;

type meter = El<{
  "value"?: string | number | boolean | null;
  "min"?: string | number | boolean | null;
  "max"?: string | number | boolean | null;
  "low"?: string | number | boolean | null;
  "high"?: string | number | boolean | null;
  "optimum"?: string | number | boolean | null;
  "form"?: string | number | boolean | null;
}>;
export const meter: meter;

type fieldset = El<{
  "disabled"?: boolean;
  "form"?: string | number | boolean | null;
  "name"?: string | number | boolean | null;
}>;
export const fieldset: fieldset;

type legend = El<{}>;
export const legend: legend;

type details = El<{
  "open"?: boolean;
}>;
export const details: details;

type summary = El<{}>;
export const summary: summary;

type dialog = El<{
  "open"?: string | number | boolean | null;
}>;
export const dialog: dialog;

type script = El<{
  "src"?: string | number | boolean | null;
  "type"?: string | number | boolean | null;
  "charset"?: string | number | boolean | null;
  "async"?: boolean;
  "defer"?: boolean;
  "crossorigin"?: "anonymous" | "use-credentials";
  "nonce"?: string | number | boolean | null;
  "integrity"?: string | number | boolean | null;
  "nomodule"?: string | number | boolean | null;
  "referrerpolicy"?: string | number | boolean | null;
  "text"?: string | number | boolean | null;
}>;
export const script: script;

type noscript = El<{}>;
export const noscript: noscript;

type template = El<{}>;
export const template: template;

type canvas = El<{
  "width"?: string | number | boolean | null;
  "height"?: string | number | boolean | null;
  "moz-opaque"?: string | number | boolean | null;
}>;
export const canvas: canvas;

type slot = El<{
  "name"?: string | number | boolean | null;
}>;
export const slot: slot;

type data = El<{
  "value"?: string | number | boolean | null;
}>;
export const data: data;

type hgroup = El<{}>;
export const hgroup: hgroup;

type menu = El<{}>;
export const menu: menu;

type search = El<{}>;
export const search: search;

type fencedframe = El<{
  "allow"?: string | number | boolean | null;
  "height"?: string | number | boolean | null;
  "width"?: string | number | boolean | null;
}>;
export const fencedframe: fencedframe;

type selectedcontent = El<{}>;
export const selectedcontent: selectedcontent;
