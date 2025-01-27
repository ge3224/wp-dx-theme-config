import type { TemplatePart, TemplatePartsConfig } from "./types.ts";

/**
 * Creates a modifier function that adds a template part to a configuration if it doesn't already exist.
 *
 * @param {TemplatePart} tt - The template part to add
 * @returns {function} A function that modifies a TemplatePartsConfig by adding the template part
 * @throws {never}
 */
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

/**
 * Creates a new template parts configuration by applying multiple modifier functions.
 *
 * @param {...Function} mods - Modifier functions to apply to the template parts configuration
 * @returns {TemplatePartsConfig} A new template parts configuration with all modifications applied
 */
export function newTemplateParts(
  ...mods: Array<(tp: TemplatePartsConfig) => void>
): TemplatePartsConfig {
  const tp: TemplatePartsConfig = [];

  mods.forEach((mod) => mod(tp));

  return tp;
}

/**
 * Utility object providing template parts functionality.
 *
 * @property {function} create - Creates a new template parts configuration (alias for newTemplateParts)
 * @property {function} withTemplatePart - Function to create a modifier that adds a template part
 */
export const templateParts = {
  create: newTemplateParts,
  withTemplatePart,
};
