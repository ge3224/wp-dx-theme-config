import { build, emptyDir } from "@deno/dnt";
import { join } from "jsr:@std/path@^1.0.8/join";

const denoConfig = JSON.parse(
  await Deno.readTextFile(join(Deno.cwd(), "deno.json")),
);

const { name, version, license, description } = denoConfig;

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  importMap: "deno.json",
  typeCheck: false,
  shims: {
    deno: true,
  },
  package: {
    name,
    version,
    license,
    description,
    repository: {
      type: "git",
      url: "git+https://github.com/ge3224/wp-dx-theme-config.git",
    },
    bugs: {
      url: "https://github.com/ge3224/wp-dx-theme-config/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
