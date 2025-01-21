import { StyleBlock } from "../../../definitions/styles.ts";

// return {
//   "core/separator": {
//     border: {
//       top: {
//         width: "1px",
//       },
//     },
//   },
// };
export function newStyleSeparator(
  ...mods: Array<(s: StyleBlock<"core/separator">) => void>
): StyleBlock<"core/separator"> {
  const s: StyleBlock<"core/separator"> = {
    "core/separator": {},
  };
  mods.forEach((mod) => mod(s));
  return s;
}
