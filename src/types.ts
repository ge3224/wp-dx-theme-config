/**
 * Represents a custom template configuration
 * @interface
 * @property {string} name - Unique identifier for the template
 * @property {string} title - Display title for the template
 * @property {string[]} [postTypes] - Optional array of post types this template applies to
 */
export type CustomTemplate = {
  name: string;
  title: string;
  postTypes?: Array<string>;
};

/**
 * Array of custom template configurations
 */
export type CustomTemplatesConfig = Array<CustomTemplate>;

/**
 * Represents a pattern identifier string
 */
export type Pattern = string;

/**
 * Array of pattern identifier strings
 */
export type PatternsConfig = Array<string>;

/**
 * Configuration for border-related settings
 * @interface
 * @property {boolean} [color] - Whether border color can be customized
 * @property {boolean} [style] - Whether border style can be customized
 * @property {boolean} [width] - Whether border width can be customized
 * @property {boolean} [radius] - Whether border radius can be customized
 */
export type SettingBorder = {
  color?: boolean;
  style?: boolean;
  width?: boolean;
  radius?: boolean;
};

/**
 * Configuration for duotone color settings
 * @interface
 * @property {string} [name] - Display name for the duotone setting
 * @property {string} [slug] - Unique identifier for the duotone setting
 * @property {string[]} [colors] - Array of color values
 */
export type SettingDuotone = {
  name?: string;
  slug?: string;
  colors?: Array<string>;
};

/**
 * Configuration for color palette settings
 * @interface
 * @property {string} [slug] - Unique identifier for the palette
 * @property {string} [name] - Display name for the palette
 * @property {string} [color] - Color value
 */
export type SettngPalette = {
  slug?: string;
  name?: string;
  color?: string;
};

/**
 * Configuration for gradient settings
 * @interface
 * @property {string} [name] - Display name for the gradient
 * @property {string} [slug] - Unique identifier for the gradient
 * @property {string} [gradient] - CSS gradient value
 */
export type SettingGradient = {
  name?: string;
  slug?: string;
  gradient?: string;
};

/**
 * Comprehensive color settings configuration
 * @interface
 * @property {boolean} [background] - Whether background color can be customized
 * @property {boolean} [custom] - Whether custom colors are allowed
 * @property {boolean} [link] - Whether link color can be customized
 * @property {boolean} [text] - Whether text color can be customized
 * @property {boolean} [button] - Whether button color can be customized
 * @property {SettingDuotone[]} [duotone] - Array of duotone configurations
 * @property {SettingPalette[]} [palette] - Array of color palette configurations
 * @property {boolean} [heading] - Whether heading color can be customized
 * @property {SettingGradient[]} [gradients] - Array of gradient configurations
 * @property {boolean} [customDuotone] - Whether custom duotone colors are allowed
 * @property {boolean} [customGradient] - Whether custom gradients are allowed
 * @property {boolean} [defaultDuotone] - Whether default duotone settings are enabled
 * @property {boolean} [defaultPalette] - Whether default palette is enabled
 * @property {boolean} [defaultGradients] - Whether default gradients are enabled
 */
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

/**
 * Complete theme.json configuration
 * @interface
 * @property {string} $schema - JSON Schema reference
 * @property {number} version - Theme.json version number
 * @property {SettingsConfig} settings - Global settings configuration
 * @property {StylesConfig} styles - Global styles configuration
 * @property {CustomTemplatesConfig} customTemplates - Custom templates configuration
 * @property {TemplatePartsConfig} templateParts - Template parts configuration
 * @property {PatternsConfig} patterns - Patterns configuration
 */
export type SettingShadowPreset = {
  slug: string;
  name: string;
  shadow: string;
};

/**
 * Represents a shadow setting configuration
 * @interface
 * @property {SettingShadowPreset[]} [presets] - Array of shadow preset configurations
 * @property {boolean} defaultPresets - Whether default shadow presets are used
 */
export type SettingShadow = {
  presets: Array<SettingShadowPreset>;
  defaultPresets: boolean;
};

/**
 * Defines the layout options for a setting.
 *
 * @interface SettingLayout
 *
 * @property {boolean} [allowEditing=true] - Whether the setting can be edited by the user.
 * @property {string} [wideSize] - The width of the setting when displayed in a wider layout.
 * @property {string} [contentSize] - The width of the setting when displayed in a narrower layout.
 * @property {boolean} [allowCustomContentAndWideSize=false] - Whether the setting allows custom content and wide size adjustments.
 */
