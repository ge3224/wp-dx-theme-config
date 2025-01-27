import type {
  StyleBlock,
  StyleBlockShape,
  StyleBorder,
  StyleColor,
  StyleDimension,
  StyleElement,
  StyleElementShape,
  StyleFilter,
  StyleOutline,
  StylesConfig,
  StyleSpacing,
  StyleTypography,
  StyleValue,
} from "./types.ts";

function withStyleBlockShape<T extends string>(
  styles: Partial<StyleBlockShape>,
): (sb: StyleBlock<T>) => void {
  return (sb: StyleBlock<T>): void => {
    const key = Object.keys(sb)[0] as keyof typeof sb;
    if (!key) {
      console.warn("Style block is empty, no key found.");
      return;
    }

    const shape = sb[key];
    if (shape) {
      sb[key] = {
        ...shape,
        ...styles,
      };
    }
  };
}

function newStyleBlock<T extends string>(
  ns: T,
  ...mods: Array<(sb: StyleBlock<T>) => void>
): StyleBlock<T> {
  const sb = { [ns]: {} } as StyleBlock<T>;
  mods.forEach((mod) => mod(sb));
  return sb;
}

function withStyleElementShape<
  T extends string,
  Pseudo extends boolean = false,
>(
  styles: Partial<StyleElementShape<Pseudo>>,
): (se: StyleElement<T, Pseudo>) => void {
  return (se: StyleElement<T, Pseudo>): void => {
    const key = Object.keys(se)[0] as keyof typeof se;
    if (!key) {
      console.warn("Element Style is empty, no key found.");
      return;
    }

    const shape = se[key];
    if (shape) {
      se[key] = {
        ...shape,
        ...styles,
      };
    }
  };
}

/**
 * Creates a new style element with the specified tag and applies modifiers.
 *
 * @template T - The type of the element tag
 * @template Pseudo - Boolean indicating if pseudo-classes are supported
 * @param {T} tag - The tag name for the style element
 * @param {...Function} mods - Modifier functions to apply to the style element
 * @returns {StyleElement<T, Pseudo>} A new style element with all modifications applied
 */
export function newStyleElement<
  T extends string,
  Pseudo extends boolean = false,
>(
  tag: T,
  ...mods: Array<(se: StyleElement<T, Pseudo>) => void>
): StyleElement<T, Pseudo> {
  const se = { [tag]: {} } as StyleElement<T, Pseudo>;
  mods.forEach((mod) => mod(se));
  return se;
}

/**
 * Creates a modifier function that adds a style block with the specified namespace.
 *
 * @template T - The type of the namespace string
 * @param {T} namespace - The unique identifier for the style block
 * @param {Partial<StyleBlockShape>} styles - The styles to apply to the block
 * @returns {function} A function that modifies a StylesConfig by adding the new style block
 */
export function withStyleBlock<T extends string>(
  namespace: T,
  styles: Partial<StyleBlockShape>,
): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    if (!s.blocks) {
      s.blocks = {};
    }

    if (namespace in s.blocks) {
      console.warn(
        `A block style with a key of "${namespace}" already exists.`,
      );
      return;
    }

    const sb = newStyleBlock(namespace, withStyleBlockShape(styles));
    s.blocks = { ...s.blocks, ...sb };
  };
}

/**
 * Creates a modifier function that sets border styles in a configuration.
 *
 * @param {StyleBorder} sb - The border styles to apply
 * @returns {function} A function that modifies a StylesConfig by updating its border styles
 */
export function withStyleBorder(sb: StyleBorder): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.border = sb;
  };
}

/**
 * Creates a modifier function that sets color styles in a configuration.
 *
 * @param {StyleColor} sc - The color styles to apply
 * @returns {function} A function that modifies a StylesConfig by updating its color styles
 */
export function withStyleColor(sc: StyleColor): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.color = sc;
  };
}

/**
 * Creates a modifier function that sets raw CSS in a configuration.
 *
 * @param {string} css - The raw CSS string to apply
 * @returns {function} A function that modifies a StylesConfig by setting its CSS
 */
export function withStyleCss(css: string): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.css = css;
  };
}

/**
 * Creates a modifier function that sets dimension styles in a configuration.
 *
 * @param {StyleDimension} sd - The dimension styles to apply
 * @returns {function} A function that modifies a StylesConfig by updating its dimension styles
 */
