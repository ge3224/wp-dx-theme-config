export type CustomTemplate = {
  name: string;
  title: string;
  postTypes?: Array<string>;
};

export type CustomTemplatesConfig = Array<CustomTemplate>;

export type Pattern = string;

export type PatternsConfig = Array<string>;

export type SettingBorder = {
  color?: boolean;
  style?: boolean;
  width?: boolean;
  radius?: boolean;
};

export type SettingDuotone = {
  name?: string;
  slug?: string;
  colors?: Array<string>;
};

export type SettngPalette = {
  slug?: string;
  name?: string;
  color?: string;
};

export type SettingGradient = {
  name?: string;
  slug?: string;
  gradient?: string;
};

export type SettingColor = {
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
};

export type SettingShadowPreset = {
  slug: string;
  name: string;
  shadow: string;
};

export type SettingShadow = {
  presets: Array<SettingShadowPreset>;
  defaultPresets: boolean;
};

export type SettingLayout = {
  allowEditing?: boolean;
  wideSize?: string;
  contentSize?: string;
  allowCustomContentAndWideSize?: boolean;
};

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

export type SettingSpacingScale = {
  unit?: SettingSpacingScaleUnit;
  steps?: number;
  operator?: SettingSpacingScaleOperator;
  increment?: number;
  mediumStep?: number;
};

export type SettingSpacingSize = {
  name: string;
  size: string;
  slug: string;
};

export type SettingSpacing = {
  units?: Array<SettingSpacingUnit>;
  margin?: boolean;
  padding?: boolean;
  blockGap?: boolean | null;
  spacingSizes?: Array<SettingSpacingSize>;
  spacingScale?: SettingSpacingScale;
  customSpacingSize?: boolean;
};

export type SettingLightbox = {
  enabled?: boolean;
  allowEditing?: boolean;
};

export type SettingPosition = {
  sticky?: boolean;
};

export type SettingBackground = {
  backgroundSize?: boolean;
  backgroundImage?: boolean;
};

export type SettingDimensions = {
  minHeight?: boolean;
  aspectRatio?: boolean;
};

export type SettingFluid = {
  min: string;
  max: string;
};

export type SettingFontSize = {
  name?: string;
  slug?: string;
  size?: string;
  fluid?: boolean | SettingFluid;
};

export type SettingFontDisplay =
  | "auto"
  | "block"
  | "fallback"
  | "swap"
  | "optional";

export type SettingFontFace = {
  fontFamily?: string;
  src?: Array<string>;
  fontStyle?: "normal" | string;
  fontWeight?: "400" | string;
  sizeAdjust?: string;
  fontDisplay?: SettingFontDisplay;
};

export type SettingFontFamily = {
  slug?: string;
  name?: string;
  fontFace?: Array<SettingFontFace>;
  fontFamily?: string;
};

export type SettingTypography = {
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
};

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

export type SettingBlocksConfig<K extends string = string> = {
  [Key in K]: SettingBlock<Key>;
};

export type SettingsConfig = {
  appearanceTools?: boolean;
  blocks?: SettingBlocksConfig;
  border?: SettingBorder;
  color?: SettingColor;
  custom?: Record<string, unknown>;
  layout?: SettingLayout;
  spacing?: SettingSpacing;
  typography?: SettingTypography;
};

export type StyleValue = string | { ref: string };

export type StyleBorderSide = {
  width?: StyleValue;
  style?: StyleValue;
  color?: StyleValue;
};

export type StyleBorderRadius = {
  ref?: string;
  topLeft?: StyleValue;
  topRight?: StyleValue;
  bottomLeft?: StyleValue;
  bottomRight?: StyleValue;
};

export type StyleBorder = {
  top?: StyleBorderSide;
  left?: StyleBorderSide;
  color?: StyleValue;
  style?: StyleValue;
  width?: StyleValue;
  right?: StyleBorderSide;
  radius?: string | StyleBorderRadius;
  bottom?: StyleBorderSide;
};

