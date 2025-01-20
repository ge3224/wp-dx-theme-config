import { Settings } from "~/src/definitions/settings.ts";
import { Styles } from "~/src/definitions/styles.ts";
import { CustomTemplates } from "~/src/definitions/custom_templates.ts";
import { TemplateParts } from "~/src/definitions/template_parts.ts";
import { Patterns } from "~/src/definitions/patterns.ts";

export interface ThemeJson {
  $schema: string;
  version: number;
  settings: Settings;
  styles: Styles;
  customTemplates: CustomTemplates;
  templateParts: TemplateParts;
  patterns: Patterns;
}