export type SettingLayout = {
  allowEditing?: boolean;
  wideSize?: string;
  contentSize?: string;
  allowCustomContentAndWideSize?: boolean;
};

/**
 * Represents valid CSS units for spacing measurements.
 */
export type SettingSpacingUnit = "px" | "em" | "rem" | "vh" | "vw" | "%";

/**
 * Defines the available units for scaling spacing values in a setting.
 *
 * This type includes:
 *   - Standard units (e.g., "px", "rem") represented by the `SettingSpacingUnit` type.
 *   - Viewport-based units (e.g., "vw", "vh", "vmin", "vmax").
 *     - Prefixed with "s" for small, "l" for large, and "d" for default.
 *   - Intrinsic units (e.g., "vi", "vb").
 *     - Prefixed with "s" for small, "l" for large, and "d" for default.
 */
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

/**
 * Defines the available operators for scaling spacing values in a setting.
 */
export type SettingSpacingScaleOperator = "*" | "+";

/**
 * Defines the scaling options for spacing values in a setting.
 * @interface SettingSpacingScale
 * @property {SettingSpacingScaleUnit} [unit] - The unit for scaling spacing values.
 * @property {number} [steps] - The number of steps for scaling.
 * @property {SettingSpacingScaleOperator} [operator] - The operator for scaling (e.g., "*", "+").
 * @property {number} [increment] - The increment value for scaling.
 * @property {number} [mediumStep] - The value for a medium step in scaling.
 */
export type SettingSpacingScale = {
  unit?: SettingSpacingScaleUnit;
  steps?: number;
  operator?: SettingSpacingScaleOperator;
  increment?: number;
  mediumStep?: number;
};

/**
 * Defines a spacing size for a setting.
 * @interface SettingSpacingSize
 * @property {string} name - The human-readable name of the spacing size.
 * @property {string} size - The actual size value (e.g., "0px", "1rem").
 * @property {string} slug - The unique slug identifier for the spacing size.
 */
export type SettingSpacingSize = {
  name: string;
  size: string;
  slug: string;
};

/**
 * Defines the spacing options for a setting.
 * @interface SettingSpacing
 * @property {Array} [units] - An array of available units for spacing values.
 * @property {boolean} [margin=true] - Whether margin spacing is enabled.
 * @property {boolean} [padding=true] - Whether padding spacing is enabled.
 * @property {boolean|null} [blockGap=true] - Whether block gap spacing is enabled.
 *                                            Set to `null` to disable this option.
 * @property {Array<SettingSpacingSize>} [spacingSizes] - An array of predefined spacing sizes.
 * @property {SettingSpacingScale} [spacingScale] - Options for scaling spacing values.
 * @property {boolean} [customSpacingSize=false] - Whether custom spacing sizes are allowed.
 */
export type SettingSpacing = {
  units?: Array<SettingSpacingUnit>;
  margin?: boolean;
  padding?: boolean;
  blockGap?: boolean | null;
  spacingSizes?: Array<SettingSpacingSize>;
  spacingScale?: SettingSpacingScale;
  customSpacingSize?: boolean;
};

/**
 * Defines the options for the lightbox feature in a setting.
 * @interface SettingLightbox
 * @property {boolean} [enabled=true] - Whether the lightbox feature is enabled.
 * @property {boolean} [allowEditing=true] - Whether the lightbox settings can be edited.
 */
export type SettingLightbox = {
  enabled?: boolean;
  allowEditing?: boolean;
};

/**
 * Defines the positioning options for a setting.
 * @interface SettingPosition
 * @property {boolean} [sticky=false] - Whether the setting should be sticky (position: sticky).
 */
export type SettingPosition = {
  sticky?: boolean;
};

/**
 * Defines the background options for a setting.
 * @interface SettingBackground
 * @property {boolean} [backgroundSize=true] - Whether background size options are available.
 * @property {boolean} [backgroundImage=true] - Whether background image options are available.
 */
export type SettingBackground = {
  backgroundSize?: boolean;
  backgroundImage?: boolean;
};

/**
 * Defines the dimension options for a setting.
 * @interface SettingDimensions
 * @property {boolean} [minHeight=false] - Whether minimum height options are available.
 * @property {boolean} [aspectRatio=false] - Whether aspect ratio options are available.
 */