export function withStyleDimension(
  sd: StyleDimension,
): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.dimension = sd;
  };
}

/**
 * Creates a modifier function that adds an element style to a configuration.
 *
 * @template T - The type of the element tag
 * @template Pseudo - Boolean indicating if pseudo-classes are supported
 * @param {T} tag - The tag name for the element
 * @param {StyleElementShape<Pseudo>} styles - The styles to apply to the element
 * @param {Pseudo} [hasPseudoClasses] - Whether the element supports pseudo-classes
 * @returns {function} A function that modifies a StylesConfig by adding the element style
 */
export function withStyleElement<
  T extends string,
  Pseudo extends boolean = false,
>(
  tag: T,
  styles: StyleElementShape<Pseudo>,
  hasPseudoClasses?: Pseudo,
): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    if (!s.elements) {
      s.elements = {};
    }

    if (tag in s.elements) {
      console.warn(
        `An element style with a key of "${tag}" already exists.`,
      );
      return;
    }

    const se = hasPseudoClasses
      ? newStyleElement(
        tag,
        withStyleElementShape(styles as StyleElementShape<true>),
      )
      : newStyleElement(
        tag,
        withStyleElementShape(styles as StyleElementShape),
      );

    s.elements = { ...s.elements, ...se };
  };
}

/**
 * Creates a modifier function that sets filter styles in a configuration.
 *
 * @param {StyleFilter} sf - The filter styles to apply
 * @returns {function} A function that modifies a StylesConfig by updating its filter styles
 */
export function withStyleFilter(sf: StyleFilter): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.filter = sf;
  };
}

/**
 * Creates a modifier function that sets outline styles in a configuration.
 *
 * @param {StyleOutline} so - The outline styles to apply
 * @returns {function} A function that modifies a StylesConfig by updating its outline styles
 */
export function withStyleOutline(so: StyleOutline): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.outline = so;
  };
}

/**
 * Creates a modifier function that sets shadow styles in a configuration.
 *
 * @param {StyleValue} ss - The shadow style value to apply
 * @returns {function} A function that modifies a StylesConfig by updating its shadow styles
 */
export function withStyleShadow(ss: StyleValue): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.shadow = ss;
  };
}

/**
 * Creates a modifier function that sets spacing styles in a configuration.
 *
 * @param {StyleSpacing} ss - The spacing styles to apply
 * @returns {function} A function that modifies a StylesConfig by updating its spacing styles
 */
export function withStyleSpacing(ss: StyleSpacing): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.spacing = ss;
  };
}

/**
 * Creates a modifier function that sets typography styles in a configuration.
 *
 * @param {StyleTypography} st - The typography styles to apply
 * @returns {function} A function that modifies a StylesConfig by updating its typography styles
 */
export function withStyleTypography(
  st: StyleTypography,
): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.typography = st;
  };
}

/**
 * Creates a new styles configuration by applying multiple modifier functions.
 *
 * @param {...Function} mods - Modifier functions to apply to the styles configuration
 * @returns {StylesConfig} A new styles configuration with all modifications applied
 */
export function newStyles(
  ...mods: Array<(s: StylesConfig) => void>
): StylesConfig {
  const s: StylesConfig = {};
  mods.forEach((mod) => mod(s));
  return s;
}

/**
 * Utility object providing style-related functionality.
 *
 * @property {function} create - Creates a new styles configuration (alias for newStyles)
 * @property {function} withBlock - Adds a style block
 * @property {function} withBorder - Adds border styles
 * @property {function} withColor - Adds color styles
 * @property {function} withCss - Adds raw CSS
 * @property {function} withDimension - Adds dimension styles
 * @property {function} withElement - Adds element styles
 * @property {function} withFilter - Adds filter styles
 * @property {function} withOutline - Adds outline styles
 * @property {function} withShadow - Adds shadow styles
 * @property {function} withSpacing - Adds spacing styles
 */
export const styles = {
  create: newStyles,
  withBlock: withStyleBlock,
  withBorder: withStyleBorder,
  withColor: withStyleColor,
  withCss: withStyleCss,
  withDimension: withStyleDimension,
  withElement: withStyleElement,
  withFilter: withStyleFilter,
  withOutline: withStyleOutline,
  withShadow: withStyleShadow,
  withSpacing: withStyleSpacing,
};
