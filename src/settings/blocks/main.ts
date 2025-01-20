import { SettingBlocks } from "~/src/definitions/settings.ts";
import newSettingCoreButton from "~/src/settings/blocks/core/button.ts";
import newSettingCoreCover from "~/src/settings/blocks/core/cover.ts";
import newSettingCoreColumns from "~/src/settings/blocks/core/columns.ts";
import newSettingCoreColumn from "~/src/settings/blocks/core/column.ts";
import newSettingCoreDetails from "~/src/settings/blocks/core/details.ts";
import newSettingCoreGroup from "~/src/settings/blocks/core/group.ts";
import newSettingCorePostTemplate from "~/src/settings/blocks/core/post_template.ts";
import newSettingCoreNavigationLink from "~/src/settings/blocks/core/navigation_link.ts";
import newSettingCorePullquote from "~/src/settings/blocks/core/pullquote.ts";
import newSettingCoreSeparator from "~/src/settings/blocks/core/separator.ts";

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