export type SettingDimensions = {
  minHeight?: boolean;
  aspectRatio?: boolean;
};

/**
 * Defines the fluid width/height options for a setting.
 * @interface SettingFluid
 * @property {string} min - The minimum width/height value (e.g., "200px").
 * @property {string} max - The maximum width/height value (e.g., "100%").
 */
export type SettingFluid = {
  min: string;
  max: string;
};

/**
 * Defines the font size options for a setting.
 * @interface SettingFontSize
 * @property {string} [name] - The human-readable name of the font size.
 * @property {string} [slug] - The unique slug identifier for the font size.
 * @property {string} [size] - The actual font size value (e.g., "16px", "1rem").
 * @property {boolean|SettingFluid} [fluid] - Whether the font size is fluid.
 *                                      If true, the font size will scale with the viewport.
 *                                      If an object of type `SettingFluid`,
 *                                      defines the minimum and maximum values for the fluid size.
 */
export type SettingFontSize = {
  name?: string;
  slug?: string;
  size?: string;
  fluid?: boolean | SettingFluid;
};

/**
 * Defines the available font display options for a setting.
 */
export type SettingFontDisplay =
  | "auto"
  | "block"
  | "fallback"
  | "swap"
  | "optional";

/**
 * Defines the font face options for a setting.
 * @interface SettingFontFace
 * @property {string} [fontFamily] - The font family name.
 * @property {Array} [src] - An array of font source URLs.
 * @property {string} [fontStyle="normal"] - The font style (e.g., "normal", "italic").
 * @property {string} [fontWeight="400"] - The font weight (e.g., "400", "bold").
 * @property {string} [sizeAdjust] - The font size adjustment value (e.g., "0.5").
 * @property {SettingFontDisplay} [fontDisplay] - The font display behavior.
 */
export type SettingFontFace = {
  fontFamily?: string;
  src?: Array<string>;
  fontStyle?: "normal" | string;
  fontWeight?: "400" | string;
  sizeAdjust?: string;
  fontDisplay?: SettingFontDisplay;
};

/**
 * Defines the font family options for a setting.
 * @interface SettingFontFamily
 * @property {string} [slug] - The unique slug identifier for the font family.
 * @property {string} [name] - The human-readable name of the font family.
 * @property {Array<SettingFontFace>} [fontFace] - An array of font face definitions.
 * @property {string} [fontFamily] - The base font family name.
 */
export type SettingFontFamily = {
  slug?: string;
  name?: string;
  fontFace?: Array<SettingFontFace>;
  fontFamily?: string;
};

/**
 * Defines the typography options for a setting.
 * @interface SettingTypography
 * @property {boolean} [fluid=false] - Whether fluid typography is enabled.
 * @property {boolean} [dropCap=false] - Whether drop cap is enabled.
 * @property {boolean} [fontStyle=false] - Whether font style options are available.
 * @property {Array<SettingFontSize>} [fontSizes] - An array of available font sizes.
 * @property {boolean} [fontWeight=false] - Whether font weight options are available.
 * @property {boolean} [lineHeight=false] - Whether line height options are available.
 * @property {boolean} [textColumns=false] - Whether text columns are enabled.
 * @property {boolean} [writingMode=false] - Whether writing mode options are available.
 * @property {Array<SettingFontFamily>} [fontFamilies] - An array of available font families.
 * @property {boolean} [letterSpacing=false] - Whether letter spacing options are available.
 * @property {boolean} [textTransform=false] - Whether text transform options are available.
 * @property {boolean} [customFontSize=false] - Whether custom font sizes are allowed.
 * @property {boolean} [textDecoration=false] - Whether text decoration options are available.
 */
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

/**
 * Defines the shape options for a block in a setting.
 * @interface SettingBlockShape
 * @property {SettingColor} [color] - Color options for the block.
 * @property {SettingBorder} [border] - Border options for the block.
 * @property {SettingShadow} [shadow] - Shadow options for the block.
 * @property {SettingLayout} [layout] - Layout options for the block.
 * @property {Record} [custom] - Custom properties for the block.
 * @property {SettingSpacing} [spacing] - Spacing options for the block.
 * @property {SettingLightbox} [lightbox] - Lightbox options for the block.
 * @property {SettingPosition} [position] - Positioning options for the block.
 * @property {SettingBackground} [background] - Background options for the block.
 * @property {SettingDimensions} [dimensions] - Dimension options for the block.
 * @property {SettingTypography} [typography] - Typography options for the block.
 * @property {boolean} [appearanceTools=true] - Whether appearance tools are enabled for the block.
 */
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

