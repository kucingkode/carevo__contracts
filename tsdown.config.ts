import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: "./generated/api/index.ts",
    outDir: "./dist/api",
    format: ["cjs", "esm"],
    dts: true,
    external: ["axios", "zod"],
  },
  {
    entry: "./generated/zod/index.ts",
    outDir: "./dist/zod",
    dts: true,
    format: ["cjs", "esm"],
    external: ["axios", "zod"],
  },
]);
