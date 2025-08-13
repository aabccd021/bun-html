type render = (element: Element) => string;

export const render: render;

type unsafeHtml = (value: string) => Element

export const unsafeHtml: unsafeHtml;

type AttributeValues = string | number | boolean | null | undefined;

type Element = string | false | undefined | {
    tag: string;
    attributes: Record<string, AttributeValues>;
    children?: Array<Element>;
} | {
    value: string;
};

type ElAttributes<A extends keyof Attributes> = Pick<Attributes, GlobalAttributeNames | A> & {
  [k in `data-${string}`]?: ValueSets["default"]; 
}

type El<A extends keyof Attributes> = (attributes: ElAttributes<A>, children: Element[]) => Element;

type VoidEl<A extends keyof Attributes> = (attributes: ElAttributes<A>) => Element;

type ValueSets = {
  "default": string | number | boolean | null;
  "v": boolean;
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
}

type Attributes = {
  "accesskey"?: ValueSets["default"];
  "autocapitalize"?: ValueSets["default"];
  "autocorrect"?: ValueSets["o"];
  "autofocus"?: ValueSets["v"];
  "class"?: ValueSets["default"];
  "contenteditable"?: ValueSets["default"];
  "contextmenu"?: ValueSets["default"];
  "dir"?: ValueSets["d"];
  "draggable"?: ValueSets["b"];
  "dropzone"?: ValueSets["default"];
  "enterkeyhint"?: ValueSets["enterkeyhint"];
  "exportparts"?: ValueSets["default"];
  "hidden"?: ValueSets["v"];
  "id"?: ValueSets["default"];
  "inert"?: ValueSets["default"];
  "inputmode"?: ValueSets["im"];
  "is"?: ValueSets["default"];
  "itemid"?: ValueSets["default"];
  "itemprop"?: ValueSets["default"];
  "itemref"?: ValueSets["default"];
  "itemscope"?: ValueSets["v"];
  "itemtype"?: ValueSets["default"];
  "lang"?: ValueSets["default"];
  "nonce"?: ValueSets["default"];
  "part"?: ValueSets["default"];
  "popover"?: ValueSets["popover"];
  "role"?: ValueSets["roles"];
  "slot"?: ValueSets["default"];
  "spellcheck"?: ValueSets["b"];
  "style"?: ValueSets["default"];
  "tabindex"?: ValueSets["default"];
  "title"?: ValueSets["default"];
  "translate"?: ValueSets["y"];
  "virtualkeyboardpolicy"?: ValueSets["b"];
  "onabort"?: ValueSets["default"];
  "onblur"?: ValueSets["default"];
  "oncanplay"?: ValueSets["default"];
  "oncanplaythrough"?: ValueSets["default"];
  "onchange"?: ValueSets["default"];
  "onclick"?: ValueSets["default"];
  "oncontextmenu"?: ValueSets["default"];
  "ondblclick"?: ValueSets["default"];
  "ondrag"?: ValueSets["default"];
  "ondragend"?: ValueSets["default"];
  "ondragenter"?: ValueSets["default"];
  "ondragleave"?: ValueSets["default"];
  "ondragover"?: ValueSets["default"];
  "ondragstart"?: ValueSets["default"];
  "ondrop"?: ValueSets["default"];
  "ondurationchange"?: ValueSets["default"];
  "onemptied"?: ValueSets["default"];
  "onended"?: ValueSets["default"];
  "onerror"?: ValueSets["default"];
  "onfocus"?: ValueSets["default"];
  "onformchange"?: ValueSets["default"];
  "onforminput"?: ValueSets["default"];
  "oninput"?: ValueSets["default"];
  "oninvalid"?: ValueSets["default"];
  "onkeydown"?: ValueSets["default"];
  "onkeypress"?: ValueSets["default"];
  "onkeyup"?: ValueSets["default"];
  "onload"?: ValueSets["default"];
  "onloadeddata"?: ValueSets["default"];
  "onloadedmetadata"?: ValueSets["default"];
  "onloadstart"?: ValueSets["default"];
  "onmousedown"?: ValueSets["default"];
  "onmousemove"?: ValueSets["default"];
  "onmouseout"?: ValueSets["default"];
  "onmouseover"?: ValueSets["default"];
  "onmouseup"?: ValueSets["default"];
  "onmousewheel"?: ValueSets["default"];
  "onmouseenter"?: ValueSets["default"];
  "onmouseleave"?: ValueSets["default"];
  "onpause"?: ValueSets["default"];
  "onplay"?: ValueSets["default"];
  "onplaying"?: ValueSets["default"];
  "onprogress"?: ValueSets["default"];
  "onratechange"?: ValueSets["default"];
  "onreset"?: ValueSets["default"];
  "onresize"?: ValueSets["default"];
  "onreadystatechange"?: ValueSets["default"];
  "onscroll"?: ValueSets["default"];
  "onseeked"?: ValueSets["default"];
  "onseeking"?: ValueSets["default"];
  "onselect"?: ValueSets["default"];
  "onshow"?: ValueSets["default"];
  "onstalled"?: ValueSets["default"];
  "onsubmit"?: ValueSets["default"];
  "onsuspend"?: ValueSets["default"];
  "ontimeupdate"?: ValueSets["default"];
  "onvolumechange"?: ValueSets["default"];
  "onwaiting"?: ValueSets["default"];
  "onpointercancel"?: ValueSets["default"];
  "onpointerdown"?: ValueSets["default"];
  "onpointerenter"?: ValueSets["default"];
  "onpointerleave"?: ValueSets["default"];
  "onpointerlockchange"?: ValueSets["default"];
  "onpointerlockerror"?: ValueSets["default"];
  "onpointermove"?: ValueSets["default"];
  "onpointerout"?: ValueSets["default"];
  "onpointerover"?: ValueSets["default"];
  "onpointerup"?: ValueSets["default"];
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
  "manifest"?: ValueSets["default"];
  "version"?: ValueSets["default"];
  "xmlns"?: ValueSets["default"];
  "profile"?: ValueSets["default"];
  "href"?: ValueSets["default"];
  "target"?: ValueSets["target"];
  "crossorigin"?: ValueSets["xo"];
  "rel"?: ValueSets["default"];
  "media"?: ValueSets["default"];
  "hreflang"?: ValueSets["default"];
  "type"?: ValueSets["lt"];
  "sizes"?: ValueSets["default"];
  "as"?: ValueSets["default"];
  "importance"?: ValueSets["default"];
  "integrity"?: ValueSets["default"];
  "referrerpolicy"?: ValueSets["referrerpolicy"];
  "name"?: ValueSets["default"];
  "http-equiv"?: ValueSets["default"];
  "content"?: ValueSets["default"];
  "charset"?: ValueSets["default"];
  "scheme"?: ValueSets["default"];
  "scoped"?: ValueSets["v"];
  "onafterprint"?: ValueSets["default"];
  "onbeforeprint"?: ValueSets["default"];
  "onbeforeunload"?: ValueSets["default"];
  "onhashchange"?: ValueSets["default"];
  "onlanguagechange"?: ValueSets["default"];
  "onmessage"?: ValueSets["default"];
  "onoffline"?: ValueSets["default"];
  "ononline"?: ValueSets["default"];
  "onpagehide"?: ValueSets["default"];
  "onpageshow"?: ValueSets["default"];
  "onpopstate"?: ValueSets["default"];
  "onstorage"?: ValueSets["default"];
  "onunload"?: ValueSets["default"];
  "alink"?: ValueSets["default"];
  "background"?: ValueSets["default"];
  "bgcolor"?: ValueSets["default"];
  "bottommargin"?: ValueSets["default"];
  "leftmargin"?: ValueSets["default"];
  "link"?: ValueSets["default"];
  "onredo"?: ValueSets["default"];
  "onundo"?: ValueSets["default"];
  "rightmargin"?: ValueSets["default"];
  "text"?: ValueSets["default"];
  "topmargin"?: ValueSets["default"];
  "vlink"?: ValueSets["default"];
  "align"?: ValueSets["default"];
  "color"?: ValueSets["default"];
  "noshade"?: ValueSets["default"];
  "size"?: ValueSets["default"];
  "width"?: ValueSets["default"];
  "cols"?: ValueSets["default"];
  "wrap"?: ValueSets["w"];
  "cite"?: ValueSets["default"];
  "reversed"?: ValueSets["v"];
  "start"?: ValueSets["default"];
  "compact"?: ValueSets["default"];
  "value"?: ValueSets["default"];
  "nowrap"?: ValueSets["default"];
  "download"?: ValueSets["default"];
  "ping"?: ValueSets["default"];
  "datetime"?: ValueSets["default"];
  "clear"?: ValueSets["default"];
  "alt"?: ValueSets["default"];
  "src"?: ValueSets["default"];
  "srcset"?: ValueSets["default"];
  "usemap"?: ValueSets["default"];
  "ismap"?: ValueSets["v"];
  "height"?: ValueSets["default"];
  "decoding"?: ValueSets["decoding"];
  "loading"?: ValueSets["loading"];
  "fetchpriority"?: ValueSets["fetchpriority"];
  "intrinsicsize"?: ValueSets["default"];
  "srcdoc"?: ValueSets["default"];
  "sandbox"?: ValueSets["sb"];
  "seamless"?: ValueSets["v"];
  "allowfullscreen"?: ValueSets["v"];
  "allow"?: ValueSets["default"];
  "allowpaymentrequest"?: ValueSets["default"];
  "csp"?: ValueSets["default"];
  "data"?: ValueSets["default"];
  "typemustmatch"?: ValueSets["v"];
  "form"?: ValueSets["default"];
  "archive"?: ValueSets["default"];
  "border"?: ValueSets["default"];
  "classid"?: ValueSets["default"];
  "codebase"?: ValueSets["default"];
  "codetype"?: ValueSets["default"];
  "declare"?: ValueSets["default"];
  "standby"?: ValueSets["default"];
  "valuetype"?: ValueSets["default"];
  "poster"?: ValueSets["default"];
  "preload"?: ValueSets["pl"];
  "autoplay"?: ValueSets["v"];
  "mediagroup"?: ValueSets["default"];
  "loop"?: ValueSets["v"];
  "muted"?: ValueSets["v"];
  "controls"?: ValueSets["v"];
  "default"?: ValueSets["v"];
  "kind"?: ValueSets["tk"];
  "label"?: ValueSets["default"];
  "srclang"?: ValueSets["default"];
  "coords"?: ValueSets["default"];
  "shape"?: ValueSets["sh"];
  "span"?: ValueSets["default"];
  "colspan"?: ValueSets["default"];
  "rowspan"?: ValueSets["default"];
  "headers"?: ValueSets["default"];
  "abbr"?: ValueSets["default"];
  "axis"?: ValueSets["default"];
  "scope"?: ValueSets["s"];
  "sorted"?: ValueSets["default"];
  "accept-charset"?: ValueSets["default"];
  "action"?: ValueSets["default"];
  "autocomplete"?: ValueSets["o"];
  "enctype"?: ValueSets["et"];
  "method"?: ValueSets["m"];
  "novalidate"?: ValueSets["v"];
  "accept"?: ValueSets["default"];
  "for"?: ValueSets["default"];
  "checked"?: ValueSets["v"];
  "dirname"?: ValueSets["default"];
  "disabled"?: ValueSets["v"];
  "formaction"?: ValueSets["default"];
  "formenctype"?: ValueSets["et"];
  "formmethod"?: ValueSets["fm"];
  "formnovalidate"?: ValueSets["v"];
  "formtarget"?: ValueSets["default"];
  "list"?: ValueSets["default"];
  "max"?: ValueSets["default"];
  "maxlength"?: ValueSets["default"];
  "min"?: ValueSets["default"];
  "minlength"?: ValueSets["default"];
  "multiple"?: ValueSets["v"];
  "pattern"?: ValueSets["default"];
  "placeholder"?: ValueSets["default"];
  "popovertarget"?: ValueSets["default"];
  "popovertargetaction"?: ValueSets["default"];
  "readonly"?: ValueSets["v"];
  "required"?: ValueSets["v"];
  "step"?: ValueSets["default"];
  "selected"?: ValueSets["v"];
  "rows"?: ValueSets["default"];
  "low"?: ValueSets["default"];
  "high"?: ValueSets["default"];
  "optimum"?: ValueSets["default"];
  "open"?: ValueSets["v"];
  "async"?: ValueSets["v"];
  "defer"?: ValueSets["v"];
  "nomodule"?: ValueSets["default"];
  "moz-opaque"?: ValueSets["default"];
}

