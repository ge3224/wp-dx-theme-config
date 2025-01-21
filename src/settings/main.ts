import { Settings } from "./definitions/settings.ts";
import newSettingBlocks from "./settings/blocks/main.ts";
import newSettingBorder from "./settings/border.ts";
import newSettingColor from "./settings/color.ts";
import newSettingCustom from "./settings/custom/main.ts";
import newSettingLayout from "./settings/layout.ts";
import newSettingSpacing from "./settings/spacing.ts";
import newSettingTypography from "./settings/typography.ts";

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
