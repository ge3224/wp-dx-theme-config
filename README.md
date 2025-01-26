# wp-dx-theme-config

Craft WordPress theme configurations using the full power of TypeScript: split
configs, leverage functions, iterate over arrays, and even throw in some
comments. Use your tools and tame that unwieldy `theme.json` file.

## Usage Example

```typescript
import {
  newSettings,
  newStyles,
  newThemeJson,
  ThemeJson,
  withConfigSettings,
  withConfigStyles,
  withSettingAppearanceTools,
  withSettingSpacing,
  withStyleElement,
} from "../mod.ts";
import { withSettingTypography } from "../src/settings.ts";

function config(): ThemeJson {
  return newThemeJson(
    withConfigSettings(
      newSettings(
        withSettingAppearanceTools(true),
        withSettingSpacing({ padding: true, margin: true }),
        withSettingTypography({ customFontSize: true, fontWeight: true }),
      ),
    ),
    withConfigStyles(
      newStyles(
        withStyleElement("button", {
          color: { text: "#ffffff", background: "#000000" },
          ":hover": { color: { text: "#000000", background: "#fff47b" } },
        }, true),
      ),
    ),
  );
}

async function writeJson() {
  try {
    await Deno.writeTextFile(
      "theme.json",
      JSON.stringify(config(), null, 2),
    );
    console.log("✓ theme.json updated");
  } catch (error) {
    console.error("Failed to write theme.json:", error);
  }
}

if (import.meta.main) {
  await writeJson();
}
```

## Inspiration

Inspired by Anton P.'s article [How to Split Theme.json into Multiple Files with WordPress](https://fullstackdigital.io/blog/split-theme-json-into-multiple-files-with-wordpress) - solving the challenge of managing complex theme configurations.