type GlobalAttributeNames = "accesskey" | "autocapitalize" | "autocorrect" | "autofocus" | "class" | "contenteditable" | "contextmenu" | "dir" | "draggable" | "dropzone" | "enterkeyhint" | "exportparts" | "hidden" | "id" | "inert" | "inputmode" | "is" | "itemid" | "itemprop" | "itemref" | "itemscope" | "itemtype" | "lang" | "nonce" | "part" | "popover" | "role" | "slot" | "spellcheck" | "style" | "tabindex" | "title" | "translate" | "virtualkeyboardpolicy" | "onabort" | "onblur" | "oncanplay" | "oncanplaythrough" | "onchange" | "onclick" | "oncontextmenu" | "ondblclick" | "ondrag" | "ondragend" | "ondragenter" | "ondragleave" | "ondragover" | "ondragstart" | "ondrop" | "ondurationchange" | "onemptied" | "onended" | "onerror" | "onfocus" | "onformchange" | "onforminput" | "oninput" | "oninvalid" | "onkeydown" | "onkeypress" | "onkeyup" | "onload" | "onloadeddata" | "onloadedmetadata" | "onloadstart" | "onmousedown" | "onmousemove" | "onmouseout" | "onmouseover" | "onmouseup" | "onmousewheel" | "onmouseenter" | "onmouseleave" | "onpause" | "onplay" | "onplaying" | "onprogress" | "onratechange" | "onreset" | "onresize" | "onreadystatechange" | "onscroll" | "onseeked" | "onseeking" | "onselect" | "onshow" | "onstalled" | "onsubmit" | "onsuspend" | "ontimeupdate" | "onvolumechange" | "onwaiting" | "onpointercancel" | "onpointerdown" | "onpointerenter" | "onpointerleave" | "onpointerlockchange" | "onpointerlockerror" | "onpointermove" | "onpointerout" | "onpointerover" | "onpointerup" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "aria-details" | "aria-keyshortcuts";

