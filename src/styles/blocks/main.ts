import { StyleBlocks } from "~/src/definitions/styles.ts";
import separator from "~/src/styles/blocks/core/separator.ts";

function newStyleBlocks(): StyleBlocks {
  return {
    blocks: {
      ...separator(),
    },
  };
}

export default newStyleBlocks;
