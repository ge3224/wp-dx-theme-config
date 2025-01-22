export interface SettingBorder {
  color?: boolean;
  style?: boolean;
  width?: boolean;
  radius?: boolean;
}

export interface SettingDuotone {
  name?: string;
  slug?: string;
  colors?: Array<string>;
}

export interface SettngPalette {
  slug?: string;
  name?: string;
  color?: string;
}

export interface SettingGradient {
  name?: string;
  slug?: string;
  gradient?: string;
}

export interface SettingColor {
  background?: boolean;
  custom?: boolean;
  link?: boolean;
  text?: boolean;
  button?: boolean;
  duotone?: Array<SettingDuotone>;
  palette?: Array<SettngPalette>;
  heading?: boolean;
  gradients?: Array<SettingGradient>;
  customDuotone?: boolean;
  customGradient?: boolean;
  defaultDuotone?: boolean;
  defaultPalette?: boolean;
  defaultGradients?: boolean;
}

export interface SettingShadowPreset {
  slug: string;
  name: string;
  shadow: string;
}

export interface SettingShadow {
  presets: Array<SettingShadowPreset>;
  defaultPresets: boolean;
}

export interface SettingLayout {
  allowEditing?: boolean;
  wideSize?: string;
  contentSize?: string;
  allowCustomContentAndWideSize?: boolean;
}

export type SettingSpacingUnit = "px" | "em" | "rem" | "vh" | "vw" | "%";

export type SettingSpacingScaleUnit =
  | SettingSpacingUnit
  | "svw"
  | "lvw"
  | "dvw"
  | "svh"
  | "lvh"
  | "dvh"
  | "vi"
  | "svi"
  | "lvi"
  | "dvi"
  | "vb"
  | "svb"
  | "lvb"
  | "dvb"
  | "vmin"
  | "svmin"
  | "lvmin"
  | "dvmin"
  | "vmax"
  | "svmax"
  | "lvmax"
  | "dvmax";

export type SettingSpacingScaleOperator = "*" | "+";

export interface SettingSpacingScale {
  unit?: SettingSpacingScaleUnit;
  steps?: number;
  operator?: SettingSpacingScaleOperator;
  increment?: number;
  mediumStep?: number;
}

export interface SettingSpacingSize {
  name: string;
  size: string;
  slug: string;
}

export interface SettingSpacing {
  units?: Array<SettingSpacingUnit>;
  margin?: boolean;
  padding?: boolean;
  blockGap?: boolean | null;
  spacingSizes?: Array<SettingSpacingSize>;
  spacingScale?: SettingSpacingScale;
  customSpacingSize?: boolean;
}

export interface SettingLightbox {
  enabled?: boolean;
  allowEditing?: boolean;
}

export interface SettingPosition {
  sticky?: boolean;
}

export interface SettingBackground {
  backgroundSize?: boolean;
  backgroundImage?: boolean;
}

export interface SettingDimensions {
  minHeight?: boolean;
  aspectRatio?: boolean;
}

export interface SettingFluid {
  min: string;
  max: string;
}

export interface SettingFontSize {
  name?: string;
  slug?: string;
  size?: string;
  fluid?: boolean | SettingFluid;
}

export type SettingFontDisplay =
  | "auto"
  | "block"
  | "fallback"
  | "swap"
  | "optional";

export interface SettingFontFace {
  fontFamily?: string;
  src?: Array<string>;
  fontStyle?: "normal" | string;
  fontWeight?: "400" | string;
  sizeAdjust?: string;
  fontDisplay?: SettingFontDisplay;
}

export interface SettingFontFamily {
  slug?: string;
  name?: string;
  fontFace?: Array<SettingFontFace>;
  fontFamily?: string;
}

export interface SettingTypography {
  fluid?: boolean;
  dropCap?: boolean;
  fontStyle?: boolean;
  fontSizes?: Array<SettingFontSize>;
  fontWeight?: boolean;
  lineHeight?: boolean;
  textColumns?: boolean;
  writingMode?: boolean;
  fontFamilies?: Array<SettingFontFamily>;
  letterSpacing?: boolean;
  textTransform?: boolean;
  customFontSize?: boolean;
  textDecoration?: boolean;
}

export type SettingBlockShape = {
  color?: SettingColor;
  border?: SettingBorder;
  shadow?: SettingShadow;
  layout?: SettingLayout;
  custom?: Record<string, unknown>;
  spacing?: SettingSpacing;
  lightbox?: SettingLightbox;
  position?: SettingPosition;
  background?: SettingBackground;
  dimensions?: SettingDimensions;
  typography?: SettingTypography;
  appearanceTools?: boolean;
};

export type SettingBlock<T extends string> = {
  [P in T]: SettingBlockShape;
};

export type SettingBlocks<K extends string = string> = {
  [Key in K]: SettingBlock<Key>;
};

// export type SettingBlocks = {
//   [key: string]: SettingBlock<string>;
// };

export interface Settings {
  appearanceTools?: boolean;
  blocks?: SettingBlocks;
  border?: SettingBorder;
  color?: SettingColor;
  custom?: Record<string, unknown>;
  layout?: SettingLayout;
  spacing?: SettingSpacing;
  typography?: SettingTypography;
}
