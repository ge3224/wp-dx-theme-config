import { SettingTypography } from "../definitions/settings.ts";

/**
 * @link https://tailwindcss.com/docs/font-size
 */
function newSettingTypography(): SettingTypography {
  return {
    writingMode: true,
    fluid: true,
    fontSizes: [
      {
        fluid: false,
        name: "Extra Small",
        size: "0.75rem", /* 12px */
        slug: "x-small",
      },
      {
        fluid: {
          max: "1rem",
          min: "0.875rem",
        },
        name: "Small",
        slug: "small",
        size: "0.875rem", /* 14px */
      },
      {
        fluid: {
          max: "1.125rem",
          min: "1rem",
        },
        name: "Base",
        slug: "base",
        size: "1rem", /* 16px */
      },
      {
        fluid: {
          max: "1.25rem",
          min: "1.125rem",
        },
        name: "Medium",
        slug: "medium",
        size: "1.125rem", /* 18px */
      },
      {
        fluid: {
          max: "1.5rem",
          min: "1.25rem",
        },
        name: "Large",
        slug: "large",
        size: "1.25rem", /* 20px */
      },
      {
        fluid: {
          max: "1.875rem",
          min: "1.5rem",
        },
        name: "X Large",
        slug: "x-large",
        size: "1.5rem", /* 24px */
      },
      {
        fluid: {
          max: "2rem",
          min: "1.875rem",
        },
        name: "2X Large",
        slug: "xx-large",
        size: "1.875rem", /* 30px */
      },
      {
        fluid: {
          max: "3rem",
          min: "2.25rem",
        },
        name: "3X Large",
        slug: "xxx-large",
        size: "2.25rem", /* 36px */
      },
      {
        fluid: {
          max: "3.75rem",
          min: "3rem",
        },
        name: "4X Large",
        slug: "xxxx-large",
        size: "3rem", /* 48px */
      },
      {
        fluid: {
          max: "4.5rem",
          min: "3.75rem",
        },
        name: "5X Large",
        slug: "xxxxx-large",
        size: "3.75rem", /* 60px */
      },
      {
        fluid: {
          max: "6rem",
          min: "4.5rem",
        },
        name: "6X Large",
        slug: "xxxxxx-large",
        size: "4.5rem", /* 72px */
      },
      {
        fluid: {
          max: "8rem",
          min: "6rem",
        },
        name: "7X Large",
        slug: "xxxxxxx-large",
        size: "6rem", /* 96px */
      },
      {
        fluid: false,
        name: "8X Large",
        slug: "xxxxxxxx-large",
        size: "8rem", /* 128px */
      },
    ],
    fontFamilies: [
      {
        fontFamily: '"Libre Franklin", sans-serif',
        name: "Libre Franklin",
        slug: "sans-serif",
        fontFace: [
          {
            fontFamily: "LibreFranklin",
            fontStyle: "normal",
            fontWeight: "100",
            src: ["file:./assets/fonts/libre-franklin/LibreFranklin-Thin.ttf"],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "italic",
            fontWeight: "100",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-ThinItalic.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "normal",
            fontWeight: "200",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-ExtraLight.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "italic",
            fontWeight: "200",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-ExtraLightItalic.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "normal",
            fontWeight: "400",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-Regular.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "normal",
            fontWeight: "300",
            src: ["file:./assets/fonts/libre-franklin/LibreFranklin-Light.ttf"],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "italic",
            fontWeight: "300",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-LightItalic.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "italic",
            fontWeight: "400",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-Italic.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "normal",
            fontWeight: "500",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-Medium.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "italic",
            fontWeight: "500",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-MediumItalic.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "normal",
            fontWeight: "600",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-SemiBold.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "italic",
            fontWeight: "600",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-SemiBoldItalic.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "normal",
            fontWeight: "700",
            src: ["file:./assets/fonts/libre-franklin/LibreFranklin-Bold.ttf"],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "italic",
            fontWeight: "700",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-BoldItalic.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "normal",
            fontWeight: "800",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-ExtraBold.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "italic",
            fontWeight: "800",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-ExtraBoldItalic.ttf",
            ],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "normal",
            fontWeight: "900",
            src: ["file:./assets/fonts/libre-franklin/LibreFranklin-Black.ttf"],
          },
          {
            fontFamily: "LibreFranklin",
            fontStyle: "italic",
            fontWeight: "900",
            src: [
              "file:./assets/fonts/libre-franklin/LibreFranklin-BlackItalic.ttf",
            ],
          },
        ],
      },
      {
        fontFamily: '"Source Serif 4", serif',
        name: "Source Serif 4",
        slug: "serif",
        fontFace: [
          {
            fontFamily: "SourceSerif4",
            fontStyle: "normal",
            fontWeight: "200",
            src: [
              "file:./assets/fonts/source-serif-4/SourceSerif4-ExtraLight.ttf",
            ],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "italic",
            fontWeight: "200",
            src: [
              "file:./assets/fonts/source-serif-4/SourceSerif4-ExtraLightItalic.ttf",
            ],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "normal",
            fontWeight: "300",
            src: ["file:./assets/fonts/source-serif-4/SourceSerif4-Light.ttf"],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "italic",
            fontWeight: "300",
            src: [
              "file:./assets/fonts/source-serif-4/SourceSerif4-LightItalic.ttf",
            ],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "normal",
            fontWeight: "400",
            src: [
              "file:./assets/fonts/source-serif-4/SourceSerif4-Regular.ttf",
            ],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "italic",
            fontWeight: "400",
            src: ["file:./assets/fonts/source-serif-4/SourceSerif4-Italic.ttf"],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "normal",
            fontWeight: "500",
            src: ["file:./assets/fonts/source-serif-4/SourceSerif4-Medium.ttf"],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "italic",
            fontWeight: "500",
            src: [
              "file:./assets/fonts/source-serif-4/SourceSerif4-MediumItalic.ttf",
            ],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "normal",
            fontWeight: "600",
            src: [
              "file:./assets/fonts/source-serif-4/SourceSerif4-SemiBold.ttf",
            ],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "italic",
            fontWeight: "600",
            src: [
              "file:./assets/fonts/source-serif-4/SourceSerif4-SemiBoldItalic.ttf",
            ],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "normal",
            fontWeight: "700",
            src: ["file:./assets/fonts/source-serif-4/SourceSerif4-Bold.ttf"],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "italic",
            fontWeight: "700",
            src: [
              "file:./assets/fonts/source-serif-4/SourceSerif4-BoldItalic.ttf",
            ],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "normal",
            fontWeight: "800",
            src: [
              "file:./assets/fonts/source-serif-4/SourceSerif4-ExtraBold.ttf",
            ],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "italic",
            fontWeight: "800",
            src: [
              "file:./assets/fonts/source-serif-4/SourceSerif4-ExtraBoldItalic.ttf",
            ],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "normal",
            fontWeight: "900",
            src: ["file:./assets/fonts/source-serif-4/SourceSerif4-Black.ttf"],
          },
          {
            fontFamily: "SoureSerif4",
            fontStyle: "italic",
            fontWeight: "900",
            src: [
              "file:./assets/fonts/source-serif-4/SourceSerif4-BlackItalic.ttf",
            ],
          },
        ],
      },
    ],
  };
}

export default newSettingTypography;
