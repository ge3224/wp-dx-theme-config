import { SettingBlock } from "~/src/definitions/settings.ts";

function newSettingCoreGroup(): SettingBlock<"core/group"> {
  return {
    "core/group": {
      spacing: {
        blockGap: true,
        margin: true,
        padding: true,
      },
      color: {
        background: true,
      },
    },
  };
}

export default newSettingCoreGroup;
