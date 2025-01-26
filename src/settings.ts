import type {
  SettingBlock,
  SettingBlockShape,
  SettingBorder,
  SettingColor,
  SettingLayout,
  SettingsConfig,
  SettingSpacing,
  SettingTypography,
} from "./types.ts";

// function newSettingCustom(): Record<string, unknown> {
//   return {};
// }

function withSettingBlockShape<T extends string>(
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

function newSettingBlock<T extends string>(
  ns: T,
  ...mods: Array<(sb: SettingBlock<T>) => void>
): SettingBlock<T> {
  const sb = { [ns]: {} } as SettingBlock<T>;
  mods.forEach((mod) => mod(sb));
  return sb;
}
export function withSettingAppearanceTools(
  use: boolean,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.appearanceTools = use;
  };
}

export function withSettingBlock<T extends string>(
  namespace: T,
  settings: Partial<SettingBlockShape>,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
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

export function withSettingBorder(
  sb: SettingBorder,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.border = sb;
  };
}

export function withSettingColor(
  sc: SettingColor,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.color = sc;
  };
}

export function withSettingCustom(
  custom: Record<string, unknown>,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.custom = custom;
  };
}

export function withSettingLayout(
  sl: SettingLayout,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.layout = sl;
  };
}

export function withSettingSpacing(
  ss: SettingSpacing,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.spacing = ss;
  };
}

export function withSettingTypography(
  st: SettingTypography,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.typography = st;
  };
}

export function newSettings(
  ...mods: Array<(s: SettingsConfig) => void>
): SettingsConfig {
  const s: SettingsConfig = {
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

export const settings = {
  create: newSettings,
  withAppearanceTools: withSettingAppearanceTools,
  withSpacing: withSettingSpacing,
  withBlock: withSettingBlock,
  withBorder: withSettingBorder,
  withColor: withSettingColor,
  withCustom: withSettingCustom,
  withLayout: withSettingLayout,
  withTypography: withSettingTypography,
};
