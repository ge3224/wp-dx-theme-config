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

/**
 * Creates a modifier function that adds a settings block with the specified
 * namespace and shape.
 *
 * @template T
 * @param {T} namespace - The unique identifier for the settings block
 * @param {Partial<SettingBlockShape>} settings - The shape configuration for the settings block
 * @returns {function} A function that modifies a SettingsConfig by adding the new settings block
 */
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

/**
 * Creates a modifier function that sets the border settings in a configuration.
 *
 * @param {SettingBorder} sb - The border settings to apply
 * @returns {function} A function that modifies a SettingsConfig by updating its border settings
 */
export function withSettingBorder(
  sb: SettingBorder,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.border = sb;
  };
}

/**
 * Creates a modifier function that sets the color settings in a configuration.
 *
 * @param {SettingColor} sc - The color settings to apply
 * @returns {function} A function that modifies a SettingsConfig by updating its color settings
 */
export function withSettingColor(
  sc: SettingColor,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.color = sc;
  };
}

/**
 * Creates a modifier function that sets custom settings in a configuration.
 *
 * @param {Record<string, unknown>} custom - Custom settings to apply
 * @returns {function} A function that modifies a SettingsConfig by updating its custom settings
 */
export function withSettingCustom(
  custom: Record<string, unknown>,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.custom = custom;
  };
}

/**
 * Creates a modifier function that sets the layout settings in a configuration.
 *
 * @param {SettingLayout} sl - The layout settings to apply
 * @returns {function} A function that modifies a SettingsConfig by updating its layout settings
 */
export function withSettingLayout(
  sl: SettingLayout,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.layout = sl;
  };
}

/**
 * Creates a modifier function that sets the spacing settings in a configuration.
 *
 * @param {SettingSpacing} ss - The spacing settings to apply
 * @returns {function} A function that modifies a SettingsConfig by updating its spacing settings
 */
export function withSettingSpacing(
  ss: SettingSpacing,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.spacing = ss;
  };
}

/**
 * Creates a modifier function that sets the typography settings in a configuration.
 *
 * @param {SettingTypography} st - The typography settings to apply
 * @returns {function} A function that modifies a SettingsConfig by updating its typography settings
 */
export function withSettingTypography(
  st: SettingTypography,
): (s: SettingsConfig) => void {
  return (s: SettingsConfig): void => {
    s.typography = st;
  };
}

/**
 * Creates a new settings configuration by applying multiple modifier functions
 * to a default configuration.
 *
 * @param {...Function} mods - Modifier functions to apply to the settings configuration
 * @returns {SettingsConfig} A new settings configuration with all modifications applied
 */
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

/**
 * Utility object providing settings-related functionality.
 *
 * @property {function} create - Creates a new settings configuration (alias for newSettings)
 * @property {function} withAppearanceTools - Adds appearance tools settings
 * @property {function} withSpacing - Adds spacing settings
 * @property {function} withBlock - Adds a settings block
 * @property {function} withBorder - Adds border settings
 * @property {function} withColor - Adds color settings
 * @property {function} withCustom - Adds custom settings
 * @property {function} withLayout - Adds layout settings
 * @property {function} withTypography - Adds typography settings
 */
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
