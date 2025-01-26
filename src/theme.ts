import {
  CustomTemplatesConfig,
  PatternsConfig,
  SettingsConfig,
  StylesConfig,
  TemplatePartsConfig,
  ThemeJson,
} from "./types.ts";

export function withConfigVersion(n: number): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.version = n;
  };
}

export function withConfigSchema(schema: string): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.$schema = schema;
  };
}

export function withConfigSettings(s: SettingsConfig): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.settings = s;
  };
}

export function withConfigStyles(s: StylesConfig): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.styles = s;
  };
}

export function withConfigCustomTemplates(
  ct: CustomTemplatesConfig,
): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.customTemplates = ct;
  };
}

export function withConfigTemplateParts(
  tp: TemplatePartsConfig,
): (t: ThemeJson) => void {
  return (t: ThemeJson): void => {
    t.templateParts = tp;
  };
}

export function withConfigPatterns(
  p: PatternsConfig,
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
