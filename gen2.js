/**
 * @typedef {"on" | "off"} ValueSetO
 * @typedef {"ltr" | "rtl" | "auto"} ValueSetD
 */

/**
 * @typedef {Object} GlobalAttributes
 * @property {ValueSetO} [ autocorrect ]
 * @property {ValueSetD} [ dir ]
 */

/**
 * @typedef {Object} AreaAttributes
 * @property {string | number | boolean | null} [ type ]
 * @property {string | number | boolean | null} [ accesskey ]
 */

/**
 * @typedef {Object} Element
 * @property {string} tag
 * @property {Object} attributes
 * @property {readonly Element[]} [ children ]
 */

/**
 * @param {AreaAttributes} attributes
 * @param {readonly Element[]} [ children ]
 * @returns {Element}
 */
export const area = (attributes, children) => ({
  tag: "area",
  attributes,
  children,
});

area(
  {
    // href: new URL("https://example.com"),
    // style: "color: red;",
    type: "text/html",
  },
  [],
);