/**
 * Defines the shape options for a block in a setting, where `T` is a generic type.
 * @template T - The type of the block keys.
 * @interface SettingBlock
 * @extends {Record<T, SettingBlockShape>}
 */
export type SettingBlock<T extends string> = {
  [P in T]: SettingBlockShape;
};

/**
 * Defines the configuration for a set of blocks in a setting, where `K` is a generic type.
 * @template K - The type of the block keys.
 * @interface SettingBlocksConfig
 * @extends {Record<K, SettingBlock>}
 */
export type SettingBlocksConfig<K extends string = string> = {
  [Key in K]: SettingBlock<Key>;
};

/**
 * Defines the complete configuration for a set of settings.
 * @interface SettingsConfig
 * @property {boolean} [appearanceTools=true] - Whether appearance tools are enabled for the settings.
 * @property {SettingBlocksConfig} [blocks] - The configuration for the available blocks.
 * @property {SettingBorder} [border] - Default border options for the settings.
 * @property {SettingColor} [color] - Default color options for the settings.
 * @property {Record} [custom] - Custom properties for the settings.
 * @property {SettingLayout} [layout] - Default layout options for the settings.
 * @property {SettingSpacing} [spacing] - Default spacing options for the settings.
 * @property {SettingTypography} [typography] - Default typography options for the settings.
 */
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

/**
 * Defines the type for a style value.
 */
export type StyleValue = string | { ref: string };

/**
 * Defines the properties for a single border side (e.g., top, right, bottom, left).
 * @interface StyleBorderSide
 * @property {StyleValue} [width] - The width of the border.
 * @property {StyleValue} [style] - The style of the border (e.g., "solid", "dashed", "dotted").
 * @property {StyleValue} [color] - The color of the border.
 */
export type StyleBorderSide = {
  width?: StyleValue;
  style?: StyleValue;
  color?: StyleValue;
};

/**
 * Defines the border radius properties for an element.
 * @interface StyleBorderRadius
 * @property {string} [ref] - A reference to a predefined border radius.
 * @property {StyleValue} [topLeft] - The border radius for the top-left corner.
 * @property {StyleValue} [topRight] - The border radius for the top-right corner.
 * @property {StyleValue} [bottomLeft] - The border radius for the bottom-left corner.
 * @property {StyleValue} [bottomRight] - The border radius for the bottom-right corner.
 */
export type StyleBorderRadius = {
  ref?: string;
  topLeft?: StyleValue;
  topRight?: StyleValue;
  bottomLeft?: StyleValue;
  bottomRight?: StyleValue;
};

/**
 * Defines the border properties for an element.
 * @interface StyleBorder
 * @property {StyleBorderSide} [top] - Border properties for the top side.
 * @property {StyleBorderSide} [left] - Border properties for the left side.
 * @property {StyleValue} [color] - The color of the border.
 * @property {StyleValue} [style] - The style of the border (e.g., "solid", "dashed", "dotted").
 * @property {StyleValue} [width] - The width of the border.
 * @property {StyleBorderSide} [right] - Border properties for the right side.
 * @property {string|StyleBorderRadius} [radius] - Border radius properties for the element.
 *                                      Can be a string (e.g., "5px") or an object of type `StyleBorderRadius`.
 * @property {StyleBorderSide} [bottom] - Border properties for the bottom side.
 */
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

/**
 * Defines the color properties for an element.
 * @interface StyleColor
 * @property {StyleValue} [text] - The color of the text.
 * @property {StyleValue} [gradient] - The gradient applied to the element.
 * @property {StyleValue} [background] - The background color of the element.
 */
export type StyleColor = {
  text?: StyleValue;
  gradient?: StyleValue;
  background?: StyleValue;
};

/**
 * Defines the dimension properties for an element.
 * @interface StyleDimension
 * @property {StyleValue} [minHeight] - The minimum height of the element.
 * @property {StyleValue} [aspectRatio] - The aspect ratio of the element.
 */
