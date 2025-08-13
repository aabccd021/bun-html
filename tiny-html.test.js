import { a, button, div, head, html, meta, p, render, unsafeHtml, var_ } from "./tiny-html.js";

{
  console.log("simple element with attribute and text");
  const element = p({ "data-hello": "world" }, ["Hello, world!"]);
  if (render(element) !== '<p data-hello="world">Hello, world!</p>') throw new Error();
}

{
  console.log("<var> tag");
  const element = var_({}, ["Hello, world!"]);
  if (render(element) !== "<var>Hello, world!</var>") throw new Error();
}

{
  console.log("element with no children");
  const element = p({ "data-hello": "world" }, []);
  if (render(element) !== '<p data-hello="world"></p>') throw new Error();
}

{
  console.log("void element (meta)");
  const element = meta({ charset: "utf-8" });
  if (render(element) !== '<meta charset="utf-8">') throw new Error();
}

{
  console.log("unsafe HTML content");
  const element = p({}, [unsafeHtml("<strong>Hello, world!</strong>")]);
  if (render(element) !== "<p><strong>Hello, world!</strong></p>") throw new Error();
}

{
  console.log("conditional child rendering");
  const element = p({}, [true && "Hello, world!", false && "Goodbye, world!"]);
  if (render(element) !== "<p>Hello, world!</p>") throw new Error();
}

{
  console.log("ignores undefined children");
  const element = p({}, [undefined, "Hello, world!"]);
  if (render(element) !== "<p>Hello, world!</p>") throw new Error();
}

{
  console.log("deeply nested elements");
  const element = p({}, [div({ class: "container" }, [button({}, ["Hello, world!"])])]);
  if (render(element) !== '<p><div class="container"><button>Hello, world!</button></div></p>')
    throw new Error();
}

{
  console.log("number attribute");
  const element = p({ "data-number": 42 }, ["Hello, world!"]);
  if (render(element) !== '<p data-number="42">Hello, world!</p>') throw new Error();
}

{
  console.log("true attribute (boolean attribute)");
  const element = p({ "data-boolean": true }, ["Hello, world!"]);
  if (render(element) !== "<p data-boolean>Hello, world!</p>") throw new Error();
}

{
  console.log("false attribute is omitted");
  const element = p({ "data-boolean": false }, ["Hello, world!"]);
  if (render(element) !== "<p>Hello, world!</p>") throw new Error();
}

{
  console.log("anchor with href attribute");
  const element = a({ href: "https://example.com/" }, ["Hello, world!"]);
  if (render(element) !== '<a href="https://example.com/">Hello, world!</a>') throw new Error();
}

{
  console.log("style attribute");
  const element = p({ style: "color: red;" }, ["Hello, world!"]);
  if (render(element) !== '<p style="color: red;">Hello, world!</p>') throw new Error();
}

{
  console.log("html doctype for <html> element");
  const element = html({}, ["Hello, world!"]);
  if (render(element) !== "<!DOCTYPE html><html>Hello, world!</html>") throw new Error();
}

{
  console.log("xss prevention in child content");
  const element = p({}, ["<script>console.log('Hello World!')</script>"]);
  if (
    render(element) !== "<p>&lt;script&gt;console.log(&#x27;Hello World!&#x27;)&lt;/script&gt;</p>"
  )
    throw new Error();
}

{
  console.log("xss prevention in attribute key");
  const element = head({}, [
    meta({ content: "foo" }),
    // XSS should be prevented even if someone uses this library without type checking
    // @ts-ignore
    meta({ "><script>console.log('orld')</script><meta": "og:type" }),
    meta({ content: "bar" }),
  ]);
  if (
    render(element) !==
    '<head><meta content="foo"><meta &gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta="og:type"><meta content="bar"></head>'
  )
    throw new Error();
}

{
  console.log("xss prevention in attribute value");
  const element = head({}, [
    meta({ content: "foo" }),
    meta({ content: "><script>console.log('orld')</script><meta" }),
    meta({ content: "bar" }),
  ]);
  if (
    render(element) !==
    '<head><meta content="foo"><meta content="&gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta"><meta content="bar"></head>'
  )
    throw new Error();
}

{
  console.log("xss prevention in data attribute key");
  const element = p({}, [meta({ "data-><script>console.log('orld')</script><meta": "bar" })]);
  if (
    render(element) !==
    '<p><meta data-&gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta="bar"></p>'
  )
    throw new Error();
}

{
  console.log("xss prevention in data attribute value");
  const element = p({}, [meta({ "data-foo": "><script>console.log('orld')</script><meta" })]);
  if (
    render(element) !==
    '<p><meta data-foo="&gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta"></p>'
  )
    throw new Error();
}

{
  console.log("escapes all special characters in content");
  const element = p({}, [`"&'<>\``]);
  if (render(element) !== "<p>&quot;&amp;&#x27;&lt;&gt;&#x60;</p>") throw new Error();
}