type html = El<"manifest" | "version" | "xmlns">;
export const html: html;

type head = El<"profile">;
export const head: head;

type title = El<never>;
export const title: title;

type base = VoidEl<"href" | "target">;
export const base: base;

type link = VoidEl<"href" | "crossorigin" | "rel" | "media" | "hreflang" | "type" | "sizes" | "as" | "importance" | "importance" | "integrity" | "referrerpolicy" | "title">;
export const link: link;

type meta = VoidEl<"name" | "http-equiv" | "content" | "charset" | "scheme">;
export const meta: meta;

type style = El<"media" | "nonce" | "type" | "scoped" | "title">;
export const style: style;

type body = El<"onafterprint" | "onbeforeprint" | "onbeforeunload" | "onhashchange" | "onlanguagechange" | "onmessage" | "onoffline" | "ononline" | "onpagehide" | "onpageshow" | "onpopstate" | "onstorage" | "onunload" | "alink" | "background" | "bgcolor" | "bottommargin" | "leftmargin" | "link" | "onblur" | "onerror" | "onfocus" | "onload" | "onredo" | "onresize" | "onundo" | "rightmargin" | "text" | "topmargin" | "vlink">;
export const body: body;

type article = El<never>;
export const article: article;

type section = El<never>;
export const section: section;

