import { SettingSpacing } from "../definitions/settings.ts";
import { SettingTypography } from "../definitions/settings.ts";
import {
  SettingBlock,
  SettingBorder,
  SettingColor,
  SettingLayout,
  Settings,
} from "../definitions/settings.ts";

export function withAppearanceTools(
  use: boolean,
): (s: Settings) => void {
  return (s: Settings): void => {
    s.appearanceTools = use;
  };
}

export function withSettingBlock<T extends string>(
  key: string,
  sb: SettingBlock<T>,
): (s: Settings) => void {
  return (s: Settings): void => {
    if (!s.blocks) {
      s.blocks = {};
    }

    if (key in s.blocks) {
      console.warn(`A setting block with a key of "${key}" already exists`);
    } else {
      s.blocks = { ...s.blocks, ...sb };
    }
  };
}

export function withSettingBorder(sb: SettingBorder): (s: Settings) => void {
  return (s: Settings): void => {
    s.border = sb;
  };
}

export function withSettingColor(sc: SettingColor): (s: Settings) => void {
  return (s: Settings): void => {
    s.color = sc;
  };
}

export function withSettingCustom(
  custom: Record<string, unknown>,
): (s: Settings) => void {
  return (s: Settings): void => {
    s.custom = custom;
  };
}

export function withSettingLayout(sl: SettingLayout): (s: Settings) => void {
  return (s: Settings): void => {
    s.layout = sl;
  };
}

export function withSettingSpacing(ss: SettingSpacing): (s: Settings) => void {
  return (s: Settings): void => {
    s.spacing = ss;
  };
}

export function withSettingTypography(
  st: SettingTypography,
): (s: Settings) => void {
  return (s: Settings): void => {
    s.typography = st;
  };
}

export function newSettings(...mods: Array<(s: Settings) => void>): Settings {
  const s: Settings = {
    appearanceTools: true,
    blocks: {},
    border: {},
    color: {},
    custom: {},
    layout: {},
    spacing: {},
    typography: {},
    // useRootPaddingAwareAlignments
  };

  mods.forEach((mod) => mod(s));

  return s;
}
