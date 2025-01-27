# Wrangle that hulking `theme.json` file with TypeScript

Craft WordPress theme configurations using the full power of TypeScript: split
configs, leverage functions, iterate over arrays, and even throw in some
comments.

[![JSR](https://jsr.io/badges/@wp-dx/theme-config)](https://jsr.io/@wp-dx/theme-config)
[![NPM Version](https://img.shields.io/npm/v/%40wp-dx%2Ftheme-config)](https://www.npmjs.com/package/@wp-dx/theme-config)
[![GitHub License](https://img.shields.io/github/license/ge3224/wp-dx-theme-config)](https://github.com/ge3224/wp-dx-theme-config/blob/main/LICENSE)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ge3224/wp-dx-theme-config/publish.yml)

## Usage Example

```ts
import { config, settings, styles } from "@wp-dx/theme-config";

async function creatThemeJson() {
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
```

### Deno

```ts
// Deno (assuming write permission to the current directory)
async function writeThemeJsonDeno() {
  try {
    await Deno.writeTextFile(
      "theme.json",
      JSON.stringify(themeJson, null, 2),  // see above snippet for themeJson implementation
    );
    console.log("✓ theme.json updated");
  } catch (error) {
    console.error("Failed to write theme.json:", error);
  }
}

if (import.meta.main) {
  await writeThemeJsonDeno();
}
```

### Node.js

```js
const { createThemeJson } = require('./src/theme-generator'); 
const fs = require('fs');

function writeThemeJsonNode() {
  const themeJson = createThemeJson();
  try {
    fs.writeFileSync("theme.json", JSON.stringify(themeJson, null, 2));  // see above snippet for themeJson implementation
    console.log("✓ theme.json updated");
  } catch (error) {
    console.error("Failed to write theme.json:", error);
  }
}

writeThemeJsonNode();
```

### Bun

```ts
import { createThemeJson } from './src/theme-generator'; 

async function writeThemeJsonBun() {
  const themeJson = createThemeJson();
  try {
    await Bun.file("theme.json").write(JSON.stringify(themeJson, null, 2)); // see above snippet for themeJson implementation
    console.log("✓ theme.json updated");
  } catch (error) {
    console.error("Failed to write theme.json:", error);
  }
}

await writeThemeJsonBun();
```

## Installation

To install the library:

```bash
deno add jsr:@wp-dx/theme-config
```

```bash
npm install @wp-dx/theme-config
```

## Project Examples

The [`examples`](https://github.com/ge3224/wp-dx-theme-config/tree/main/examples)
directory contains example projects demonstrating usage in different environments:

- **basic.ts:** A basic usage example demonstrating theme configuration creation.
- **bun:** A Bun project showcasing theme configuration usage with Bun-specific considerations.
- **nodejs:** A Node.js project demonstrating theme configuration usage with
Node.js-specific considerations.

## Contributing

Contributions to this project are welcome! Please see the
[CONTRIBUTING.md](https://github.com/ge3224/wp-dx-theme-config/tree/main/CONTRIBUTING.md)
file for details on how to submit pull requests and code contributions.

## Inspiration

Inspired by the article [How to Split Theme.json into Multiple Files with WordPress](https://fullstackdigital.io/blog/split-theme-json-into-multiple-files-with-wordpress).
