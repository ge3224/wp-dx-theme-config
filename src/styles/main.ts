import {
  StyleBlock,
  StyleBorder,
  StyleColor,
  StyleDimension,
  StyleElements,
  StyleFilter,
  StyleOutline,
  Styles,
  StyleSpacing,
  StyleTypography,
  StyleValue,
} from "../definitions/styles.ts";

export function withStyleBlock<T extends string>(
  key: string,
  sb: StyleBlock<T>,
): (s: Styles) => void {
  return (s: Styles): void => {
    if (!s.blocks) {
      s.blocks = {};
    }

    if (key in s.blocks) {
      console.warn(`A style block with a key of "${key}" already exists`);
    } else {
      s.blocks[key] = sb;
    }
  };
}

export function withStyleBorder(sb: StyleBorder): (s: Styles) => void {
  return (s: Styles): void => {
    s.border = sb;
  };
}

export function withStyleColor(sc: StyleColor): (s: Styles) => void {
  return (s: Styles): void => {
    s.color = sc;
  };
}

export function withCss(css: string): (s: Styles) => void {
  return (s: Styles): void => {
    s.css = css;
  };
}

export function withStyleDimension(sd: StyleDimension): (s: Styles) => void {
  return (s: Styles): void => {
    s.dimension = sd;
  };
}

export function withStyleElements(se: StyleElements): (s: Styles) => void {
  return (s: Styles): void => {
    s.elements = se;
  };
}

export function withStyleFilter(sf: StyleFilter): (s: Styles) => void {
  return (s: Styles): void => {
    s.filter = sf;
  };
}

export function withStyleOutline(so: StyleOutline): (s: Styles) => void {
  return (s: Styles): void => {
    s.outline = so;
  };
}

export function withStyleShadow(ss: StyleValue): (s: Styles) => void {
  return (s: Styles): void => {
    s.shadow = ss;
  };
}

export function withStyleSpacing(ss: StyleSpacing): (s: Styles) => void {
  return (s: Styles): void => {
    s.spacing = ss;
  };
}

export function withStyleTypography(st: StyleTypography): (s: Styles) => void {
  return (s: Styles): void => {
    s.typography = st;
  };
}

export function newStyles(...mods: Array<(s: Styles) => void>): Styles {
  const s: Styles = {};
  mods.forEach((mod) => mod(s));
  return s;
}
