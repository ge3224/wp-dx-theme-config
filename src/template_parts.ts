import { TemplatePart, TemplatePartsConfig } from "./types.ts";

export function withTemplatePart(
  tt: TemplatePart,
): (tp: TemplatePartsConfig) => void {
  return (tp: TemplatePartsConfig): void => {
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
  ...mods: Array<(tp: TemplatePartsConfig) => void>
): TemplatePartsConfig {
  const tp: TemplatePartsConfig = [];

  mods.forEach((mod) => mod(tp));

  return tp;
}
