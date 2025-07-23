import { expect, test } from "bun:test";
import { a, button, div, html, meta, p, render, unsafeHtml } from "./index.ts";

test("simple element", () => {
  const element = p({ "data-hello": "world" }, ["Hello, world!"]);
  expect(render(element)).toBe('<p data-hello="world">Hello, world!</p>');
});

test("void element", () => {
  const element = meta({ charset: "utf-8" });
  expect(render(element)).toBe('<meta charset="utf-8">');
});

test("unsafe html", () => {
  const element = p({}, [unsafeHtml("<strong>Hello, world!</strong>")]);
  expect(render(element)).toBe("<p><strong>Hello, world!</strong></p>");
});

test("escaped html", () => {
  const element = p({}, ["<script>alert('Hello World!')</script>"]);
  expect(render(element)).toBe(
    "<p>&lt;script&gt;alert(&#x27;Hello World!&#x27;)&lt;/script&gt;</p>",
  );
});

test("conditional", () => {
  const element = p({}, [true && "Hello, world!", false && "Goodbye, world!"]);
  expect(render(element)).toBe("<p>Hello, world!</p>");
});

test("undefined", () => {
  const element = p({}, [undefined, "Hello, world!"]);
  expect(render(element)).toBe("<p>Hello, world!</p>");
});

test("deeply nested", () => {
  const element = p({}, [div({}, [button({}, ["Hello, world!"])])]);
  expect(render(element)).toBe(
    "<p><div><button>Hello, world!</button></div></p>",
  );
});

test("number attribute", () => {
  const element = p({ "data-number": 42 }, ["Hello, world!"]);
  expect(render(element)).toBe('<p data-number="42">Hello, world!</p>');
});

test("true attribute", () => {
  const element = p({ "data-boolean": true }, ["Hello, world!"]);
  expect(render(element)).toBe("<p data-boolean>Hello, world!</p>");
});

test("false attribute", () => {
  const element = p({ "data-boolean": false }, ["Hello, world!"]);
  expect(render(element)).toBe("<p>Hello, world!</p>");
});

test("URL attribute", () => {
  const element = a({ href: new URL("https://example.com") }, [
    "Hello, world!",
  ]);
  expect(render(element)).toBe(
    '<a href="https://example.com/">Hello, world!</a>',
  );
});

test("style attribute", () => {
  const element = p({ style: "color: red;" }, ["Hello, world!"]);
  expect(render(element)).toBe('<p style="color: red;">Hello, world!</p>');
});

test("unsupported attribute", () => {
  // @ts-expect-error
  const element = p({ "data-boolean": { foo: "invalid" } }, ["Hello, world!"]);
  expect(() => render(element)).toThrow("Unsupported attribute: data-boolean");
});

test("html doctype shown", () => {
  const element = html({}, ["Hello, world!"]);
  expect(render(element)).toBe("<!DOCTYPE html><html>Hello, world!</html>");
});

test("extra attributes", () => {
  const element = meta({
    charset: "utf-8",
    _extra: [["og:title", "my title"]],
  });
  expect(render(element)).toBe('<meta charset="utf-8" og:title="my title">');
});

test("unsafe attribute key is handled properly", () => {
  const element = meta({
    charset: "utf-8",
    _extra: [['onerror="alert(1)', "oops"]],
  });
  expect(render(element)).toBe(
    '<meta charset=\"utf-8\" onerror=&quot;alert(1)=\"oops\">',
  );
});

test("script tag is escaped in children", () => {
  const element = div({}, ['<script>alert("xss")</script>']);
  expect(render(element)).toBe(
    "<div>&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;</div>",
  );
});

test("event handler attribute in _extra is escaped", () => {
  const element = button(
    {
      _extra: [["onmouseover", 'alert("x")']],
    },
    ["Hover"],
  );
  expect(render(element)).toBe(
    '<button onmouseover="alert(&quot;x&quot;)">Hover</button>',
  );
});

test("disallowed tag in unsafeHtml is rendered as-is", () => {
  // unsafeHtml disables escaping, so XSS is possible if user input is passed
  const element = div({}, [unsafeHtml("<img src=x onerror=\"alert('xss')\">")]);
  expect(render(element)).toBe(
    "<div><img src=x onerror=\"alert('xss')\"></div>",
  );
});

test("object prototype pollution in attribute keys is handled", () => {
  // @ts-expect-error
  const element = p({ __proto__: "polluted" }, ["Test"]);
  // Should ignore prototype pollution keys and not output __proto__
  expect(render(element)).toBe("<p>Test</p>");
});

test("nested dangerous script in unsafeHtml", () => {
  const element = div({}, [
    unsafeHtml('<svg><script>alert("xss")</script></svg>'),
  ]);
  expect(render(element)).toBe(
    '<div><svg><script>alert("xss")</script></svg></div>',
  );
});

test("malformed attribute names in _extra are escaped", () => {
  const element = meta({
    charset: "utf-8",
    _extra: [['"><img src=x onerror=alert(1)>', "oops"]],
  });
  expect(render(element)).toContain(
    '&quot;&gt;&lt;img src=x onerror=alert(1)&gt;="oops"',
  );
});

test("attribute value with angle brackets is escaped", () => {
  const element = meta({
    name: "viewport",
    content: 'width=device-width, initial-scale=1.0"><script>alert(1)</script>',
  });
  expect(render(element)).toBe(
    '<meta name="viewport" content="width=device-width, initial-scale=1.0&quot;&gt;&lt;script&gt;alert(1)&lt;/script&gt;">',
  );
});

test("child array with null, false, and empty string", () => {
  const element = div({}, [false, "", "x"]);
  expect(render(element)).toBe("<div>x</div>");
});
