import { StyleBlock } from "../../definitions/styles.ts";
import { newStyleSeparator } from "./core/separator.ts";

export function newStyleBlocks(): StyleBlock {
  return {
    blocks: {
      ...newStyleSeparator(),
    },
  };
}
