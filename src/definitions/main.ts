import { Settings } from "./settings.ts";
import { Styles } from "./styles.ts";
import { CustomTemplates } from "./custom_templates.ts";
import { TemplateParts } from "./template_parts.ts";
import { Patterns } from "./patterns.ts";

export type ThemeJson = {
  $schema: string;
  version: number;
  settings: Settings;
  styles: Styles;
  customTemplates: CustomTemplates;
  templateParts: TemplateParts;
  patterns: Patterns;
};
