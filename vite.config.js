import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfill";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/swagatamroy/",
  plugins: [
    react(),
    nodePolyfills({
      include: ["path", "fs"],
      overrides: {},
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
