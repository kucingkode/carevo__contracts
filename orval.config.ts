import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "./openapi/openapi.yaml",
    output: {
      httpClient: "axios",
      target: "./generated/api/index.ts",
      override: {
        mutator: {
          path: "./src/api/axios-instance.ts",
          name: "customInstance",
        },
      },
    },
  },
  zod: {
    output: {
      client: "zod",
      mode: "single",
      target: "./generated/zod/index.ts",
    },
    input: {
      target: "./openapi/openapi.yaml",
    },
  },
});
