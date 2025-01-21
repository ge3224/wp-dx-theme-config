import { SettingBlocks } from "./definitions/settings.ts";
import newSettingCoreButton from "./settings/blocks/core/button.ts";
import newSettingCoreCover from "./settings/blocks/core/cover.ts";
import newSettingCoreColumns from "./settings/blocks/core/columns.ts";
import newSettingCoreColumn from "./settings/blocks/core/column.ts";
import newSettingCoreDetails from "./settings/blocks/core/details.ts";
import newSettingCoreGroup from "./settings/blocks/core/group.ts";
import newSettingCorePostTemplate from "./settings/blocks/core/post_template.ts";
import newSettingCoreNavigationLink from "./settings/blocks/core/navigation_link.ts";
import newSettingCorePullquote from "./settings/blocks/core/pullquote.ts";
import newSettingCoreSeparator from "./settings/blocks/core/separator.ts";

export default function newSettingBlocks(): SettingBlocks {
  return {
    blocks: {
      ...newSettingCoreButton(),
      ...newSettingCoreCover(),
      ...newSettingCoreColumns(),
      ...newSettingCoreColumn(),
      ...newSettingCoreDetails(),
      ...newSettingCoreGroup(),
      ...newSettingCorePostTemplate(),
      ...newSettingCoreNavigationLink(),
      ...newSettingCorePullquote(),
      ...newSettingCoreSeparator(),
    },
  };
}
