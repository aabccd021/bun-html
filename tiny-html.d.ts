type Render = (element: Element) => string;

export const render: Render;

type UnsafeHtml = (value: string) => Element

export const unsafeHtml: UnsafeHtml;

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
  "b": 
      | "true"
      | "false"
  "u": 
      | "true"
      | "false"
      | "undefined"
  "o": 
      | "on"
      | "off"
  "y": 
      | "yes"
      | "no"
  "w": 
      | "soft"
      | "hard"
  "d": 
      | "ltr"
      | "rtl"
      | "auto"
  "m": 
      | "get"
      | "post"
      | "dialog"
  "fm": 
      | "get"
      | "post"
  "s": 
      | "row"
      | "col"
      | "rowgroup"
      | "colgroup"
  "t": 
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
      | "button"
  "im": 
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
      | "url"
  "bt": 
      | "button"
      | "submit"
      | "reset"
  "lt": 
      | "1"
      | "a"
      | "A"
      | "i"
      | "I"
  "mt": 
      | "context"
      | "toolbar"
  "mit": 
      | "command"
      | "checkbox"
      | "radio"
  "et": 
      | "application/x-www-form-urlencoded"
      | "multipart/form-data"
      | "text/plain"
  "tk": 
      | "subtitles"
      | "captions"
      | "descriptions"
      | "chapters"
      | "metadata"
  "pl": 
      | "none"
      | "metadata"
      | "auto"
  "sh": 
      | "circle"
      | "default"
      | "poly"
      | "rect"
  "xo": 
      | "anonymous"
      | "use-credentials"
  "target": 
      | "_self"
      | "_blank"
      | "_parent"
      | "_top"
  "sb": 
      | "allow-forms"
      | "allow-modals"
      | "allow-pointer-lock"
      | "allow-popups"
      | "allow-popups-to-escape-sandbox"
      | "allow-same-origin"
      | "allow-scripts"
      | "allow-top-navigation"
  "tristate": 
      | "true"
      | "false"
      | "mixed"
      | "undefined"
  "inputautocomplete": 
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
      | "work"
  "autocomplete": 
      | "inline"
      | "list"
      | "both"
      | "none"
  "current": 
      | "page"
      | "step"
      | "location"
      | "date"
      | "time"
      | "true"
      | "false"
  "dropeffect": 
      | "copy"
      | "move"
      | "link"
      | "execute"
      | "popup"
      | "none"
  "invalid": 
      | "grammar"
      | "false"
      | "spelling"
      | "true"
  "live": 
      | "off"
      | "polite"
      | "assertive"
  "orientation": 
      | "vertical"
      | "horizontal"
      | "undefined"
  "relevant": 
      | "additions"
      | "removals"
      | "text"
      | "all"
      | "additions text"
  "sort": 
      | "ascending"
      | "descending"
      | "none"
      | "other"
  "roles": 
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
      | "doc-toc"
  "metanames": 
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
      | "viewport"
  "haspopup": 
      | "false"
      | "true"
      | "menu"
      | "listbox"
      | "tree"
      | "grid"
      | "dialog"
  "decoding": 
      | "sync"
      | "async"
      | "auto"
  "loading": 
      | "eager"
      | "lazy"
  "referrerpolicy": 
      | "no-referrer"
      | "no-referrer-when-downgrade"
      | "origin"
      | "origin-when-cross-origin"
      | "same-origin"
      | "strict-origin"
      | "strict-origin-when-cross-origin"
      | "unsafe-url"
  "enterkeyhint": 
      | "enter"
      | "done"
      | "go"
      | "next"
      | "previous"
      | "search"
      | "send"
  "popover": 
      | "auto"
      | "hint"
      | "manual"
  "fetchpriority": 
      | "high"
      | "low"
      | "auto"
}
type Attributes = {
  "accesskey"?: ValueSets["default"];
  "autocapitalize"?: ValueSets["default"];
  "autocorrect"?: ValueSets["o"];
  "autofocus"?: ValueSets["default"];
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
  "inputmode"?: ValueSets["default"];
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
  "type"?: ValueSets["default"];
  "sizes"?: ValueSets["default"];
  "as"?: ValueSets["default"];
  "importance"?: ValueSets["default"];
  "integrity"?: ValueSets["default"];
  "referrerpolicy"?: ValueSets["default"];
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
  "wrap"?: ValueSets["default"];
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

type GlobalAttributeNames = 
  | "accesskey"
  | "autocapitalize"
  | "autocorrect"
  | "autofocus"
  | "class"
  | "contenteditable"
  | "contextmenu"
  | "dir"
  | "draggable"
  | "dropzone"
  | "enterkeyhint"
  | "exportparts"
  | "hidden"
  | "id"
  | "inert"
  | "inputmode"
  | "is"
  | "itemid"
  | "itemprop"
  | "itemref"
  | "itemscope"
  | "itemtype"
  | "lang"
  | "nonce"
  | "part"
  | "popover"
  | "role"
  | "slot"
  | "spellcheck"
  | "style"
  | "tabindex"
  | "title"
  | "translate"
  | "virtualkeyboardpolicy"
  | "onabort"
  | "onblur"
  | "oncanplay"
  | "oncanplaythrough"
  | "onchange"
  | "onclick"
  | "oncontextmenu"
  | "ondblclick"
  | "ondrag"
  | "ondragend"
  | "ondragenter"
  | "ondragleave"
  | "ondragover"
  | "ondragstart"
  | "ondrop"
  | "ondurationchange"
  | "onemptied"
  | "onended"
  | "onerror"
  | "onfocus"
  | "onformchange"
  | "onforminput"
  | "oninput"
  | "oninvalid"
  | "onkeydown"
  | "onkeypress"
  | "onkeyup"
  | "onload"
  | "onloadeddata"
  | "onloadedmetadata"
  | "onloadstart"
  | "onmousedown"
  | "onmousemove"
  | "onmouseout"
  | "onmouseover"
  | "onmouseup"
  | "onmousewheel"
  | "onmouseenter"
  | "onmouseleave"
  | "onpause"
  | "onplay"
  | "onplaying"
  | "onprogress"
  | "onratechange"
  | "onreset"
  | "onresize"
  | "onreadystatechange"
  | "onscroll"
  | "onseeked"
  | "onseeking"
  | "onselect"
  | "onshow"
  | "onstalled"
  | "onsubmit"
  | "onsuspend"
  | "ontimeupdate"
  | "onvolumechange"
  | "onwaiting"
  | "onpointercancel"
  | "onpointerdown"
  | "onpointerenter"
  | "onpointerleave"
  | "onpointerlockchange"
  | "onpointerlockerror"
  | "onpointermove"
  | "onpointerout"
  | "onpointerover"
  | "onpointerup"
  | "aria-activedescendant"
  | "aria-atomic"
  | "aria-autocomplete"
  | "aria-busy"
  | "aria-checked"
  | "aria-colcount"
  | "aria-colindex"
  | "aria-colspan"
  | "aria-controls"
  | "aria-current"
  | "aria-describedby"
  | "aria-disabled"
  | "aria-dropeffect"
  | "aria-errormessage"
  | "aria-expanded"
  | "aria-flowto"
  | "aria-grabbed"
  | "aria-haspopup"
  | "aria-hidden"
  | "aria-invalid"
  | "aria-label"
  | "aria-labelledby"
  | "aria-level"
  | "aria-live"
  | "aria-modal"
  | "aria-multiline"
  | "aria-multiselectable"
  | "aria-orientation"
  | "aria-owns"
  | "aria-placeholder"
  | "aria-posinset"
  | "aria-pressed"
  | "aria-readonly"
  | "aria-relevant"
  | "aria-required"
  | "aria-roledescription"
  | "aria-rowcount"
  | "aria-rowindex"
  | "aria-rowspan"
  | "aria-selected"
  | "aria-setsize"
  | "aria-sort"
  | "aria-valuemax"
  | "aria-valuemin"
  | "aria-valuenow"
  | "aria-valuetext"
  | "aria-details"
  | "aria-keyshortcuts"

type Html = El<
  | "manifest"
  | "version"
  | "xmlns"
>;
export const html: Html;

type Head = El<
  | "profile"
>;
export const head: Head;

type Title = El<
  never
>;
export const title: Title;

type Base = VoidEl<
  | "href"
  | "target"
>;
export const base: Base;

type Link = VoidEl<
  | "href"
  | "crossorigin"
  | "rel"
  | "media"
  | "hreflang"
  | "type"
  | "sizes"
  | "as"
  | "importance"
  | "importance"
  | "integrity"
  | "referrerpolicy"
  | "title"
>;
export const link: Link;

type Meta = VoidEl<
  | "name"
  | "http-equiv"
  | "content"
  | "charset"
  | "scheme"
>;
export const meta: Meta;

type Style = El<
  | "media"
  | "nonce"
  | "type"
  | "scoped"
  | "title"
>;
export const style: Style;

type Body = El<
  | "onafterprint"
  | "onbeforeprint"
  | "onbeforeunload"
  | "onhashchange"
  | "onlanguagechange"
  | "onmessage"
  | "onoffline"
  | "ononline"
  | "onpagehide"
  | "onpageshow"
  | "onpopstate"
  | "onstorage"
  | "onunload"
  | "alink"
  | "background"
  | "bgcolor"
  | "bottommargin"
  | "leftmargin"
  | "link"
  | "onblur"
  | "onerror"
  | "onfocus"
  | "onload"
  | "onredo"
  | "onresize"
  | "onundo"
  | "rightmargin"
  | "text"
  | "topmargin"
  | "vlink"
>;
export const body: Body;

type Article = El<
  never
>;
export const article: Article;

type Section = El<
  never
>;
export const section: Section;

type Nav = El<
  never
>;
export const nav: Nav;

type Aside = El<
  never
>;
export const aside: Aside;

type H1 = El<
  never
>;
export const h1: H1;

type H2 = El<
  never
>;
export const h2: H2;

type H3 = El<
  never
>;
export const h3: H3;

type H4 = El<
  never
>;
export const h4: H4;

type H5 = El<
  never
>;
export const h5: H5;

type H6 = El<
  never
>;
export const h6: H6;

type Header = El<
  never
>;
export const header: Header;

type Footer = El<
  never
>;
export const footer: Footer;

type Address = El<
  never
>;
export const address: Address;

type P = El<
  never
>;
export const p: P;

type Hr = VoidEl<
  | "align"
  | "color"
  | "noshade"
  | "size"
  | "width"
>;
export const hr: Hr;

type Pre = El<
  | "cols"
  | "width"
  | "wrap"
>;
export const pre: Pre;

type Blockquote = El<
  | "cite"
>;
export const blockquote: Blockquote;

type Ol = El<
  | "reversed"
  | "start"
  | "type"
  | "compact"
>;
export const ol: Ol;

type Ul = El<
  | "compact"
>;
export const ul: Ul;

type Li = El<
  | "value"
  | "type"
>;
export const li: Li;

type Dl = El<
  never
>;
export const dl: Dl;

type Dt = El<
  never
>;
export const dt: Dt;

type Dd = El<
  | "nowrap"
>;
export const dd: Dd;

type Figure = El<
  never
>;
export const figure: Figure;

type Figcaption = El<
  never
>;
export const figcaption: Figcaption;

type Main = El<
  never
>;
export const main: Main;

type Div = El<
  never
>;
export const div: Div;

type A = El<
  | "href"
  | "target"
  | "download"
  | "ping"
  | "rel"
  | "hreflang"
  | "type"
  | "referrerpolicy"
>;
export const a: A;

type Em = El<
  never
>;
export const em: Em;

type Strong = El<
  never
>;
export const strong: Strong;

type Small = El<
  never
>;
export const small: Small;

type S = El<
  never
>;
export const s: S;

type Cite = El<
  never
>;
export const cite: Cite;

type Q = El<
  | "cite"
>;
export const q: Q;

type Dfn = El<
  never
>;
export const dfn: Dfn;

type Abbr = El<
  never
>;
export const abbr: Abbr;

type Ruby = El<
  never
>;
export const ruby: Ruby;

type Rb = El<
  never
>;
export const rb: Rb;

type Rt = El<
  never
>;
export const rt: Rt;

type Rp = El<
  never
>;
export const rp: Rp;

type Time = El<
  | "datetime"
>;
export const time: Time;

type Code = El<
  never
>;
export const code: Code;

type Var = El<
  never
>;
export const var_: Var;

type Samp = El<
  never
>;
export const samp: Samp;

type Kbd = El<
  never
>;
export const kbd: Kbd;

type Sub = El<
  never
>;
export const sub: Sub;

type Sup = El<
  never
>;
export const sup: Sup;

type I = El<
  never
>;
export const i: I;

type B = El<
  never
>;
export const b: B;

type U = El<
  never
>;
export const u: U;

type Mark = El<
  never
>;
export const mark: Mark;

type Bdi = El<
  never
>;
export const bdi: Bdi;

type Bdo = El<
  | "dir"
>;
export const bdo: Bdo;

type Span = El<
  never
>;
export const span: Span;

type Br = VoidEl<
  | "clear"
>;
export const br: Br;

type Wbr = VoidEl<
  never
>;
export const wbr: Wbr;

type Ins = El<
  | "cite"
  | "datetime"
>;
export const ins: Ins;

type Del = El<
  | "cite"
  | "datetime"
>;
export const del: Del;

type Picture = El<
  never
>;
export const picture: Picture;

type Img = VoidEl<
  | "alt"
  | "src"
  | "srcset"
  | "crossorigin"
  | "usemap"
  | "ismap"
  | "width"
  | "height"
  | "decoding"
  | "loading"
  | "fetchpriority"
  | "referrerpolicy"
  | "sizes"
  | "importance"
  | "importance"
  | "intrinsicsize"
>;
export const img: Img;

type Iframe = El<
  | "src"
  | "srcdoc"
  | "name"
  | "sandbox"
  | "seamless"
  | "allowfullscreen"
  | "width"
  | "height"
  | "allow"
  | "allowpaymentrequest"
  | "allowpaymentrequest"
  | "csp"
  | "importance"
  | "referrerpolicy"
>;
export const iframe: Iframe;

type Embed = VoidEl<
  | "src"
  | "type"
  | "width"
  | "height"
>;
export const embed: Embed;

type Object = El<
  | "data"
  | "type"
  | "typemustmatch"
  | "name"
  | "usemap"
  | "form"
  | "width"
  | "height"
  | "archive"
  | "border"
  | "classid"
  | "codebase"
  | "codetype"
  | "declare"
  | "standby"
  | "tabindex"
>;
export const object: Object;

type Param = VoidEl<
  | "name"
  | "value"
  | "type"
  | "valuetype"
>;
export const param: Param;

type Video = El<
  | "src"
  | "crossorigin"
  | "poster"
  | "preload"
  | "autoplay"
  | "mediagroup"
  | "loop"
  | "muted"
  | "controls"
  | "width"
  | "height"
>;
export const video: Video;

type Audio = El<
  | "src"
  | "crossorigin"
  | "preload"
  | "autoplay"
  | "mediagroup"
  | "loop"
  | "muted"
  | "controls"
>;
export const audio: Audio;

type Source = VoidEl<
  | "src"
  | "type"
  | "sizes"
  | "srcset"
  | "media"
>;
export const source: Source;

type Track = VoidEl<
  | "default"
  | "kind"
  | "label"
  | "src"
  | "srclang"
>;
export const track: Track;

type Map = El<
  | "name"
>;
export const map: Map;

type Area = VoidEl<
  | "alt"
  | "coords"
  | "shape"
  | "href"
  | "target"
  | "download"
  | "ping"
  | "rel"
  | "hreflang"
  | "type"
  | "accesskey"
>;
export const area: Area;

type Table = El<
  | "border"
  | "align"
>;
export const table: Table;

type Caption = El<
  | "align"
>;
export const caption: Caption;

type Colgroup = El<
  | "span"
  | "align"
>;
export const colgroup: Colgroup;

type Col = VoidEl<
  | "span"
  | "align"
>;
export const col: Col;

type Tbody = El<
  | "align"
>;
export const tbody: Tbody;

type Thead = El<
  | "align"
>;
export const thead: Thead;

type Tfoot = El<
  | "align"
>;
export const tfoot: Tfoot;

type Tr = El<
  | "align"
>;
export const tr: Tr;

type Td = El<
  | "colspan"
  | "rowspan"
  | "headers"
  | "abbr"
  | "align"
  | "axis"
  | "bgcolor"
>;
export const td: Td;

type Th = El<
  | "colspan"
  | "rowspan"
  | "headers"
  | "scope"
  | "sorted"
  | "abbr"
  | "align"
  | "axis"
  | "bgcolor"
>;
export const th: Th;

type Form = El<
  | "accept-charset"
  | "action"
  | "autocomplete"
  | "enctype"
  | "method"
  | "name"
  | "novalidate"
  | "target"
  | "accept"
  | "autocapitalize"
>;
export const form: Form;

type Label = El<
  | "form"
  | "for"
>;
export const label: Label;

type Input = VoidEl<
  | "accept"
  | "alt"
  | "autocomplete"
  | "autofocus"
  | "checked"
  | "dirname"
  | "disabled"
  | "form"
  | "formaction"
  | "formenctype"
  | "formmethod"
  | "formnovalidate"
  | "formtarget"
  | "height"
  | "inputmode"
  | "list"
  | "max"
  | "maxlength"
  | "min"
  | "minlength"
  | "multiple"
  | "name"
  | "pattern"
  | "placeholder"
  | "popovertarget"
  | "popovertargetaction"
  | "readonly"
  | "required"
  | "size"
  | "src"
  | "step"
  | "type"
  | "value"
  | "width"
>;
export const input: Input;

type Button = El<
  | "autofocus"
  | "disabled"
  | "form"
  | "formaction"
  | "formenctype"
  | "formmethod"
  | "formnovalidate"
  | "formtarget"
  | "name"
  | "popovertarget"
  | "popovertargetaction"
  | "type"
  | "value"
  | "autocomplete"
>;
export const button: Button;

type Select = El<
  | "autocomplete"
  | "autofocus"
  | "disabled"
  | "form"
  | "multiple"
  | "name"
  | "required"
  | "size"
>;
export const select: Select;

type Datalist = El<
  never
>;
export const datalist: Datalist;

type Optgroup = El<
  | "disabled"
  | "label"
>;
export const optgroup: Optgroup;

type Option = El<
  | "disabled"
  | "label"
  | "selected"
  | "value"
>;
export const option: Option;

type Textarea = El<
  | "autocomplete"
  | "autofocus"
  | "cols"
  | "dirname"
  | "disabled"
  | "form"
  | "inputmode"
  | "maxlength"
  | "minlength"
  | "name"
  | "placeholder"
  | "readonly"
  | "required"
  | "rows"
  | "wrap"
  | "autocapitalize"
  | "spellcheck"
>;
export const textarea: Textarea;

type Output = El<
  | "for"
  | "form"
  | "name"
>;
export const output: Output;

type Progress = El<
  | "value"
  | "max"
>;
export const progress: Progress;

type Meter = El<
  | "value"
  | "min"
  | "max"
  | "low"
  | "high"
  | "optimum"
  | "form"
>;
export const meter: Meter;

type Fieldset = El<
  | "disabled"
  | "form"
  | "name"
>;
export const fieldset: Fieldset;

type Legend = El<
  never
>;
export const legend: Legend;

type Details = El<
  | "open"
>;
export const details: Details;

type Summary = El<
  never
>;
export const summary: Summary;

type Dialog = El<
  | "open"
>;
export const dialog: Dialog;

type Script = El<
  | "src"
  | "type"
  | "charset"
  | "async"
  | "defer"
  | "crossorigin"
  | "nonce"
  | "integrity"
  | "nomodule"
  | "referrerpolicy"
  | "text"
>;
export const script: Script;

type Noscript = El<
  never
>;
export const noscript: Noscript;

type Template = El<
  never
>;
export const template: Template;

type Canvas = El<
  | "width"
  | "height"
  | "moz-opaque"
>;
export const canvas: Canvas;

type Slot = El<
  | "name"
>;
export const slot: Slot;

type Data = El<
  | "value"
>;
export const data: Data;

type Hgroup = El<
  never
>;
export const hgroup: Hgroup;

type Menu = El<
  never
>;
export const menu: Menu;

type Search = El<
  never
>;
export const search: Search;

type Fencedframe = El<
  | "allow"
  | "height"
  | "width"
>;
export const fencedframe: Fencedframe;

type Selectedcontent = El<
  never
>;
export const selectedcontent: Selectedcontent;
