export { newThemeJson } from "~/src/wp_theme_config.ts";

// import { newThemeJson } from "~/src/config.ts";
//
// async function writeThemeFile() {
//   try {
//     await Deno.writeTextFile(
//       "theme.json",
//       JSON.stringify(newThemeJson(), null, 2),
//     );
//     console.log("✓ theme.json updated");
//   } catch (error) {
//     console.error("Failed to write theme.json:", error);
//   }
// }
//
// if (import.meta.main) {
//   await writeThemeFile();
//   console.log("Watching for changes...");
// }
