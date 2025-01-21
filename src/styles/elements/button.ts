import { StyleElementWithPseudoClass } from "./definitions/styles.ts";

export default function newStyleButton(): StyleElementWithPseudoClass {
  return {
    color: {
      background: "var:preset|color|sky-blue",
      text: "var:preset|color|white",
    },
    border: {
      radius: "5px",
    },
    ":hover": {
      color: {
        background: "var:preset|color|black",
        text: "var:preset|color|white",
      },
    },
    ":active": {
      color: {
        text: "#dddddd",
      },
    },
  };
}
