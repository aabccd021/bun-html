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
  // biome-ignore lint/complexity/useSimplifiedLogicExpression: <explanation>
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
