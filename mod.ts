export type { ThemeJson } from "./src/definitions/main.ts";
export {
  newThemeJson,
  withCustomTemplates,
  withPatterns,
  withSchema,
  withSettings,
  withStyles,
  withTemplateParts,
  withVersion,
} from "./src/wp_theme_config.ts";

export type { Styles } from "./src/definitions/styles.ts";
export {
  newStyles,
  withCss,
  withStyleBlocks,
  withStyleBorder,
  withStyleColor,
  withStyleDimension,
  withStyleElements,
  withStyleFilter,
  withStyleOutline,
  withStyleShadow,
  withStyleSpacing,
  withStyleTypography,
} from "./src/styles/main.ts";

export type {
  CustomTemplate,
  CustomTemplates,
} from "./src/definitions/custom_templates.ts";
export {
  newCustomTemplates,
  withCustomTemplate,
} from "./src/custom_templates/main.ts";

export type {
  TemplatePart,
  TemplateParts,
} from "./src/definitions/template_parts.ts";
export {
  newTemplateParts,
  withTemplatePart,
} from "./src/template_parts/main.ts";

export type { Pattern, Patterns } from "./src/definitions/patterns.ts";
export { newPatterns, withPattern } from "./src/patterns/main.ts";
