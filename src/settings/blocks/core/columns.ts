import { SettingBlock } from "~/src/definitions/settings.ts";

export default function newSettingCoreColumns(): SettingBlock<"core/columns"> {
  return {
    "core/columns": {
      spacing: {
        margin: true,
        padding: true,
      },
    },
  };
}
