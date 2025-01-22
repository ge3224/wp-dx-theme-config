import {
  StyleBlockShape,
  StyleBorder,
  StyleColor,
  StyleDimension,
  StyleElement,
  StyleElements,
  StyleFilter,
  StyleOutline,
  Styles,
  StyleSpacing,
  StyleTypography,
  StyleValue,
} from "../definitions/styles.ts";
import { newStyleBlock, withStyleBlockShape } from "./blocks/main.ts";

export function withStyleBlock<T extends string>(
  namespace: T,
  styles: Partial<StyleBlockShape>,
): (s: Styles) => void {
  return (s: Styles): void => {
    if (!s.blocks) {
      s.blocks = {};
    }

    if (namespace in s.blocks) {
      console.warn(
        `A setting block with a key of "${namespace}" already exists.`,
      );
      return;
    }

    const sb = newStyleBlock(namespace, withStyleBlockShape(styles));
    s.blocks = { ...s.blocks, ...sb };
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

export function withStyleElement(
  key: string,
  se: StyleElement,
): (s: Styles) => void {
  return (s: Styles): void => {
    if (!s.elements) {
      s.elements = {};
    }

    if (key in s.elements) {
      console.warn(`an element with the key of "${key}" already exists`);
    } else {
      s.elements[key] = se;
    }
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
