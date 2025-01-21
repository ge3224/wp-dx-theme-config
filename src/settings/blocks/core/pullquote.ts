import { SettingBlock } from "../../../definitions/settings.ts";

function newSettingCorePullquote(): SettingBlock<"core/pullquote"> {
  return {
    "core/pullquote": {
      border: {
        color: true,
        radius: true,
        style: true,
        width: true,
      },
    },
  };
}

export default newSettingCorePullquote;
