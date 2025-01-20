import { StyleColor } from "~/src/definitions/styles.ts";

function newStyleColor(): StyleColor {
  return {
    background: "var:preset|color|white",
    text: "var:preset|color|as-graphite",
  };
}

export default newStyleColor;
