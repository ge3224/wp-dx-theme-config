import { assert } from "@std/assert";
import { newThemeJson } from "./wp_theme_config.ts";

Deno.test("default construction", () => {
  const tests = [
    {
      name: "default constructor",
      mods: [],
      expected: {
        version: 2,
        $schema: "https://schemas.wp.org/wp/6.5/theme.json",
        settings: {},
        styles: {},
        customTemplates: [],
        templateParts: [],
        patterns: [],
      },
    },
  ];

  for (const { name, mods, expected } of tests) {
    const result = newThemeJson(...mods);
    assert(result.version === expected.version, `${name} - version`);
    assert(result.$schema === expected.$schema, `${name} - schema`);
    assert(
      JSON.stringify(result.settings) === JSON.stringify(expected.settings),
      `${name} - settings`,
    );
    assert(
      JSON.stringify(result.styles) === JSON.stringify(expected.styles),
      `${name} - styles`,
    );
    assert(
      JSON.stringify(result.customTemplates) ===
        JSON.stringify(expected.customTemplates),
      `${name} - custom templates`,
    );
    assert(
      JSON.stringify(result.templateParts) ===
        JSON.stringify(expected.templateParts),
      `${name} - template parts`,
    );
    assert(
      JSON.stringify(result.patterns) ===
        JSON.stringify(expected.patterns),
      `${name} - patterns`,
    );
  }
});