export type StyleDimension = {
  minHeight?: StyleValue;
  aspectRatio?: StyleValue;
};

/**
 * Defines the filter properties for an element.
 * @interface StyleFilter
 * @property {object} [duotone] - Properties for applying a duotone effect.
 *                              The exact structure of this object will depend on the implementation.
 */
export type StyleFilter = {
  duotone: object;
};

/**
 * Defines the outline properties for an element.
 * @interface StyleOutline
 * @property {StyleValue} [color] - The color of the outline.
 * @property {StyleValue} [style] - The style of the outline (e.g., "solid", "dashed", "dotted").
 * @property {StyleValue} [width] - The width of the outline.
 * @property {StyleValue} [offset] - The offset of the outline.
 */
export type StyleOutline = {
  color?: StyleValue;
  style?: StyleValue;
  width?: StyleValue;
  offset?: StyleValue;
};

/**
 * Defines the spacing values for each side of an element.
 * @interface StyleSpacingSide
 * @property {StyleValue} top - Spacing for the top side.
 * @property {StyleValue} right - Spacing for the right side.
 * @property {StyleValue} bottom - Spacing for the bottom side.
 * @property {StyleValue} left - Spacing for the left side.
 */
export type StyleSpacingSide = {
  top: StyleValue;
  right: StyleValue;
  bottom: StyleValue;
  left: StyleValue;
};

/**
 * Defines the spacing properties for an element.
 * @interface StyleSpacing
 * @property {StyleSpacingSide} [margin] - Margin spacing for the element.
 * @property {StyleSpacingSide} [padding] - Padding spacing for the element.
 * @property {StyleValue} [blockGap] - Spacing between block-level elements.
 */
export type StyleSpacing = {
  margin?: StyleSpacingSide;
  padding?: StyleSpacingSide;
  blockGap?: StyleValue;
};

/**
 * Defines the typography properties for an element.
 * @interface StyleTypography
 * @property {StyleValue} [fontSize] - The font size of the text.
 * @property {StyleValue} [fontStyle] - The font style of the text (e.g., "normal", "italic").
 * @property {StyleValue} [fontFamily] - The font family of the text.
 * @property {StyleValue} [fontWeight] - The font weight of the text (e.g., "400", "bold").
 * @property {StyleValue} [lineHeight] - The line height of the text.
 * @property {string} [textColumns] - The number of text columns (e.g., "2", "3").
 * @property {StyleValue} [writingMode] - The writing mode of the text (e.g., "horizontal-tb", "vertical-lr").
 * @property {StyleValue} [letterSpacing] - The letter spacing of the text.
 * @property {StyleValue} [textTransform] - The text transform of the text (e.g., "uppercase", "lowercase").
 * @property {StyleValue} [textDecoration] - The text decoration of the text (e.g., "underline", "line-through").
 */
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

/**
 * Defines the core style properties for an element.
 * @interface StyleElementShapeCore
 * @property {StyleBorder} [border] - Border properties for the element.
 * @property {StyleColor} [color] - Color properties for the element.
 * @property {string} [css] - Custom CSS styles for the element.
 * @property {StyleDimension} [dimension] - Dimension properties for the element.
 * @property {StyleFilter} [filter] - Filter properties for the element.
 * @property {StyleValue} [shadow] - Box-shadow property for the element.
 * @property {StyleSpacing} [spacing] - Spacing properties for the element.
 * @property {StyleOutline} [outline] - Outline properties for the element.
 * @property {StyleTypography} [typography] - Typography properties for the element.
 */
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

/**
 * Defines the core style properties for an element, optionally including
 * pseudo-class styles.
 * @template Pseudo - A boolean indicating whether pseudo-class styles should be included.
 * @interface StyleElementShapeCore
 * @property {StyleBorder} [border] - Border properties for the element.
 * @property {StyleColor} [color] - Color properties for the element.
 * @property {string} [css] - Custom CSS styles for the element.
 * @property {StyleDimension} [dimension] - Dimension properties for the element.
 * @property {StyleFilter} [filter] - Filter properties for the element.
 * @property {StyleValue} [shadow] - Box-shadow property for the element.
 * @property {StyleSpacing} [spacing] - Spacing properties for the element.
 * @property {StyleOutline} [outline] - Outline properties for the element.
 * @property {StyleTypography} [typography] - Typography properties for the element.
 */
