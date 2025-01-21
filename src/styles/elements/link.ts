import { StyleElementWithPseudoClass } from "./definitions/styles.ts";

export default function newStyleLink(): StyleElementWithPseudoClass {
  return {
    color: {
      text: "var:preset|color|as-graphite",
    },
    typography: {
      textDecoration: "none",
    },
    ":hover": {
      color: {
        text: "var:preset|color|as-teal",
      },
      typography: {
        textDecoration: "underline",
      },
    },
  };
}
