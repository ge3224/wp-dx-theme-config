import * as fs from "fs";

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

function writeThemeJson() {
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

  fs.writeFileSync("theme.json", JSON.stringify(theme));
}

writeThemeJson();
