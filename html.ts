// export * from "./gen2.js";
export * from "./gen";

type AttributeValues = string | number | boolean | URL | null | undefined;

export type Element =
  | string
  | false
  | undefined
  | {
      readonly tag: string;
      readonly attributes: Record<
        string,
        AttributeValues | Record<string, AttributeValues>
      >;
      readonly children?: readonly Element[];
    }
  | {
      readonly value: string;
    };

const reUnescapedHtml = /[&<>"'`]/g;

const escapeMap: Record<string, string> = {
  '"': "&quot;",
  "&": "&amp;",
  "'": "&#x27;",
  "<": "&lt;",
  ">": "&gt;",
  "`": "&#x60;", // http://html5sec.org/#102, http://html5sec.org/#108, http://html5sec.org/#133
};

function escapeHTML(value: string): string {
  if (!reUnescapedHtml.test(value)) {
    return value;
  }
  return value.replace(reUnescapedHtml, (match) => escapeMap[match] ?? match);
}

function serializeAttribute([unsafeKey, value]: readonly [
  string,
  AttributeValues | Record<string, AttributeValues>,
]): string {
  if (value === false || value === undefined || value === null) {
    return "";
  }

  const key = escapeHTML(unsafeKey);

  if (value === true) {
    return ` ${key}`;
  }

  if (typeof value === "string") {
    return ` ${key}="${escapeHTML(value)}"`;
  }

  if (typeof value === "number") {
    return ` ${key}="${value}"`;
  }

  if (value instanceof URL) {
    return ` ${key}="${value.href}"`;
  }

  return Object.entries(value)
    .map(([dataKey, dataValue]) =>
      serializeAttribute([`data-${dataKey}`, dataValue]),
    )
    .join("");
}

export function render(element: Element): string {
  if (element === false || element === undefined) {
    return "";
  }

  if (typeof element === "string") {
    return escapeHTML(element);
  }

  if ("value" in element) {
    return element.value;
  }

  const attributes = Object.entries(element.attributes)
    .map(serializeAttribute)
    .join("");

  const beforeTag = element.tag === "html" ? "<!DOCTYPE html>" : "";

  if (element.children === undefined) {
    return `${beforeTag}<${element.tag}${attributes}>`;
  }

  const children = element.children.map(render).join("");
  return `${beforeTag}<${element.tag}${attributes}>${children}</${element.tag}>`;
}

export const unsafeHtml = (value: string): Element => ({ value });
