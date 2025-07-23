import { expect, test } from "bun:test";
import {
  a,
  button,
  div,
  html,
  img,
  meta,
  p,
  render,
  script,
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
  const element = div({}, [unsafeHtml("<img src=x onerror=\"alert('xss')\">")]);
  expect(render(element)).toBe(
    "<div><img src=x onerror=\"alert('xss')\"></div>",
  );
});

test("object prototype pollution in attribute keys is handled", () => {
  const element = p({ __proto__: "polluted" }, ["Test"]);
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

test("CRLF injection in attribute values", () => {
  const element = meta({
    name: "description",
    content: "Some content\r\nSet-Cookie: malicious=value",
  });
  expect(render(element)).toBe(
    '<meta name="description" content="Some content\r\nSet-Cookie: malicious=value">',
  );
  expect(render(element)).not.toContain("\r\n>");
});

test("null byte injection in attributes", () => {
  const element = meta({
    name: "description",
    content: "content\x00<script>alert(1)</script>",
  });
  expect(render(element)).toBe(
    '<meta name="description" content="content\x00&lt;script&gt;alert(1)&lt;/script&gt;">',
  );
});

test("unicode bypass attempts in attributes", () => {
  const element = meta({
    name: "description",
    content: "<script\u2028>alert('xss')</script>",
  });
  expect(render(element)).toBe(
    '<meta name="description" content="&lt;script\u2028&gt;alert(&#x27;xss&#x27;)&lt;/script&gt;">',
  );
});

test("javascript protocol in href attribute", () => {
  const element = a({ href: "javascript:alert('xss')" }, ["Click me"]);
  expect(render(element)).toBe(
    '<a href="javascript:alert(&#x27;xss&#x27;)">Click me</a>',
  );
});

test("data protocol with javascript in href", () => {
  const element = a(
    {
      href: "data:text/html,<script>alert('xss')</script>",
    },
    ["Click me"],
  );
  expect(render(element)).toBe(
    '<a href="data:text/html,&lt;script&gt;alert(&#x27;xss&#x27;)&lt;/script&gt;">Click me</a>',
  );
});

test("vbscript protocol in href attribute", () => {
  const element = a({ href: "vbscript:msgbox('xss')" }, ["Click me"]);
  expect(render(element)).toBe(
    '<a href="vbscript:msgbox(&#x27;xss&#x27;)">Click me</a>',
  );
});

test("style attribute with javascript", () => {
  const element = div(
    {
      style: "background: url('javascript:alert(1)'); color: red;",
    },
    ["Content"],
  );
  expect(render(element)).toBe(
    '<div style="background: url(&#x27;javascript:alert(1)&#x27;); color: red;">Content</div>',
  );
});

test("style attribute with expression()", () => {
  const element = div(
    {
      style: "width: expression(alert('xss')); color: red;",
    },
    ["Content"],
  );
  expect(render(element)).toBe(
    '<div style="width: expression(alert(&#x27;xss&#x27;)); color: red;">Content</div>',
  );
});

test("multiple event handlers in _extra", () => {
  const element = button(
    {
      _extra: [
        ["onclick", "alert('click')"],
        ["onmouseover", "alert('hover')"],
        ["onfocus", "alert('focus')"],
      ],
    },
    ["Button"],
  );

  const result = render(element);
  expect(result).toContain('onclick="alert(&#x27;click&#x27;)"');
  expect(result).toContain('onmouseover="alert(&#x27;hover&#x27;)"');
  expect(result).toContain('onfocus="alert(&#x27;focus&#x27;)"');
});

test("HTML entity injection in children", () => {
  const element = div({}, ["&lt;script&gt;alert('xss')&lt;/script&gt;"]);
  expect(render(element)).toBe(
    "<div>&amp;lt;script&amp;gt;alert(&#x27;xss&#x27;)&amp;lt;/script&amp;gt;</div>",
  );
});

test("deeply nested script injection", () => {
  const element = div({}, [
    div({}, [div({}, ["<script>alert('deep')</script>"])]),
  ]);
  expect(render(element)).toBe(
    "<div><div><div>&lt;script&gt;alert(&#x27;deep&#x27;)&lt;/script&gt;</div></div></div>",
  );
});

test("SVG with script tag in unsafeHtml", () => {
  const element = div({}, [
    unsafeHtml(
      '<svg onload="alert(\'svg-xss\')"><script>alert("nested")</script></svg>',
    ),
  ]);
  expect(render(element)).toBe(
    '<div><svg onload="alert(\'svg-xss\')"><script>alert("nested")</script></svg></div>',
  );
});

test("iframe with javascript src in unsafeHtml", () => {
  const element = div({}, [
    unsafeHtml("<iframe src=\"javascript:alert('iframe-xss')\"></iframe>"),
  ]);
  expect(render(element)).toBe(
    "<div><iframe src=\"javascript:alert('iframe-xss')\"></iframe></div>",
  );
});

test("object tag with data javascript in unsafeHtml", () => {
  const element = div({}, [
    unsafeHtml("<object data=\"javascript:alert('object-xss')\"></object>"),
  ]);
  expect(render(element)).toBe(
    "<div><object data=\"javascript:alert('object-xss')\"></object></div>",
  );
});

test("embed tag with src javascript in unsafeHtml", () => {
  const element = div({}, [
    unsafeHtml("<embed src=\"javascript:alert('embed-xss')\">"),
  ]);
  expect(render(element)).toBe(
    "<div><embed src=\"javascript:alert('embed-xss')\"></div>",
  );
});

test("form with action javascript", () => {
  const element = div({}, [
    unsafeHtml(
      '<form action="javascript:alert(\'form-xss\')"><input type="submit"></form>',
    ),
  ]);
  expect(render(element)).toBe(
    '<div><form action="javascript:alert(\'form-xss\')"><input type="submit"></form></div>',
  );
});

test("base tag with href javascript in unsafeHtml", () => {
  const element = div({}, [
    unsafeHtml("<base href=\"javascript:alert('base-xss')\">"),
  ]);
  expect(render(element)).toBe(
    "<div><base href=\"javascript:alert('base-xss')\"></div>",
  );
});

test("meta refresh with javascript in unsafeHtml", () => {
  const element = div({}, [
    unsafeHtml(
      '<meta http-equiv="refresh" content="0; url=javascript:alert(\'meta-xss\')">',
    ),
  ]);
  expect(render(element)).toBe(
    '<div><meta http-equiv="refresh" content="0; url=javascript:alert(\'meta-xss\')"></div>',
  );
});

test("link with href javascript in unsafeHtml", () => {
  const element = div({}, [
    unsafeHtml('<link rel="stylesheet" href="javascript:alert(\'link-xss\')">'),
  ]);
  expect(render(element)).toBe(
    '<div><link rel="stylesheet" href="javascript:alert(\'link-xss\')"></div>',
  );
});

test("script with src javascript in unsafeHtml", () => {
  const element = div({}, [
    unsafeHtml("<script src=\"javascript:alert('script-xss')\"></script>"),
  ]);
  expect(render(element)).toBe(
    "<div><script src=\"javascript:alert('script-xss')\"></script></div>",
  );
});

test("extremely long attribute value", () => {
  const longValue = "x".repeat(100000);
  const element = meta({ name: "description", content: longValue });
  const result = render(element);
  expect(result).toContain(`content="${longValue}"`);
  expect(result.length).toBeGreaterThan(100000);
});

test("attribute name with spaces in _extra", () => {
  const element = meta({
    charset: "utf-8",
    _extra: [["on load", "alert(1)"]],
  });
  expect(render(element)).toBe('<meta charset="utf-8" on load="alert(1)">');
});

test("empty attribute name in _extra", () => {
  const element = meta({
    charset: "utf-8",
    _extra: [["", "empty-key"]],
  });
  expect(render(element)).toBe('<meta charset="utf-8" ="empty-key">');
});

test("null values in _extra array", () => {
  const element = meta({
    charset: "utf-8",
    _extra: [
      ["key1", null],
      ["key2", "value2"],
    ],
  });
  expect(render(element)).toBe('<meta charset="utf-8" key2="value2">');
});

test("undefined values in _extra array", () => {
  const element = meta({
    charset: "utf-8",
    _extra: [
      ["key1", undefined],
      ["key2", "value2"],
    ],
  });
  expect(render(element)).toBe('<meta charset="utf-8" key2="value2">');
});

test("boolean false values in _extra array", () => {
  const element = meta({
    charset: "utf-8",
    _extra: [
      ["key1", false],
      ["key2", "value2"],
    ],
  });
  expect(render(element)).toBe('<meta charset="utf-8" key2="value2">');
});

test("boolean true values in _extra array", () => {
  const element = meta({
    charset: "utf-8",
    _extra: [
      ["key1", true],
      ["key2", "value2"],
    ],
  });
  expect(render(element)).toBe('<meta charset="utf-8" key1 key2="value2">');
});

test("number values in _extra array", () => {
  const element = meta({
    charset: "utf-8",
    _extra: [
      ["key1", 42],
      ["key2", "value2"],
    ],
  });
  expect(render(element)).toBe(
    '<meta charset="utf-8" key1="42" key2="value2">',
  );
});

test("URL values in _extra array", () => {
  const element = meta({
    charset: "utf-8",
    _extra: [
      ["key1", new URL("https://example.com")],
      ["key2", "value2"],
    ],
  });
  expect(render(element)).toBe(
    '<meta charset="utf-8" key1="https://example.com/" key2="value2">',
  );
});

test("mixed array of elements with dangerous content", () => {
  const element = div({}, [
    "Safe text",
    "<script>alert('xss1')</script>",
    false,
    undefined,
    "",
    "<img src=x onerror=alert('xss2')>",
    true && "Conditional text",
    false && "Hidden text",
  ]);

  const result = render(element);
  expect(result).toContain("Safe text");
  expect(result).toContain(
    "&lt;script&gt;alert(&#x27;xss1&#x27;)&lt;/script&gt;",
  );
  expect(result).toContain("&lt;img src=x onerror=alert(&#x27;xss2&#x27;)&gt;");
  expect(result).toContain("Conditional text");
  expect(result).not.toContain("Hidden text");
  expect(result).not.toContain("<script>");
  expect(result).not.toContain("<img");
});

test("XSS via attribute name with HTML entities", () => {
  const element = div(
    {
      _extra: [["&lt;script&gt;alert(1)&lt;/script&gt;", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain("&amp;lt;script&amp;gt;");
  expect(result).not.toContain("<script>");
});

test("XSS via attribute name with angle brackets", () => {
  const element = div(
    {
      _extra: [["<script>alert(1)</script>", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('&lt;script&gt;alert(1)&lt;/script&gt;="value"');
  expect(result).not.toContain("<script>alert(1)</script>");
});

test("XSS via attribute name with quotes", () => {
  const element = div(
    {
      _extra: [['" onmouseover="alert(1)', "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('&quot; onmouseover=&quot;alert(1)="value"');
  expect(result).not.toContain('" onmouseover="alert(1)');
});

test("XSS via attribute name with single quotes", () => {
  const element = div(
    {
      _extra: [["' onclick='alert(1)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('&#x27; onclick=&#x27;alert(1)="value"');
  expect(result).not.toContain("' onclick='alert(1)");
});

test("XSS via attribute name with backticks", () => {
  const element = div(
    {
      _extra: [["`-alert(1)-`", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('`-alert(1)-`="value"');
});

test("XSS via attribute name with unicode escapes", () => {
  const element = div(
    {
      _extra: [["javascript\u003Aalert(1)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('javascript:alert(1)="value"');
});

test("XSS via attribute name with null bytes", () => {
  const element = div(
    {
      _extra: [["on\u0000click=alert(1)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('on\u0000click=alert(1)="value"');
});

test("XSS via attribute name with line breaks", () => {
  const element = div(
    {
      _extra: [["on\nclick=alert(1)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('on\nclick=alert(1)="value"');
});

test("XSS via attribute name with multiple vectors combined", () => {
  const element = div(
    {
      _extra: [['" onclick="alert(1)" onmouseover="alert(2)"', "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain(
    '&quot; onclick=&quot;alert(1)&quot; onmouseover=&quot;alert(2)&quot;="value"',
  );
});

test("Very long attribute name in _extra", () => {
  const longName = "a".repeat(10000);
  const element = div(
    {
      _extra: [[longName, "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain(`${longName}="value"`);
});

test("Attribute name with spaces and special chars in _extra", () => {
  const element = div(
    {
      _extra: [["data test!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain("data test!@#$%^&amp;*()_+-={}[]|\\:;");
});

test("SVG-specific XSS vectors in attribute name", () => {
  const element = div(
    {
      _extra: [["onload=alert(1)><svg/onload=alert(2)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain(
    'onload=alert(1)&gt;&lt;svg/onload=alert(2)="value"',
  );
  expect(result).not.toContain("<svg");
});

test("Data URI in attribute name", () => {
  const element = div(
    {
      _extra: [["data:text/html,<script>alert(1)</script>", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain(
    'data:text/html,&lt;script&gt;alert(1)&lt;/script&gt;="value"',
  );
});

test("JavaScript protocol in attribute name", () => {
  const element = div(
    {
      _extra: [["javascript:alert(1)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('javascript:alert(1)="value"');
});

test("CSS expression in attribute name", () => {
  const element = div(
    {
      _extra: [["style=expression(alert(1))", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('style=expression(alert(1))="value"');
});

test("Event handler in attribute name", () => {
  const element = div(
    {
      _extra: [["onclick=alert(1)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('onclick=alert(1)="value"');
});

test("HTML comment in attribute name", () => {
  const element = div(
    {
      _extra: [["<!-- comment -->", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('&lt;!-- comment --&gt;="value"');
});

test("CDATA section in attribute name", () => {
  const element = div(
    {
      _extra: [["<![CDATA[<script>alert(1)</script>]]>", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain(
    '&lt;![CDATA[&lt;script&gt;alert(1)&lt;/script&gt;]]&gt;="value"',
  );
});

test("Cross-origin resource in attribute name", () => {
  const element = img({
    src: "valid.jpg",
    _extra: [["onerror=fetch('https://evil.com')", "value"]],
  });

  const result = render(element);
  expect(result).toContain(
    'onerror=fetch(&#x27;https://evil.com&#x27;)="value"',
  );
});

test("Object injection attempt in attribute name", () => {
  const element = div(
    {
      _extra: [["__proto__", "polluted"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('__proto__="polluted"');
});

test("Mixed case event handler in attribute name", () => {
  const element = div(
    {
      _extra: [["OnMoUsEoVeR=alert(1)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('OnMoUsEoVeR=alert(1)="value"');
});

test("HTML5 custom data attribute with XSS in name", () => {
  const element = div(
    {
      _extra: [['data-x="><script>alert(1)</script>', "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain(
    'data-x=&quot;&gt;&lt;script&gt;alert(1)&lt;/script&gt;="value"',
  );
});

test("Attribute name attempting to close current element", () => {
  const element = div(
    {
      _extra: [["\"'><script>alert(1)</script>", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain(
    '&quot;&#x27;&gt;&lt;script&gt;alert(1)&lt;/script&gt;="value"',
  );
  expect(result).not.toContain("<script>");
});

test("Nested attribute via attribute name", () => {
  const element = div(
    {
      _extra: [['x y="z"', "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('x y=&quot;z&quot;="value"');
});

test("iframe srcdoc injection via attribute name", () => {
  const element = div(
    {
      _extra: [["srcdoc=<script>alert(1)</script>", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain(
    'srcdoc=&lt;script&gt;alert(1)&lt;/script&gt;="value"',
  );
});

test("Mutation XSS via attribute name", () => {
  const element = div(
    {
      _extra: [["data-x=\"accesskey='x' onclick='alert(1)'\"", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain(
    'data-x=&quot;accesskey=&#x27;x&#x27; onclick=&#x27;alert(1)&#x27;&quot;="value"',
  );
});

test("CSP bypass attempt in attribute name", () => {
  const element = script(
    {
      _extra: [["nonce=\"'/*'-'*/'\" onerror='javascript:alert(1)'", "value"]],
    },
    ["console.log('test')"],
  );

  const result = render(element);
  expect(result).toContain(
    'nonce=&quot;&#x27;/*&#x27;-&#x27;*/&#x27;&quot; onerror=&#x27;javascript:alert(1)&#x27;="value"',
  );
});

test("Multiple _extra attributes with various XSS vectors", () => {
  const element = div(
    {
      _extra: [
        ["onclick", "alert(1)"],
        ['" onmouseover="alert(2)', "value"],
        ["<script>alert(3)</script>", "value"],
        ["javascript:alert(4)", "value"],
        ["data-x=<img src=x onerror=alert(5)>", "value"],
      ],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('onclick="alert(1)"');
  expect(result).toContain('&quot; onmouseover=&quot;alert(2)="value"');
  expect(result).toContain('&lt;script&gt;alert(3)&lt;/script&gt;="value"');
  expect(result).toContain('javascript:alert(4)="value"');
  expect(result).toContain('data-x=&lt;img src=x onerror=alert(5)&gt;="value"');
});

test("DOM clobbering via attribute name", () => {
  const element = div(
    {
      id: "safe",
      _extra: [["name=getElementById", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('name=getElementById="value"');
});

test("AngularJS template injection via attribute name", () => {
  const element = div(
    {
      _extra: [
        ["ng-app ng-csp id={{constructor.constructor('alert(1)')()}}", "value"],
      ],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain(
    'ng-app ng-csp id={{constructor.constructor(&#x27;alert(1)&#x27;)()}}="value"',
  );
});

test("Unicode normalization in attribute name", () => {
  const element = div(
    {
      _extra: [["оnclick=alert(1)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('оnclick=alert(1)="value"');
});

test("Character encoding in attribute name", () => {
  const element = div(
    {
      _extra: [["%3Cscript%3Ealert(1)%3C/script%3E", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('%3Cscript%3Ealert(1)%3C/script%3E="value"');
});

test("Embedded newlines in attribute name", () => {
  const element = div(
    {
      _extra: [["on\nclick=alert(1)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('on\nclick=alert(1)="value"');
});

test("HTML encoded entities in attribute name", () => {
  const element = div(
    {
      _extra: [["&#111;&#110;&#99;&#108;&#105;&#99;&#107;=alert(1)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain(
    '&amp;#111;&amp;#110;&amp;#99;&amp;#108;&amp;#105;&amp;#99;&amp;#107;=alert(1)="value"',
  );
});

test("Typo-squatting attribute names", () => {
  const element = div(
    {
      _extra: [["srcdoc", "javascript:alert(1)"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('srcdoc="javascript:alert(1)"');
});

test("Unusual separator characters in attribute name", () => {
  const element = div(
    {
      _extra: [["on\u200Cclick=alert(1)", "value"]],
    },
    ["Content"],
  );

  const result = render(element);
  expect(result).toContain('on\u200Cclick=alert(1)="value"');
});
