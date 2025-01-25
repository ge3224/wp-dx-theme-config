import {
  SettingBlock,
  SettingBlockShape,
  SettingBorder,
  SettingColor,
  SettingLayout,
  Settings,
  SettingSpacing,
  SettingTypography,
} from "./types.ts";

export function newSettingCustom(): Record<string, unknown> {
  return {};
}

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
export function withAppearanceTools(
  use: boolean,
): (s: Settings) => void {
  return (s: Settings): void => {
    s.appearanceTools = use;
  };
}

export function withSettingBlock<T extends string>(
  namespace: T,
  settings: Partial<SettingBlockShape>,
): (s: Settings) => void {
  return (s: Settings): void => {
    if (!s.blocks) {
      s.blocks = {};
    }

    if (namespace in s.blocks) {
      console.warn(
        `A setting block with a key of "${namespace}" already exists`,
      );
      return;
    }

    const sb = newSettingBlock(namespace, withSettingBlockShape(settings));
    s.blocks = { ...s.blocks, ...sb };
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
