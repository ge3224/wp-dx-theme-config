import {
  newSettings,
  newStyles,
  newThemeJson,
  ThemeJson,
  withConfigSettings,
  withConfigStyles,
  withSettingAppearanceTools,
  withSettingColor,
  withSettingSpacing,
  withStyleElement,
} from "../mod.ts";

function config(): ThemeJson {
  const settings = newSettings(
    withSettingAppearanceTools(true),
    withSettingColor({
      background: true,
      custom: false,
      defaultGradients: true,
      defaultPalette: true,
      text: true,
    }),
    withSettingSpacing({
      blockGap: true,
      customSpacingSize: true,
      margin: true,
      spacingScale: {
        operator: "*",
        increment: 1.5,
        steps: 7,
        mediumStep: 1.5,
        unit: "rem",
      },
      padding: true,
      units: ["px", "rem", "vh", "vw", "%"],
    }),
  );

  const styles = newStyles(
    withStyleElement(
      "link",
      {
        ":hover": {
          color: { text: "blue" },
          typography: { textDecoration: "underline" },
        },
      },
      true,
    ),
  );

  return newThemeJson(withConfigSettings(settings), withConfigStyles(styles));
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
