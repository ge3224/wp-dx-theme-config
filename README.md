# wp-ts-theme-config

Craft WordPress theme configurations using the full power of TypeScript: split
configs, leverage functions, iterate over arrays, and even throw in some
comments. Use your tools and tame that unwieldy `theme.json` file.

While JSON schemas offer some validation, TypeScript provides a superior
developer experience with:

- Advanced IDE support
- Compile-time type checking
- Modular configuration management

## Inspiration

Inspired by Anton P.'s article [How to Split Theme.json into Multiple Files with WordPress](https://fullstackdigital.io/blog/split-theme-json-into-multiple-files-with-wordpress) - solving the challenge of managing complex theme configurations.

## Usage Example

```typescript
const myThemeJson = createThemeJson({
  settings: {
    color: {
      palette: settings.color.palette({
        colors: [
          { name: "Primary", slug: "primary" },
          { name: "Secondary", slug: "secondary" },
        ],
      }),
    },
    typography: {
      fontSizes: settings.typography.fontSizes({
        sizes: [
          { name: "Small", slug: "small", size: "0.8rem" },
          { name: "Medium", slug: "medium", size: "1rem" },
        ],
      }),
    },
  },
  spacing: {
    units: spacing.units({
      sizes: [
        { name: "Small", slug: "small", size: "0.5rem" },
        { name: "Medium", slug: "medium", size: "1rem" },
      ],
    }),
  },
});

// Output theme configuration
await Deno.writeFile(
  "./theme.json", 
  new TextEncoder().encode(JSON.stringify(myThemeJson, null, 2))
);
```

## Quick Start

### Prerequisites

- Deno installed on your system

### Installation

1. Import the library in your theme's TypeScript file:

```typescript
import { createThemeJson, settings, spacing } from "library-path";
```

## Available Tools

- `createThemeJson()`: Core function for building theme configurations
- `settings`: Helpers for color, typography, layout settings
- `spacing`: Tools for defining spacing units
- **Coming Soon:** Block customization functions

## Contribution

We welcome contributions! Open an issue or submit a pull request on our GitHub repository.

## License

MIT License

**Documentation:** For comprehensive details, consult our full documentation.
