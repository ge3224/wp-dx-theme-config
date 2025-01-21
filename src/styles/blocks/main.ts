import { StyleBlocks } from "./definitions/styles.ts";
import separator from "./styles/blocks/core/separator.ts";

function newStyleBlocks(): StyleBlocks {
  return {
    blocks: {
      ...separator(),
    },
  };
}

export default newStyleBlocks;
