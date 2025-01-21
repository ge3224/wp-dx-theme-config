import { CustomTemplates } from "./definitions/custom_templates.ts";
import { Patterns } from "./definitions/patterns.ts";
import { Settings } from "./definitions/settings.ts";
import { Styles } from "./definitions/styles.ts";
import { TemplateParts } from "./definitions/template_parts.ts";
import { ThemeJson } from "./definitions/main.ts";

export function withVersion(n: number): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.version = n;
  };
}

export function withSchema(schema: string): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.$schema = schema;
  };
}

export function withSettings(s: Settings): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.settings = s;
  };
}

export function withStyles(s: Styles): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.styles = s;
  };
}

export function withCustomTemplates(
  ct: CustomTemplates,
): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.customTemplates = ct;
  };
}

export function withTemplateParts(
  tp: TemplateParts,
): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.templateParts = tp;
  };
}

export function withPatterns(
  p: Patterns,
): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.patterns = p;
  };
}

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
