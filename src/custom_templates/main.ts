import {
  CustomTemplate,
  CustomTemplates,
} from "../definitions/custom_templates.ts";

export function withCustomTemplate(
  c: CustomTemplate,
): (ct: CustomTemplates) => void {
  return (ct: CustomTemplates): void => {
    const exists = ct.some((t) => t.name === c.name);
    if (!exists) {
      ct.push(c);
    } else {
      console.warn(`Custom Template with name "${c.name}" already exists`);
    }
  };
}

export function newCustomTemplates(
  ...mods: Array<(ct: CustomTemplates) => void>
): CustomTemplates {
  const ct: CustomTemplates = [];
  mods.forEach((mod) => mod(ct));
  return ct;
}
