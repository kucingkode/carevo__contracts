import { defineConfig } from "tsdown";

export default defineConfig([
  {
    entry: "./generated/api/index.ts",
    outDir: "./dist/api",
    dts: true,
    external: ["axios", "zod"],
  },
  {
    entry: "./generated/zod/index.ts",
    outDir: "./dist/zod",
    dts: true,
    external: ["axios", "zod"],
  },
]);
