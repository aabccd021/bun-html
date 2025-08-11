/**
 * @module ./gen.js
 */
export * from "./gen.js";

/**
 * Represents a record of data attributes with string, number, or boolean values.
 * @typedef {Object.<string, string | number | boolean | null>} DataAttribute
 */

/**
 * Values that can be used as HTML attributes.
 * @typedef {string|number|boolean|URL|null|undefined} AttributeValues
 */

/**
 * An element with a tag, attributes, and optional children.
 * @typedef {Object} TaggedElement
 * @property {string} tag - The HTML tag name
 * @property {Object<string, AttributeValues|Object<string, AttributeValues>>} attributes - Element attributes
 * @property {Array<Element>} [children] - Optional child elements
 */

/**
 * A raw HTML element with unescaped content.
 * @typedef {Object} UnsafeElement
 * @property {string} value - Raw HTML content
 */

/**
 * Represents an HTML element or a component that can be rendered to HTML.
 * @typedef {string|false|undefined|TaggedElement|UnsafeElement} Element
 */

/**
 * Regular expression for detecting unescaped HTML characters.
 * @type {RegExp}
 */
const reUnescapedHtml = /[&<>"'`]/g;

/**
 * Mapping of special HTML characters to their escaped equivalents.
 * @type {Object<string, string>}
 */
const escapeMap = {
  '"': "&quot;",
  "&": "&amp;",
  "'": "&#x27;",
  "<": "&lt;",
  ">": "&gt;",
  "`": "&#x60;", // http://html5sec.org/#102, http://html5sec.org/#108, http://html5sec.org/#133
};

/**
 * Escapes HTML special characters in a string to prevent XSS.
 * @param {string} value - The string to escape
 * @returns {string} The escaped string
 */
function escapeHTML(value) {
  if (!reUnescapedHtml.test(value)) {
    return value;
  }
  return value.replace(reUnescapedHtml, (match) => escapeMap[match] ?? match);
}

/**
 * Serializes an attribute key-value pair into HTML attribute syntax.
 * @param {string} unsafeKey - The attribute name (will be escaped)
 * @param {AttributeValues|Object<string, AttributeValues>} value - The attribute value
 * @returns {string} The serialized HTML attribute string
 */
function serializeAttribute(unsafeKey, value) {
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
      serializeAttribute(`data-${dataKey}`, dataValue),
    )
    .join("");
}

/**
 * Renders an Element to its HTML string representation.
 * @param {Element} element - The element to render
 * @returns {string} The rendered HTML string
 */
export function render(element) {
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
    .map(([key, value]) => serializeAttribute(key, value))
    .join("");

  const beforeTag = element.tag === "html" ? "<!DOCTYPE html>" : "";

  if (element.children === undefined) {
    return `${beforeTag}<${element.tag}${attributes}>`;
  }

  const children = element.children.map(render).join("");
  return `${beforeTag}<${element.tag}${attributes}>${children}</${element.tag}>`;
}

/**
 * Creates an Element from an unescaped HTML string.
 * Use with caution as this bypasses HTML escaping.
 * @param {string} value - Raw HTML string to include
 * @returns {UnsafeElement} An Element that will render the raw HTML
 */
export const unsafeHtml = (value) => ({ value });
