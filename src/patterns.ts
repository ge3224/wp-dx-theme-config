import type { Pattern, PatternsConfig } from "./types.ts";

export function withPattern(p: Pattern): (pp: PatternsConfig) => void {
  return (pp: PatternsConfig): void => {
    const exists = pp.some((pattern) => pattern === p);

    if (!exists) {
      pp.push(p);
    } else {
      console.warn(`Pattern with name "${p}" already exists`);
    }
  };
}

export function newPatterns(
  ...mods: Array<(pp: PatternsConfig) => void>
): PatternsConfig {
  const pp: PatternsConfig = [];
  mods.forEach((mod) => mod(pp));
  return pp;
}

export const patterns = {
  create: newPatterns,
  withPattern,
};
