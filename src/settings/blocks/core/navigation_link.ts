import { SettingBlock } from "~/src/definitions/settings.ts";

function newSettingCoreNavigationLink(): SettingBlock<"core/navigation-link"> {
  return {
    "core/navigation-link": {
      color: {
        link: true,
      },
    },
  };
}

export default newSettingCoreNavigationLink;
