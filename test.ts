import {
  a,
  button,
  div,
  head,
  html,
  meta,
  p,
  render,
  unsafeHtml,
} from "./html.ts";

{
  console.info("simple element");
  const element = p({ data: { hello: "world" } }, ["Hello, world!"]);
  if (render(element) !== '<p data-hello="world">Hello, world!</p>')
    throw new Error();
}

{
  console.info("no child");
  const element = p({ data: { hello: "world" } }, []);
  if (render(element) !== '<p data-hello="world"></p>') throw new Error();
}

{
  console.info("void element");
  const element = meta({ charset: "utf-8" });
  if (render(element) !== '<meta charset="utf-8">') throw new Error();
}

{
  console.info("unsafe html");
  const element = p({}, [unsafeHtml("<strong>Hello, world!</strong>")]);
  if (render(element) !== "<p><strong>Hello, world!</strong></p>")
    throw new Error();
}

{
  console.info("conditional");
  const element = p({}, [true && "Hello, world!", false && "Goodbye, world!"]);
  if (render(element) !== "<p>Hello, world!</p>") throw new Error();
}

{
  console.info("undefined");
  const element = p({}, [undefined, "Hello, world!"]);
  if (render(element) !== "<p>Hello, world!</p>") throw new Error();
}

{
  console.info("deeply nested");
  const element = p({}, [
    div({ class: "container" }, [button({}, ["Hello, world!"])]),
  ]);
  if (
    render(element) !==
    '<p><div class="container"><button>Hello, world!</button></div></p>'
  )
    throw new Error();
}

{
  console.info("number attribute");
  const element = p({ data: { number: 42 } }, ["Hello, world!"]);
  if (render(element) !== '<p data-number="42">Hello, world!</p>')
    throw new Error();
}

{
  console.info("true attribute");
  const element = p({ data: { boolean: true } }, ["Hello, world!"]);
  if (render(element) !== "<p data-boolean>Hello, world!</p>")
    throw new Error();
}

{
  console.info("false attribute");
  const element = p({ data: { boolean: false } }, ["Hello, world!"]);
  if (render(element) !== "<p>Hello, world!</p>") throw new Error();
}

{
  console.info("URL attribute");
  // @ts-ignore
  const element = a({ href: new URL("https://example.com") }, [
    "Hello, world!",
  ]);
  if (render(element) !== '<a href="https://example.com/">Hello, world!</a>')
    throw new Error();
}

{
  console.info("style attribute");
  const element = p({ style: "color: red;" }, ["Hello, world!"]);
  if (render(element) !== '<p style="color: red;">Hello, world!</p>')
    throw new Error();
}

{
  console.info("unsupported attribute");
  // @ts-ignore
  const element = p({ "data-boolean": { foo: "invalid" } }, ["Hello, world!"]);
  try {
    render(element);
  } catch (e) {
    if (
      !Error.isError(e) ||
      e.message !== "Unsupported attribute: data-boolean"
    ) {
      throw new Error();
    }
  }
}

{
  console.info("html doctype shown");
  const element = html({}, ["Hello, world!"]);
  if (render(element) !== "<!DOCTYPE html><html>Hello, world!</html>")
    throw new Error();
}

{
  console.info("unknown attributes");
  const element = meta({
    charset: "utf-8",
    // @ts-ignore
    "og:title": "my title",
  });
  if (render(element) !== '<meta charset="utf-8" og:title="my title">')
    throw new Error();
}

{
  console.info("xss on content");
  const element = p({}, ["<script>console.log('Hello World!')</script>"]);
  if (
    render(element) !==
    "<p>&lt;script&gt;console.log(&#x27;Hello World!&#x27;)&lt;/script&gt;</p>"
  )
    throw new Error();
}

{
  console.info("xss on attribute key");
  const element = head({}, [
    meta({ content: "foo" }),
    // @ts-ignore
    meta({ "><script>console.log('orld')</script><meta": "og:type" }),
    meta({ content: "bar" }),
  ]);
  if (
    render(element) !==
    '<head><meta content=\"foo\"><meta &gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta=\"og:type\"><meta content=\"bar\"></head>'
  )
    throw new Error();
}

{
  console.info("xss on attribute value");
  const element = head({}, [
    meta({ content: "foo" }),
    meta({ content: "><script>console.log('orld')</script><meta" }),
    meta({ content: "bar" }),
  ]);
  if (
    render(element) !==
    '<head><meta content=\"foo\"><meta content=\"&gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta\"><meta content=\"bar\"></head>'
  )
    throw new Error();
}

{
  console.info("xss on data attribute key");
  const element = p({}, [
    meta({ data: { "><script>console.log('orld')</script><meta": "bar" } }),
  ]);
  if (
    render(element) !==
    '<p><meta data-&gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta="bar"></p>'
  )
    throw new Error();
}

{
  console.info("xss on data attribute value");
  const element = p({}, [
    meta({ data: { foo: "><script>console.log('orld')</script><meta" } }),
  ]);
  if (
    render(element) !==
    '<p><meta data-foo="&gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta"></p>'
  )
    throw new Error();
}

{
  console.info("all character escaped");
  const element = p({}, [`"&'<>\``]);
  if (render(element) !== "<p>&quot;&amp;&#x27;&lt;&gt;&#x60;</p>")
    throw new Error();
}
