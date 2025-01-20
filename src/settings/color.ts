import { SettingColor } from "~/src/definitions/settings.ts";

function newSettingColor(): SettingColor {
  return {
    background: false,
    link: true,
    text: true,
    defaultDuotone: false,
    defaultGradients: false,
    defaultPalette: false,
    palette: [
      {
        color: "#343333",
        name: "Alluvia Graphite",
        slug: "as-graphite",
      },
      {
        color: "#9dcacc",
        name: "Alluvia Teal",
        slug: "as-teal",
      },
      {
        color: "#f5f4ee",
        name: "Alluvia Beige",
        slug: "as-beige",
      },
      {
        color: "#c9a040",
        name: "Alluvia Gold",
        slug: "as-gold",
      },
      {
        color: "#de4668",
        name: "Alluvia Coral",
        slug: "as-coral",
      },
      {
        color: "#c7e4e",
        name: "Alluvia Light Blue",
        slug: "as-light-blue",
      },
      {
        color: "#ff8204",
        name: "Alluvia Tangerine",
        slug: "as-tangerine",
      },
      {
        color: "#6c6768",
        name: "Dim Grey",
        slug: "dim-grey",
      },
      {
        color: "black",
        name: "Black",
        slug: "black",
      },
      {
        color: "#9affff",
        name: "Ice Blue",
        slug: "ice-blue",
      },
      {
        color: "#7ac3cc",
        name: "Sky Blue",
        slug: "sky-blue",
      },
      {
        color: "white",
        name: "White",
        slug: "white",
      },
      {
        color: "#efefef",
        name: "White Smoke",
        slug: "white-smoke",
      },
      {
        color: "#eff7f7",
        name: "Light Cyan",
        slug: "as-cyan",
      },
    ],
  };
}

export default newSettingColor;
