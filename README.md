# tiny-html

**tiny-html** is a tiny HTML DSL and renderer.

## Installation

```bash
npm install tiny-html
```

Or include `html.js` directly in your project.

## Usage

Import the element helpers and renderer:

```js
import { a, button, div, head, html, meta, p, render, unsafeHtml } from "tiny-html";
```

### Basic Element Creation

```js
const element = p({ data: { hello: "world" } }, ["Hello, world!"]);
console.log(render(element)); 
// <p data-hello="world">Hello, world!</p>
```

### No Children

```js
const element = p({ data: { hello: "world" } }, []);
console.log(render(element));
// <p data-hello="world"></p>
```

### Void Elements

```js
const element = meta({ charset: "utf-8" });
console.log(render(element));
// <meta charset="utf-8">
```

### Unsafe HTML Injection

```js
const element = p({}, [unsafeHtml("<strong>Hello, world!</strong>")]);
console.log(render(element));
// <p><strong>Hello, world!</strong></p>
```

### Conditional Children

```js
const element = p({}, [true && "Hello, world!", false && "Goodbye, world!"]);
console.log(render(element));
// <p>Hello, world!</p>
```

### Ignoring Undefined Children

```js
const element = p({}, [undefined, "Hello, world!"]);
console.log(render(element));
// <p>Hello, world!</p>
```

### Nesting Elements

```js
const element = p({}, [div({ class: "container" }, [button({}, ["Hello, world!"])])]);
console.log(render(element));
// <p><div class="container"><button>Hello, world!</button></div></p>
```

### Attribute Types

```js
p({ data: { number: 42 } }, ["Hello, world!"]);  // <p data-number="42">Hello, world!</p>
p({ data: { boolean: true } }, ["Hello, world!"]); // <p data-boolean>Hello, world!</p>
p({ data: { boolean: false } }, ["Hello, world!"]); // <p>Hello, world!</p>
```

### URLs and Styles

```js
a({ href: "https://example.com/" }, ["Hello, world!"]);
// <a href="https://example.com/">Hello, world!</a>

p({ style: "color: red;" }, ["Hello, world!"]);
// <p style="color: red;">Hello, world!</p>
```

### Unknown/Custom Attributes

```js
meta({
  charset: "utf-8",
  "og:title": "my title"
});
// <meta charset="utf-8" og:title="my title">
```

### Rendering `<html>` with Doctype

```js
const element = html({}, ["Hello, world!"]);
console.log(render(element));
// <!DOCTYPE html><html>Hello, world!</html>
```

## Security: XSS Protection

All content and attribute values are safely escaped:

```js
p({}, ["<script>console.log('Hello World!')</script>"]);
// <p>&lt;script&gt;console.log(&#x27;Hello World!&#x27;)&lt;/script&gt;</p>

head({}, [
  meta({ content: "foo" }),
  // @ts-ignore
  meta({ "><script>console.log('orld')</script><meta": "og:type" }),
  meta({ content: "bar" }),
]);
// <head><meta content="foo"><meta &gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta="og:type"><meta content="bar"></head>
```

All dangerous characters are escaped:

```js
p({}, [`"&'<>\``]);
// <p>&quot;&amp;&#x27;&lt;&gt;&#x60;</p>
```

## LICENCE

```
Zero-Clause BSD
=============

Permission to use, copy, modify, and/or distribute this software for
any purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL
WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES
OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLEs
FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY
DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN
AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT
OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```
