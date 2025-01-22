export type StyleValue = string | { ref: string };

export interface StyleBorderSide {
  width?: StyleValue;
  style?: StyleValue;
  color?: StyleValue;
}

export interface StyleBorderRadius {
  ref?: string;
  topLeft?: StyleValue;
  topRight?: StyleValue;
  bottomLeft?: StyleValue;
  bottomRight?: StyleValue;
}

export interface StyleBorder {
  top?: StyleBorderSide;
  left?: StyleBorderSide;
  color?: StyleValue;
  style?: StyleValue;
  width?: StyleValue;
  right?: StyleBorderSide;
  radius?: string | StyleBorderRadius;
  bottom?: StyleBorderSide;
}

export interface StyleColor {
  text?: StyleValue;
  gradient?: StyleValue;
  background?: StyleValue;
}

export interface StyleDimension {
  minHeight?: StyleValue;
  aspectRatio?: StyleValue;
}

export interface StyleFilter {
  duotone: object;
}

export interface StyleOutline {
  color?: StyleValue;
  style?: StyleValue;
  width?: StyleValue;
  offset?: StyleValue;
}

export interface StyleSpacingSide {
  top: StyleValue;
  right: StyleValue;
  bottom: StyleValue;
  left: StyleValue;
}

export interface StyleSpacing {
  margin?: StyleSpacingSide;
  padding?: StyleSpacingSide;
  blockGap?: StyleValue;
}

export interface StyleTypography {
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
}

export interface StyleElementShape {
  border?: StyleBorder;
  color?: StyleColor;
  css?: string;
  dimension?: StyleDimension;
  filter?: StyleFilter;
  shadow?: StyleValue;
  spacing?: StyleSpacing;
  outline?: StyleOutline;
  typography?: StyleTypography;
}

// export type StyleElement = StyleElementShape;

export type StyleElement<T extends string> = {
  [P in T]: StyleElementShape;
};

export type StyleElements = {
  [key: string]: StyleElement<string>;
};
export type StyleElementWithPseudoClass = StyleElementShape & {
  ":hover"?: StyleElementShape;
  ":focus"?: StyleElementShape;
  ":active"?: StyleElementShape;
  ":visited"?: StyleElementShape;
  ":any-link"?: StyleElementShape;
};

// export interface StyleElements {
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

export interface StyleBlockShape {
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
}

export type StyleBlock<T extends string> = {
  [P in T]: StyleBlockShape;
};

export type StyleBlocks = {
  [key: string]: StyleBlock<string>;
};

export type Styles = {
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
