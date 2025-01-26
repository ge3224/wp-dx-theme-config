import type {
  CustomTemplatesConfig,
  PatternsConfig,
  SettingsConfig,
  StylesConfig,
  TemplatePartsConfig,
  ThemeJson,
} from "./types.ts";

/**
 * Creates a modifier function that sets the version number of a WordPress theme.json configuration.
 *
 * @param {number} n - The version number to set in the theme configuration.
 * @returns {Function} A modifier function that takes a ThemeJson object and sets its version.
 *                     This returned function can be used with newThemeJson().
 */
export function withConfigVersion(n: number): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.version = n;
  };
}

/**
 * Creates a modifier function that sets the schema URL for a WordPress theme.json configuration.
 *
 * @param {string} schema - The schema URL to set in the theme configuration.
 *                         Usually points to a WordPress theme.json schema like
 *                         "https://schemas.wp.org/wp/6.5/theme.json"
 *
 * @returns {Function} A modifier function that takes a ThemeJson object and sets its $schema property.
 *                     This returned function can be used with newThemeJson().
 */
export function withConfigSchema(schema: string): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.$schema = schema;
  };
}
/**
 * Creates a modifier function that sets the settings configuration for a WordPress theme.json.
 *
 * @param {SettingsConfig} s - The settings configuration object containing WordPress theme settings
 *                            like color, typography, spacing, and other theme.json settings options.
 *                            This completely replaces any existing settings.
 * @returns {Function} A modifier function that takes a ThemeJson object and sets its settings property.
 *                     This returned function can be used with newThemeJson().
 */
export function withConfigSettings(s: SettingsConfig): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.settings = s;
  };
}

/**
 * Creates a modifier function that sets the styles configuration for a WordPress theme.json.
 *
 * @param {StylesConfig} s - The styles configuration object containing WordPress theme styles
 *                          like colors, typography, spacing, borders, and other visual properties.
 *                          This completely replaces any existing styles.
 * @returns {Function} A modifier function that takes a ThemeJson object and sets its styles property.
 *                     This returned function can be used with newThemeJson().
 */
export function withConfigStyles(s: StylesConfig): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.styles = s;
  };
}

/**
 * Creates a modifier function that sets the custom templates configuration for a WordPress theme.json.
 *
 * @param {CustomTemplatesConfig} ct - The custom templates configuration array defining
 *                                     additional templates beyond WordPress defaults.
 *                                     This completely replaces any existing custom templates.
 * @returns {Function} A modifier function that takes a ThemeJson object and sets its customTemplates property.
 *                     This returned function can be used with newThemeJson().
 */
export function withConfigCustomTemplates(
  ct: CustomTemplatesConfig,
): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.customTemplates = ct;
  };
}

/**
 * Creates a modifier function that sets the template parts configuration for a WordPress theme.json.
 *
 * @param {TemplatePartsConfig} tp - The template parts configuration array defining reusable
 *                                   template sections like headers, footers, and sidebars.
 *                                   This completely replaces any existing template parts.
 * @returns {Function} A modifier function that takes a ThemeJson object and sets its templateParts property.
 *                     This returned function can be used with newThemeJson().
 */
export function withConfigTemplateParts(
  tp: TemplatePartsConfig,
): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.templateParts = tp;
  };
}

/**
 * Creates a modifier function that sets the block patterns configuration for a WordPress theme.json.
 *
 * @param {PatternsConfig} p - The patterns configuration array defining reusable block patterns
 *                             that can be inserted into content areas.
 *                             This completely replaces any existing patterns.
 * @returns {Function} A modifier function that takes a ThemeJson object and sets its patterns property.
 *                     This returned function can be used with newThemeJson().
 */
export function withConfigPatterns(
  p: PatternsConfig,
): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.patterns = p;
  };
}

/**
 * Creates a new WordPress theme.json configuration object with customizable modifications.
 *
 * @param {...Function} mods - An array of modifier functions that each take a ThemeJson object
 *                             and modify it in place. Each function receives the configuration
 *                             object as its argument and can mutate it directly.
 */
export function newThemeJson(
  ...mods: Array<(t: ThemeJson) => void>
): ThemeJson {
  const conf: ThemeJson = {
    version: 2,
    $schema: "https://schemas.wp.org/wp/6.5/theme.json",
    settings: {},
    styles: {},
    customTemplates: [],
    templateParts: [],
    patterns: [],
  };

  mods.forEach((mod) => mod(conf));

  return conf;
}

export const config = {
  create: newThemeJson,
  withCustomTemplates: withConfigCustomTemplates,
  withPatterns: withConfigPatterns,
  withSchema: withConfigSchema,
  withSettings: withConfigSettings,
  withStyles: withConfigStyles,
  withTemplateParts: withConfigTemplateParts,
  withVersion: withConfigVersion,
};