export type StyleColor = {
  text?: StyleValue;
  gradient?: StyleValue;
  background?: StyleValue;
};

export type StyleDimension = {
  minHeight?: StyleValue;
  aspectRatio?: StyleValue;
};

export type StyleFilter = {
  duotone: object;
};

export type StyleOutline = {
  color?: StyleValue;
  style?: StyleValue;
  width?: StyleValue;
  offset?: StyleValue;
};

export type StyleSpacingSide = {
  top: StyleValue;
  right: StyleValue;
  bottom: StyleValue;
  left: StyleValue;
};

export type StyleSpacing = {
  margin?: StyleSpacingSide;
  padding?: StyleSpacingSide;
  blockGap?: StyleValue;
};

export type StyleTypography = {
  fontSize?: StyleValue;
  fontStyle?: StyleValue;
  fontFamily?: StyleValue;
  fontWeight?: StyleValue;
  lineHeight?: StyleValue;
  textColumns?: string;
  writingMode?: StyleValue;
  letterSpacing?: StyleValue;
  textTransform?: StyleValue;
  textDecoration?: StyleValue;
};

export type StyleElementShapeCore = {
  border?: StyleBorder;
  color?: StyleColor;
  css?: string;
  dimension?: StyleDimension;
  filter?: StyleFilter;
  shadow?: StyleValue;
  spacing?: StyleSpacing;
  outline?: StyleOutline;
  typography?: StyleTypography;
};

export type StyleElementShape<Pseudo extends boolean = false> = Pseudo extends
  true ? StyleElementShapeCore & {
    ":hover"?: StyleElementShapeCore;
    ":focus"?: StyleElementShapeCore;
    ":active"?: StyleElementShapeCore;
    ":visited"?: StyleElementShapeCore;
    ":any-link"?: StyleElementShapeCore;
  }
  : StyleElementShapeCore;

export type StyleElement<T extends string, Pseudo extends boolean = false> = {
  [P in T]: StyleElementShape<Pseudo>;
};

export type StyleElements = {
  [key: string]: StyleElement<string>;
};

// export type StyleElements ={
//   h1?: StyleElement;
//   h2?: StyleElement;
//   h3?: StyleElement;
//   h4?: StyleElement;
//   h5?: StyleElement;
//   h6?: StyleElement;
//   link?: StyleElementWithPseudoClass;
//   cite?: StyleElement;
//   button?: StyleElementWithPseudoClass;
//   heading?: StyleElement;
//   caption?: StyleElement;
// }

export type StyleBlockShape = {
  elements?: StyleElements;
  typography?: StyleTypography;
  spacing?: StyleSpacing;
  shadow?: StyleValue;
  color?: StyleColor;
  outline?: StyleOutline;
  filter?: StyleFilter;
  dimensions?: StyleDimension;
  css?: string;
  border?: StyleBorder;
  variations?: Record<string, unknown>;
};

export type StyleBlock<T extends string> = {
  [P in T]: StyleBlockShape;
};

export type StyleBlocks = {
  [key: string]: StyleBlock<string>;
};

export type StylesConfig = {
  blocks?: StyleBlocks;
  border?: StyleBorder;
  color?: StyleColor;
  css?: string;
  dimension?: StyleDimension;
  elements?: StyleElements;
  filter?: StyleFilter;
  outline?: StyleOutline;
  shadow?: StyleValue;
  spacing?: StyleSpacing;
  typography?: StyleTypography;
};

export type TemplatePart = {
  name: string;
  title?: string;
  area?: string;
};

export type TemplatePartsConfig = Array<TemplatePart>;

export type ThemeJson = {
  $schema: string;
  version: number;
  settings: SettingsConfig;
  styles: StylesConfig;
  customTemplates: CustomTemplatesConfig;
  templateParts: TemplatePartsConfig;
  patterns: PatternsConfig;
};
