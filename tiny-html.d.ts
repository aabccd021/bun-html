export type RenderFn = (element: Element) => string;

export const render: RenderFn;

export type UnsafeHtmlFn = (value: string) => UnsafeElement;

export const unsafeHtml: UnsafeHtmlFn;

export type AttributeValues = string | number | boolean | null | undefined;

export type TaggedElement = {
    tag: string;
    attributes: Record<string, AttributeValues> & {
      [k in `data-${string}`]?: AttributeValues;
    }
    children?: Array<Element> | undefined;
};

export type UnsafeElement = {
    value: string;
};

export type Element = string | false | undefined | TaggedElement | UnsafeElement;
