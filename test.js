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
  const element = p({ "data-hello": "world" }, ["Hello, world!"]);
  render(element) === '<p data-hello="world">Hello, world!</p>';
}

{
  console.info("no child");
  const element = p({ "data-hello": "world" }, []);
  render(element) === '<p data-hello="world"></p>';
}

{
  console.info("void element");
  const element = meta({ charset: "utf-8" });
  render(element) === '<meta charset="utf-8">';
}

{
  console.info("unsafe html");
  const element = p({}, [unsafeHtml("<strong>Hello, world!</strong>")]);
  render(element) === "<p><strong>Hello, world!</strong></p>";
}

{
  console.info("conditional");
  const element = p({}, [true && "Hello, world!", false && "Goodbye, world!"]);
  render(element) === "<p>Hello, world!</p>";
}

{
  console.info("undefined");
  const element = p({}, [undefined, "Hello, world!"]);
  render(element) === "<p>Hello, world!</p>";
}

{
  console.info("deeply nested");
  const element = p({}, [
    div({ class: "container" }, [button({}, ["Hello, world!"])]),
  ]);
  render(element) ===
    '<p><div class="container"><button>Hello, world!</button></div></p>';
}

{
  console.info("number attribute");
  const element = p({ "data-number": 42 }, ["Hello, world!"]);
  render(element) === '<p data-number="42">Hello, world!</p>';
}

{
  console.info("true attribute");
  const element = p({ "data-boolean": true }, ["Hello, world!"]);
  render(element) === "<p data-boolean>Hello, world!</p>";
}

{
  console.info("false attribute");
  const element = p({ "data-boolean": false }, ["Hello, world!"]);
  render(element) === "<p>Hello, world!</p>";
}

{
  console.info("URL attribute");
  const element = a({ href: new URL("https://example.com") }, [
    "Hello, world!",
  ]);
  render(element) === '<a href="https://example.com/">Hello, world!</a>';
}

{
  console.info("style attribute");
  const element = p({ style: "color: red;" }, ["Hello, world!"]);
  render(element) === '<p style="color: red;">Hello, world!</p>';
}

{
  console.info("unsupported attribute");
  const element = p({ "data-boolean": { foo: "invalid" } }, ["Hello, world!"]);
  // (() render(element)).toThrow("Unsupported attribute: data-boolean";
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
  render(element) === "<!DOCTYPE html><html>Hello, world!</html>";
}

{
  console.info("unknown attributes");
  const element = meta({
    charset: "utf-8",
    "og:title": "my title",
  });
  render(element) === '<meta charset="utf-8" og:title="my title">';
}

{
  console.info("xss on content");
  const element = p({}, ["<script>console.log('Hello World!')</script>"]);
  render(element) ===
    "<p>&lt;script&gt;console.log(&#x27;Hello World!&#x27;)&lt;/script&gt;</p>";
}

{
  console.info("xss on attribute key");
  const element = head({}, [
    meta({ content: "foo" }),
    meta({ "><script>console.log('orld')</script><meta": "og:type" }),
    meta({ content: "bar" }),
  ]);
  render(element) ===
    '<head><meta content=\"foo\"><meta &gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta=\"og:type\"><meta content=\"bar\"></head>';
}

{
  console.info("xss on attribute value");
  const element = head({}, [
    meta({ content: "foo" }),
    meta({ content: "><script>console.log('orld')</script><meta" }),
    meta({ content: "bar" }),
  ]);
  render(element) ===
    '<head><meta content=\"foo\"><meta content=\"&gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta\"><meta content=\"bar\"></head>';
}

{
  console.info("all character escaped");
  const element = p({}, [`"&'<>\``]);
  render(element) === "<p>&quot;&amp;&#x27;&lt;&gt;&#x60;</p>";
}
