import { StyleElement } from "../../definitions/styles.ts";

export function newStyleElement<T extends string>(
  namespace: T,
  ...mods: Array<(se: StyleElement<T>) => void>
): StyleElement<T> {
  const se = { [namespace]: {} } as StyleElement<T>;
  return se;
}
