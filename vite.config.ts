import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true, // allows us to use vitest library methods in unit test without explicit imports
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts", // path to setup file
    reporters: "verbose"
  },
});
