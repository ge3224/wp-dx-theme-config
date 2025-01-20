import { SettingBlock } from "~/src/definitions/settings.ts";

function newSettingCoreButton(): SettingBlock<"core/button"> {
  return {
    "core/button": {
      spacing: {
        padding: true,
        margin: true,
      },
      border: {
        radius: true,
      },
      color: {
        background: true,
      },
    },
  };
}

export default newSettingCoreButton;