type nav = El<never>;
export const nav: nav;

type aside = El<never>;
export const aside: aside;

type h1 = El<never>;
export const h1: h1;

type h2 = El<never>;
export const h2: h2;

type h3 = El<never>;
export const h3: h3;

type h4 = El<never>;
export const h4: h4;

type h5 = El<never>;
export const h5: h5;

type h6 = El<never>;
export const h6: h6;

type header = El<never>;
export const header: header;

type footer = El<never>;
export const footer: footer;

type address = El<never>;
export const address: address;

type p = El<never>;
export const p: p;

type hr = VoidEl<"align" | "color" | "noshade" | "size" | "width">;
export const hr: hr;

type pre = El<"cols" | "width" | "wrap">;
export const pre: pre;

type blockquote = El<"cite">;
export const blockquote: blockquote;

type ol = El<"reversed" | "start" | "type" | "compact">;
export const ol: ol;

type ul = El<"compact">;
export const ul: ul;

type li = El<"value" | "type">;
export const li: li;

type dl = El<never>;
export const dl: dl;

type dt = El<never>;
export const dt: dt;

type dd = El<"nowrap">;
export const dd: dd;

type figure = El<never>;
export const figure: figure;

type figcaption = El<never>;
export const figcaption: figcaption;

type main = El<never>;
export const main: main;

