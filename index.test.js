import { expect, test } from "bun:test";
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
} from "./index.ts";

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

test("xss on content", () => {
  const element = p({}, ["<script>console.log('Hello World!')</script>"]);
  expect(render(element)).toBe(
    "<p>&lt;script&gt;console.log(&#x27;Hello World!&#x27;)&lt;/script&gt;</p>",
  );
});

test("xss on attribute key", () => {
  const element = head({}, [
    meta({ content: "foo" }),
    meta({ "><script>console.log('orld')</script><meta": "og:type" }),
    meta({ content: "bar" }),
  ]);
  expect(render(element)).toBe(
    '<head><meta content=\"foo\"><meta &gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta=\"og:type\"><meta content=\"bar\"></head>',
  );
});

test("xss on extra attribute key", () => {
  const element = head({}, [
    meta({ content: "foo" }),
    meta({
      _extra: [["><script>console.log('orld')</script><meta", "og:type"]],
    }),
    meta({ content: "bar" }),
  ]);
  expect(render(element)).toBe(
    '<head><meta content=\"foo\"><meta &gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta=\"og:type\"><meta content=\"bar\"></head>',
  );
});

test("xss on attribute value", () => {
  const element = head({}, [
    meta({ content: "foo" }),
    meta({ content: "><script>console.log('orld')</script><meta" }),
    meta({ content: "bar" }),
  ]);
  expect(render(element)).toBe(
    '<head><meta content=\"foo\"><meta content=\"&gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta\"><meta content=\"bar\"></head>',
  );
});

test("xss on extra attribute value", () => {
  const element = head({}, [
    meta({ content: "foo" }),
    meta({
      _extra: [["og:type", "><script>console.log('orld')</script><meta"]],
    }),
    meta({ content: "bar" }),
  ]);
  expect(render(element)).toBe(
    '<head><meta content=\"foo\"><meta og:type=\"&gt;&lt;script&gt;console.log(&#x27;orld&#x27;)&lt;/script&gt;&lt;meta\"><meta content=\"bar\"></head>',
  );
});
