import { SettingBlock } from "~/src/definitions/settings.ts";

function newSettingCoreCover(): SettingBlock<"core/cover"> {
  return {
    "core/cover": {
      spacing: {
        padding: true,
        blockGap: true,
      },
    },
  };
}

export default newSettingCoreCover;
