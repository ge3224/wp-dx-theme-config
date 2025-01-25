import { Pattern, Patterns } from "./types.ts";

export function withPattern(p: Pattern): (pp: Patterns) => void {
  return (pp: Patterns): void => {
    const exists = pp.some((pattern) => pattern === p);

    if (!exists) {
      pp.push(p);
    } else {
      console.warn(`Pattern with name "${p}" already exists`);
    }
  };
}

export function newPatterns(...mods: Array<(pp: Patterns) => void>): Patterns {
  const pp: Patterns = [];
  mods.forEach((mod) => mod(pp));
  return pp;
}
