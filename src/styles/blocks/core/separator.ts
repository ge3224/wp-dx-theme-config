import { StyleBlock } from "~/src/definitions/styles.ts";

function separator(): StyleBlock<"core/separator"> {
  return {
    "core/separator": {
      border: {
        top: {
          width: "1px",
        },
      },
    },
  };
}

export default separator;
