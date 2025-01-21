import { SettingBlock } from "./definitions/settings.ts";

function newSettingCoreColumn(): SettingBlock<"core/column"> {
  return {
    "core/column": {
      spacing: {
        padding: true,
        margin: true,
      },
      color: {
        background: true,
      },
      dimensions: {
        minHeight: true,
      },
    },
  };
}

export default newSettingCoreColumn;
