import { StyleElements } from "~/src/definitions/styles.ts";
import newStyleButton from "~/src/styles/elements/button.ts";
import newStyleH1 from "~/src/styles/elements/h1.ts";
import newStyleLink from "~/src/styles/elements/link.ts";

function newStyleElements(): StyleElements {
  return {
    h1: newStyleH1(),
    link: newStyleLink(),
    button: newStyleButton(),
  };
}

export default newStyleElements;
