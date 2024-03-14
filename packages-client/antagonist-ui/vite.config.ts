import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), vanillaExtractPlugin()],
  build: {
    copyPublicDir: true,
    lib: {
      entry: resolve(__dirname, "./src/index.tsx"),
      fileName: "antagonist-ui",
      name: "AntagonistUI",
      formats: ["es"],
    },
  },
});
