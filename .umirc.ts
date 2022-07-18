import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "pnpm",
  proxy: {
    "/api": {
      target: "http://localhost:8888/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },

  clientLoader: {},
  dva: {},
  plugins: ["@umijs/plugins/dist/dva"],
});
