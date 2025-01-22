import {
  SettingBlocks,
  SettingBlockShape,
} from "../../definitions/settings.ts";
import newSettingCoreButton from "../../settings/blocks/core/button.ts";
import newSettingCoreCover from "../../settings/blocks/core/cover.ts";
import newSettingCoreColumns from "../../settings/blocks/core/columns.ts";
import newSettingCoreColumn from "../../settings/blocks/core/column.ts";
import newSettingCoreDetails from "../../settings/blocks/core/details.ts";
import newSettingCoreGroup from "../../settings/blocks/core/group.ts";
import newSettingCorePostTemplate from "../../settings/blocks/core/post_template.ts";
import newSettingCoreNavigationLink from "../../settings/blocks/core/navigation_link.ts";
import newSettingCorePullquote from "../../settings/blocks/core/pullquote.ts";
import newSettingCoreSeparator from "../../settings/blocks/core/separator.ts";
import { SettingBlock } from "../../../mod.ts";

export function withSettingBlockShape<T extends string>(
  settings: Partial<SettingBlockShape>,
): (sb: SettingBlock<T>) => void {
  return (sb: SettingBlock<T>): void => {
    const key = Object.keys(sb)[0] as keyof typeof sb;

    if (!key) {
      console.warn("Settings block is empty, no key found.");
      return;
    }

    const shape = sb[key];

    if (shape) {
      sb[key] = {
        ...shape,
        ...settings,
      };
    }
  };
}

export function newSettingBlock<T extends string>(
  ns: T,
  ...mods: Array<(sb: SettingBlock<T>) => void>
): SettingBlock<T> {
  const sb = { [ns]: {} } as SettingBlock<T>;
  mods.forEach((mod) => mod(sb));
  return sb;
}

export function newSettingBlocks(): SettingBlocks {
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
