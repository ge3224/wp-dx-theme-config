import type { CustomTemplate, CustomTemplatesConfig } from "./types.ts";

export function withCustomTemplate(
  c: CustomTemplate,
): (ct: CustomTemplatesConfig) => void {
  return (ct: CustomTemplatesConfig): void => {
    const exists = ct.some((t) => t.name === c.name);
    if (!exists) {
      ct.push(c);
    } else {
      console.warn(`Custom Template with name "${c.name}" already exists`);
    }
  };
}

export function newCustomTemplates(
  ...mods: Array<(ct: CustomTemplatesConfig) => void>
): CustomTemplatesConfig {
  const ct: CustomTemplatesConfig = [];
  mods.forEach((mod) => mod(ct));
  return ct;
}

export const customTemplates = {
  create: newCustomTemplates,
  withCustomTemplate,
};
