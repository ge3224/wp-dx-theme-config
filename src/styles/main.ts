import newStyleBlocks from "~/src/styles/blocks/main.ts";
import newStyleColor from "~/src/styles/color.ts";
import newStyleElements from "~/src/styles/elements/main.ts";
import newStyleTypography from "~/src/styles/typography.ts";
import { Styles } from "~/src/definitions/styles.ts";

function newStyles(): Styles {
  return {
    ...newStyleBlocks(),
    color: newStyleColor(),
    typography: newStyleTypography(),
    elements: newStyleElements(),
  };
}
export default newStyles;
