import { SettingBlock } from "../../../definitions/settings.ts";

function newSettingCoreSeparator(): SettingBlock<"core/separator"> {
  return {
    "core/separator": {
      color: {
        background: true,
      },
      spacing: {
        margin: true,
      },
    },
  };
}

export default newSettingCoreSeparator;
