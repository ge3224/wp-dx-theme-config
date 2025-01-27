import type { Pattern, PatternsConfig } from "./types.ts";

/**
 * Creates a modifier function that adds a pattern to a patterns configuration
 * if it doesn't already exist.
 *
 * @param {Pattern} p - The pattern to be added to the configuration
 * @returns {function} A function that takes a PatternsConfig and modifies it
 * by adding the pattern
 */
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

/**
 * Creates a new patterns configuration by applying multiple modifier functions.
 *
 * @param {...Function} mods - Modifier functions that will be applied to the new patterns configuration
 * @returns {PatternsConfig} A new patterns configuration with all modifications applied
 */
export function newPatterns(
  ...mods: Array<(pp: PatternsConfig) => void>
): PatternsConfig {
  const pp: PatternsConfig = [];
  mods.forEach((mod) => mod(pp));
  return pp;
}

/**
 * Utility object providing pattern-related functionality.
 *
 * @property {function} create - Alias for newPatterns function to create a new patterns configuration
 * @property {function} withPattern - Function to create a modifier that adds a pattern to a configuration
 */
export const patterns = {
  create: newPatterns,
  withPattern,
};
