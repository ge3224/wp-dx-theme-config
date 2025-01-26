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

export function withStyleElementShape<
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

export function withStyleBorder(sb: StyleBorder): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.border = sb;
  };
}

export function withStyleColor(sc: StyleColor): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.color = sc;
  };
}

export function withStyleCss(css: string): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.css = css;
  };
}

export function withStyleDimension(
  sd: StyleDimension,
): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.dimension = sd;
  };
}

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

// export function withStyleElements(
//   se: StyleElements,
// ): (s: StylesConfig) => void {
//   return (s: StylesConfig): void => {
//     s.elements = se;
//   };
// }

export function withStyleFilter(sf: StyleFilter): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.filter = sf;
  };
}

export function withStyleOutline(so: StyleOutline): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.outline = so;
  };
}

export function withStyleShadow(ss: StyleValue): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.shadow = ss;
  };
}

export function withStyleSpacing(ss: StyleSpacing): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.spacing = ss;
  };
}

export function withStyleTypography(
  st: StyleTypography,
): (s: StylesConfig) => void {
  return (s: StylesConfig): void => {
    s.typography = st;
  };
}

export function newStyles(
  ...mods: Array<(s: StylesConfig) => void>
): StylesConfig {
  const s: StylesConfig = {};
  mods.forEach((mod) => mod(s));
  return s;
}

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