export type StyleElementShape<Pseudo extends boolean = false> = Pseudo extends
  true ? StyleElementShapeCore & {
    ":hover"?: StyleElementShapeCore;
    ":focus"?: StyleElementShapeCore;
    ":active"?: StyleElementShapeCore;
    ":visited"?: StyleElementShapeCore;
    ":any-link"?: StyleElementShapeCore;
  }
  : StyleElementShapeCore;

/**
 * Defines the style properties for an element, optionally including
 * pseudo-class styles.
 * @template Pseudo - A boolean indicating whether pseudo-class styles should be included.
 * @interface StyleElementShape
 */
export type StyleElement<T extends string, Pseudo extends boolean = false> = {
  [P in T]: StyleElementShape<Pseudo>;
};

/**
 * Defines a collection of style objects for different element groups.
 * @interface StyleElements
 */
export type StyleElements = {
  [key: string]: StyleElement<string>;
};

/**
 * Defines the style properties for a block.
 * @interface StyleBlockShape
 * @property {StyleElements} [elements] - Style definitions for the block's child elements.
 * @property {StyleTypography} [typography] - Typography properties for the block.
 * @property {StyleSpacing} [spacing] - Spacing properties for the block.
 * @property {StyleValue} [shadow] - Box-shadow property for the block.
 * @property {StyleColor} [color] - Color properties for the block.
 * @property {StyleOutline} [outline] - Outline properties for the block.
 * @property {StyleFilter} [filter] - Filter properties for the block.
 * @property {StyleDimension} [dimensions] - Dimension properties for the block.
 * @property {string} [css] - Custom CSS styles for the block.
 * @property {StyleBorder} [border] - Border properties for the block.
 * @property {Record} [variations] - Variations of the block's style.
 */
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

/**
 * Defines a collection of style objects for different blocks,
 * where the keys represent the block names.
 * @template T - The type of the block keys.
 * @interface StyleBlock
 */
export type StyleBlock<T extends string> = {
  [P in T]: StyleBlockShape;
};

/**
 * Defines a collection of style objects for different block groups.
 * @interface StyleBlocks
 */
export type StyleBlocks = {
  [key: string]: StyleBlock<string>;
};

/**
 * Defines the global style configuration.
 * @interface StylesConfig
 * @property {StyleBlocks} [blocks] - Style definitions for different blocks.
 * @property {StyleBorder} [border] - Default border properties.
 * @property {StyleColor} [color] - Default color properties.
 * @property {string} [css] - Global custom CSS styles.
 * @property {StyleDimension} [dimension] - Default dimension properties.
 * @property {StyleElements} [elements] - Style definitions for different elements.
 * @property {StyleFilter} [filter] - Default filter properties.
 * @property {StyleOutline} [outline] - Default outline properties.
 * @property {StyleValue} [shadow] - Default box-shadow property.
 * @property {StyleSpacing} [spacing] - Default spacing properties.
 * @property {StyleTypography} [typography] - Default typography properties.
 */
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

/**
 * Defines the structure of a template part.
 * @interface TemplatePart
 * @property {string} name - The unique name of the template part.
 * @property {string} [title] - The human-readable title of the template part.
 * @property {string} [area] - The area where the template part is used.
 */
export type TemplatePart = {
  name: string;
  title?: string;
  area?: string;
};

/**
 * Defines an array of template parts.
 */
export type TemplatePartsConfig = Array<TemplatePart>;

/**
 * Defines the structure of a theme configuration file.
 * @interface ThemeJson
 * @property {string} $schema - The schema URL for the theme configuration.
 * @property {number} version - The version of the theme configuration.
 * @property {SettingsConfig} settings - Configuration for various settings.
 * @property {StylesConfig} styles - Style definitions for the theme.
 * @property {CustomTemplatesConfig} customTemplates - Configuration for custom templates.
 *                                      (This type is not defined here.)
 * @property {TemplatePartsConfig} templateParts - An array of template parts.
 * @property {PatternsConfig} patterns - Configuration for patterns.
 *                                      (This type is not defined here.)
 */
export type ThemeJson = {
  $schema: string;
  version: number;
  settings: SettingsConfig;
  styles: StylesConfig;
  customTemplates: CustomTemplatesConfig;
  templateParts: TemplatePartsConfig;
  patterns: PatternsConfig;
};
