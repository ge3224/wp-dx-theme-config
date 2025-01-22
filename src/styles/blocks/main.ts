import { StyleBlock, StyleBlockShape } from "../../definitions/styles.ts";

export function withStyleBlockShape<T extends string>(
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

export function newStyleBlock<T extends string>(
  ns: T,
  ...mods: Array<(sb: StyleBlock<T>) => void>
): StyleBlock<T> {
  const sb = { [ns]: {} } as StyleBlock<T>;
  mods.forEach((mod) => mod(sb));
  return sb;
}
