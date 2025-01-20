import { assert } from "@std/assert";
import { newThemeJson } from "~/src/wp_theme_config.ts";

Deno.test("default construction", () => {
  const tests = [
    {
      name: "default constructor",
      mods: [],
      expected: {
        version: 2,
        $schema: "https://schemas.wp.org/wp/6.5/theme.json",
        settings: { setting1: true, setting2: "value" },
        styles: { style1: "bold", style2: "italic" },
        customTemplates: { template1: "header", template2: "footer" },
        templateParts: { part1: "nav", part2: "sidebar" },
        patterns: { pattern1: "stripe", pattern2: "dots" },
      },
    },
  ];

  for (const { name, mods, expected } of tests) {
    const result = newThemeJson(...mods);
    assert(result.version === expected.version, `${name} - version`);
    assert(result.$schema === expected.$schema, `${name} - schema`);
  }
});
