import type { CustomTemplate, CustomTemplatesConfig } from "./types.ts";

/**
 * Creates a modifier function that adds a single custom template to a CustomTemplatesConfig array.
 *
 * @param {CustomTemplate} c - The custom template configuration to add.
 *                             Must have a unique 'name' property to avoid duplicates.
 * @returns {Function} A modifier function that takes a CustomTemplatesConfig array and adds
 *                     the custom template if a template with the same name doesn't already exist.
 *                     If a duplicate name is found, logs a warning instead of adding.
 */
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

/**
 * Creates a new array of custom templates with the specified modifications.
 *
 * @param {...Function} mods - An array of modifier functions that each take a CustomTemplatesConfig
 *                             array and modify it in place. Typically created using withCustomTemplate().
 * @returns {CustomTemplatesConfig} A new array containing the custom templates.
 */
export function newCustomTemplates(
  ...mods: Array<(ct: CustomTemplatesConfig) => void>
): CustomTemplatesConfig {
  const ct: CustomTemplatesConfig = [];
  mods.forEach((mod) => mod(ct));
  return ct;
}

/**
 * Namespace object containing functions for creating and modifying custom templates.
 *
 * @property {Function} create - Alias for newCustomTemplates function
 * @property {Function} withCustomTemplate - Function to create a modifier that adds a single template
 */
export const customTemplates = {
  create: newCustomTemplates,
  withCustomTemplate,
};
