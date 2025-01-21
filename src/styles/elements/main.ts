import { StyleElements } from "../../definitions/styles.ts";
import newStyleButton from "../../styles/elements/button.ts";
import newStyleH1 from "../../styles/elements/h1.ts";
import newStyleLink from "../../styles/elements/link.ts";

function newStyleElements(): StyleElements {
  return {
    h1: newStyleH1(),
    link: newStyleLink(),
    button: newStyleButton(),
  };
}

export default newStyleElements;