type div = El<never>;
export const div: div;

type a = El<"href" | "target" | "download" | "ping" | "rel" | "hreflang" | "type" | "referrerpolicy">;
export const a: a;

type em = El<never>;
export const em: em;

type strong = El<never>;
export const strong: strong;

type small = El<never>;
export const small: small;

type s = El<never>;
export const s: s;

type cite = El<never>;
export const cite: cite;

type q = El<"cite">;
export const q: q;

type dfn = El<never>;
export const dfn: dfn;

type abbr = El<never>;
export const abbr: abbr;

type ruby = El<never>;
export const ruby: ruby;

type rb = El<never>;
export const rb: rb;

type rt = El<never>;
export const rt: rt;

type rp = El<never>;
export const rp: rp;

type time = El<"datetime">;
export const time: time;

type code = El<never>;
export const code: code;

type var_ = El<never>;
export const var_: var_;

type samp = El<never>;
export const samp: samp;

type kbd = El<never>;
export const kbd: kbd;

type sub = El<never>;
export const sub: sub;

type sup = El<never>;
export const sup: sup;

type i = El<never>;
export const i: i;

type b = El<never>;
export const b: b;

type u = El<never>;
export const u: u;

type mark = El<never>;
export const mark: mark;

type bdi = El<never>;
export const bdi: bdi;

type bdo = El<"dir">;
export const bdo: bdo;

type span = El<never>;
export const span: span;

type br = VoidEl<"clear">;
export const br: br;

type wbr = VoidEl<never>;
export const wbr: wbr;

type ins = El<"cite" | "datetime">;
export const ins: ins;

type del = El<"cite" | "datetime">;
export const del: del;

type picture = El<never>;
export const picture: picture;

type img = VoidEl<"alt" | "src" | "srcset" | "crossorigin" | "usemap" | "ismap" | "width" | "height" | "decoding" | "loading" | "fetchpriority" | "referrerpolicy" | "sizes" | "importance" | "importance" | "intrinsicsize">;
export const img: img;

type iframe = El<"src" | "srcdoc" | "name" | "sandbox" | "seamless" | "allowfullscreen" | "width" | "height" | "allow" | "allowpaymentrequest" | "allowpaymentrequest" | "csp" | "importance" | "referrerpolicy">;
export const iframe: iframe;

type embed = VoidEl<"src" | "type" | "width" | "height">;
export const embed: embed;

type object_ = El<"data" | "type" | "typemustmatch" | "name" | "usemap" | "form" | "width" | "height" | "archive" | "border" | "classid" | "codebase" | "codetype" | "declare" | "standby" | "tabindex">;
export const object_: object_;

type param = VoidEl<"name" | "value" | "type" | "valuetype">;
export const param: param;

type video = El<"src" | "crossorigin" | "poster" | "preload" | "autoplay" | "mediagroup" | "loop" | "muted" | "controls" | "width" | "height">;
export const video: video;

type audio = El<"src" | "crossorigin" | "preload" | "autoplay" | "mediagroup" | "loop" | "muted" | "controls">;
export const audio: audio;

type source = VoidEl<"src" | "type" | "sizes" | "srcset" | "media">;
export const source: source;

