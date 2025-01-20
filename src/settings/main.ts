import { Settings } from "~/src/definitions/settings.ts";
import newSettingBlocks from "~/src/settings/blocks/main.ts";
import newSettingBorder from "~/src/settings/border.ts";
import newSettingColor from "~/src/settings/color.ts";
import newSettingCustom from "~/src/settings/custom/main.ts";
import newSettingLayout from "~/src/settings/layout.ts";
import newSettingSpacing from "~/src/settings/spacing.ts";
import newSettingTypography from "~/src/settings/typography.ts";

function newSettings(...mods: Array<(s: Settings) => void>): Settings {
  const s: Settings = {
    appearanceTools: true,
    ...newSettingBlocks(),
    border: newSettingBorder(),
    color: newSettingColor(),
    custom: newSettingCustom(),
    layout: newSettingLayout(),
    spacing: newSettingSpacing(),
    typography: newSettingTypography(),
    // useRootPaddingAwareAlignments
  };

  mods.forEach((mod) => mod(s));

  return s;
}

export default newSettings;
