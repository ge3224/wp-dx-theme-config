import { SettingBlock } from "../../../definitions/settings.ts";
import newSettingTypography from "../../../settings/typography.ts";

function newSettingCoreDetails(): SettingBlock<"core/details"> {
  return {
    "core/details": {
      spacing: {
        padding: true,
        margin: true,
      },
      typography: newSettingTypography(),
    },
  };
}

export default newSettingCoreDetails;
