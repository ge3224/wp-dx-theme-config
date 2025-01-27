# Wrangle that hulking `theme.json` file with TypeScript

![GitHub License](https://img.shields.io/github/license/ge3224/wp-dx-theme-config)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ge3224/wp-dx-theme-config/publish.yml)
[![JSR](https://jsr.io/badges/@wp-dx/theme-config)](https://jsr.io/@wp-dx/theme-config)

Craft WordPress theme configurations using the full power of TypeScript: split configs, leverage functions, iterate over arrays, and even throw in some comments.

## Usage Example

```typescript
import { config, settings, styles } from "@wp-dx/theme-config";

async function writeJson() {
  const themeJson = config.create(
    config.withVersion(2),
    config.withSchema("https://schemas.wp.org/wp/6.5/theme.json"),
    config.withSettings(
      settings.create(
        settings.withAppearanceTools(true),
        settings.withSpacing({ padding: true, margin: true }),
        settings.withTypography({ customFontSize: true, fontWeight: true }),
      ),
    ),
    config.withStyles(styles.create(
      styles.withElement("button", {
        color: { text: "#ffffff", background: "#000000" },
        ":hover": { color: { text: "#000000", background: "#fff47b" } },
      }, true),
    )),
  );

  try {
    await Deno.writeTextFile(
      "theme.json",
      JSON.stringify(themeJson, null, 2),
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

Inspired by the article [How to Split Theme.json into Multiple Files with WordPress](https://fullstackdigital.io/blog/split-theme-json-into-multiple-files-with-wordpress).
