# bun-html

**bun-html** is a tiny HTML DSL and renderer.

## Installation

```sh
# nodejs + npm
npm install bun-html

# bun + git
bun install git@github.com:aabccd021/bun-html.git
```

## Basic Usage

```js
import { div, input, meta, p, render, unsafeHtml } from "bun-html";

const showSidebar = false;
const showHeader = true;

const element = html({}, [
  meta({ "data-note": "No child" }),
  p({}, [
    p({}, ["Grand child"])
  ]),
  meta({ "data-xss": `"&'<>\`` }),
  input({ type: "checkbox", checked: true }),
  input({ type: "checkbox", checked: false }),
  meta({ "data-defined": "defined", "data-undefined": undefined }),
  unsafeHtml("<strong>this is unsafe</strong>"),
  undefined,
  showHeader && div({}, ["Header"]),
  showSidebar && div({}, ["Sidebar"]),
]);

console.log(render(element));
```

Above code will output:

```html
<!DOCTYPE html>
<html>
  <meta data-note="No child">
  <p>
    <p>Grand child</p>
  </p>
  <meta data-xss="&quot;&amp;&#x27;&lt;&gt;&#x60;">
  <input type="checkbox" checked>
  <input type="checkbox">
  <meta data-defined="defined">
  <strong>this is unsafe</strong>
  <div>Header</div>
</html>
```

## Type Safety

Valid attribute names and values are enforced by TypeScript, generated from 
[vscode-custom-data](https://raw.githubusercontent.com/microsoft/vscode-custom-data/refs/heads/main/web-data/data/browsers.html-data.json)
.


```ts
ol({ type: "1" }, []);
input({ type: "radio" });
source({ type: "foo" });

// @ts-expect-error
input({ type: "1" });
// @ts-expect-error
ol({ type: "foo" }, []);
// @ts-expect-error
p({ foo: "bar" }, []);
```

## LICENCE

```
Zero-Clause BSD
=============

Permission to use, copy, modify, and/or distribute this software for
any purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL
WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLEs
FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY
DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN
AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT
OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```
