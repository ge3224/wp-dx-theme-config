import { TemplateParts } from "~/src/definitions/template_parts.ts";

export default function newTemplateParts(): TemplateParts {
  return [
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
  ];
}
