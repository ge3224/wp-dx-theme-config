import { TemplateParts } from "~/src/definitions/template_parts.ts";

export function withTemplatePart(
  templatePart: { name: string; title?: string; area?: string },
): (tp: TemplateParts) => void {
  return (tp: TemplateParts): void => {
    const exists = tp.some((part) => part.name === templatePart.name);

    if (!exists) {
      tp.push(templatePart);
    } else {
      console.warn(
        `Template part with name "${templatePart.name}" already exists.`,
      );
    }
  };
}

/**
 *
    {
      area: "header",
      name: "header",
      title: "Header",
    },
    {
      area: "footer",
      name: "footer",
      title: "Footer",
    },
 */
export default function newTemplateParts(
  ...mods: Array<(tp: TemplateParts) => void>
): TemplateParts {
  const tp: TemplateParts = [];

  mods.forEach((mod) => mod(tp));

  return tp;
}