type track = VoidEl<"default" | "kind" | "label" | "src" | "srclang">;
export const track: track;

type map = El<"name">;
export const map: map;

type area = VoidEl<"alt" | "coords" | "shape" | "href" | "target" | "download" | "ping" | "rel" | "hreflang" | "type" | "accesskey">;
export const area: area;

type table = El<"border" | "align">;
export const table: table;

type caption = El<"align">;
export const caption: caption;

type colgroup = El<"span" | "align">;
export const colgroup: colgroup;

type col = VoidEl<"span" | "align">;
export const col: col;

type tbody = El<"align">;
export const tbody: tbody;

type thead = El<"align">;
export const thead: thead;

type tfoot = El<"align">;
export const tfoot: tfoot;

type tr = El<"align">;
export const tr: tr;

type td = El<"colspan" | "rowspan" | "headers" | "abbr" | "align" | "axis" | "bgcolor">;
export const td: td;

type th = El<"colspan" | "rowspan" | "headers" | "scope" | "sorted" | "abbr" | "align" | "axis" | "bgcolor">;
export const th: th;

type form = El<"accept-charset" | "action" | "autocomplete" | "enctype" | "method" | "name" | "novalidate" | "target" | "accept" | "autocapitalize">;
export const form: form;

type label = El<"form" | "for">;
export const label: label;

type input = VoidEl<"accept" | "alt" | "autocomplete" | "autofocus" | "checked" | "dirname" | "disabled" | "form" | "formaction" | "formenctype" | "formmethod" | "formnovalidate" | "formtarget" | "height" | "inputmode" | "list" | "max" | "maxlength" | "min" | "minlength" | "multiple" | "name" | "pattern" | "placeholder" | "popovertarget" | "popovertargetaction" | "readonly" | "required" | "size" | "src" | "step" | "type" | "value" | "width">;
export const input: input;

type button = El<"autofocus" | "disabled" | "form" | "formaction" | "formenctype" | "formmethod" | "formnovalidate" | "formtarget" | "name" | "popovertarget" | "popovertargetaction" | "type" | "value" | "autocomplete">;
export const button: button;

type select = El<"autocomplete" | "autofocus" | "disabled" | "form" | "multiple" | "name" | "required" | "size">;
export const select: select;

type datalist = El<never>;
export const datalist: datalist;

type optgroup = El<"disabled" | "label">;
export const optgroup: optgroup;

type option = El<"disabled" | "label" | "selected" | "value">;
export const option: option;

type textarea = El<"autocomplete" | "autofocus" | "cols" | "dirname" | "disabled" | "form" | "inputmode" | "maxlength" | "minlength" | "name" | "placeholder" | "readonly" | "required" | "rows" | "wrap" | "autocapitalize" | "spellcheck">;
export const textarea: textarea;

type output = El<"for" | "form" | "name">;
export const output: output;

type progress = El<"value" | "max">;
export const progress: progress;

type meter = El<"value" | "min" | "max" | "low" | "high" | "optimum" | "form">;
export const meter: meter;

type fieldset = El<"disabled" | "form" | "name">;
export const fieldset: fieldset;

type legend = El<never>;
export const legend: legend;

type details = El<"open">;
export const details: details;

type summary = El<never>;
export const summary: summary;

type dialog = El<"open">;
export const dialog: dialog;

type script = El<"src" | "type" | "charset" | "async" | "defer" | "crossorigin" | "nonce" | "integrity" | "nomodule" | "referrerpolicy" | "text">;
export const script: script;

type noscript = El<never>;
export const noscript: noscript;

type template = El<never>;
export const template: template;

type canvas = El<"width" | "height" | "moz-opaque">;
export const canvas: canvas;

type slot = El<"name">;
export const slot: slot;

type data = El<"value">;
export const data: data;

type hgroup = El<never>;
export const hgroup: hgroup;

type menu = El<never>;
export const menu: menu;

type search = El<never>;
export const search: search;

type fencedframe = El<"allow" | "height" | "width">;
export const fencedframe: fencedframe;

type selectedcontent = El<never>;
export const selectedcontent: selectedcontent;
