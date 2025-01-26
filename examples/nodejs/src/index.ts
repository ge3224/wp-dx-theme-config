import {
  newSettings,
  newStyles,
  newThemeJson,
  withConfigSettings,
  withConfigStyles,
  withSettingAppearanceTools,
  withSettingSpacing,
  withSettingTypography,
  withStyleElement,
} from "@wp-dx/theme-config";
import { writeFile } from "fs/promises";
import { join } from "path";

async function writeThemeJson() {
  const theme = JSON.stringify(
    newThemeJson(
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
    ),
  );

  const filePath = join(process.cwd(), "theme.json");

  try {
    await writeFile(filePath, theme);
  } catch (error) {
    console.error("Error writing theme.json:", error);
  }
}

await writeThemeJson();
