import { TemplatePart, TemplateParts } from "./types.ts";

export function withTemplatePart(
  tt: TemplatePart,
): (tp: TemplateParts) => void {
  return (tp: TemplateParts): void => {
    const exists = tp.some((part) => part.name === tt.name);

    if (!exists) {
      tp.push(tt);
    } else {
      console.warn(
        `Template part with name "${tt.name}" already exists.`,
      );
    }
  };
}

export function newTemplateParts(
  ...mods: Array<(tp: TemplateParts) => void>
): TemplateParts {
  const tp: TemplateParts = [];

  mods.forEach((mod) => mod(tp));

  return tp;
}
