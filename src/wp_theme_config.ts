import { ThemeJson } from "~/src/definitions/main.ts";
import newSettings from "~/src/settings/main.ts";
import newStyles from "~/src/styles/main.ts";
import newCustomTemplates from "~/src/custom_templates/main.ts";
import newTemplateParts from "~/src/template_parts/main.ts";
import newPatterns from "~/src/patterns/main.ts";

export function newThemeJson(...mods: Array<(t: ThemeJson) => void>) {
  const conf: ThemeJson = {
    version: 2,
    $schema: "https://schemas.wp.org/wp/6.5/theme.json",
    settings: newSettings(),
    styles: newStyles(),
    customTemplates: newCustomTemplates(),
    templateParts: newTemplateParts(),
    patterns: newPatterns(),
  };

  mods.forEach((mod) => mod(conf));

  return conf;
}
