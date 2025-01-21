import { SettingBlock } from "./definitions/settings.ts";

function newSettingCorePostTemplate(): SettingBlock<"core/post-template"> {
  return {
    "core/post-template": {
      appearanceTools: true,
      spacing: {
        margin: true,
        padding: true,
      },
    },
  };
}

export default newSettingCorePostTemplate;
