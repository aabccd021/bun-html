/**
 * @typedef {"on" | "off"} ValueSetO
 * @typedef {"ltr" | "rtl" | "auto"} ValueSetD
 */

/**
 * @typedef {Object} GlobalAttributes
 * @property {string | number | boolean | null} [ accesskey ]
 * @property {ValueSetO} [ autocorrect ]
 * @property {ValueSetD} [ dir ]
 */

/**
 * @typedef {Object} Element
 * @property {string} tag
 * @property {Object} attributes
 * @property {readonly Element[]} children
 */

/**
 * @param {GlobalAttributes & {
 *   type?: string | number | boolean | null,
 *   accesskey?: string | number | boolean | null
 * }} attributes
 * @param {readonly Element[]} children
 * @returns {Element}
 */
export const area = (attributes, children) => ({
  tag: "area",
  attributes,
  children,
});
