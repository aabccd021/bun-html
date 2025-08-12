/**
 * @module ./gen.js
 */
export * from "./gen.js";

/**
 * @typedef {Object.<string, string | number | boolean | null>} DataAttribute
 */

/**
 * @typedef {string|number|boolean|URL|null|undefined} AttributeValues
 */

/**
 * @typedef {Object} TaggedElement
 * @property {string} tag
 * @property {Object.<string, AttributeValues|Object.<string, AttributeValues>>} attributes
 * @property {Array.<Element>|undefined} [children]
 */

/**
 * @typedef {Object} UnsafeElement
 * @property {string} value
 */

/**
 * @typedef {string|false|undefined|TaggedElement|UnsafeElement} Element
 */

/**
 * @type {Object.<string, string>}
 */
const escapeMap = {
  '"': "&quot;",
  "&": "&amp;",
  "'": "&#x27;",
  "<": "&lt;",
  ">": "&gt;",
  "`": "&#x60;", // http://html5sec.org/#102, http://html5sec.org/#108, http://html5sec.org/#133
};

const reUnescapedHtml = /[&<>"'`]/g;

/**
 * @param {string} value
 */
function escapeHTML(value) {
  if (!reUnescapedHtml.test(value)) {
    return value;
  }
  return value.replace(reUnescapedHtml, (match) => escapeMap[match] ?? match);
}

/**
 * @param {string} unsafeKey
 * @param {AttributeValues|Object.<string, AttributeValues>} value
 * @returns {string}
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
    .map(([dataKey, dataValue]) => serializeAttribute(`data-${dataKey}`, dataValue))
    .join("");
}

/**
 * @param {Element} element
 * @returns {string}
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
 * @param {string} value
 * @returns {UnsafeElement}
 */
export const unsafeHtml = (value) => ({ value });
