import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    legacy({
      targets: [
        "defaults",
        "iOS >= 12",
        "Safari >= 12",
        "Chrome >= 70",
        "Firefox >= 68",
        "not IE 11",
      ],
      modernPolyfills: true,
      renderLegacyChunks: true,
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: ["es2015", "safari12"],
    cssTarget: ["safari12"],
    minify: "terser",
    sourcemap: false,
  },
}));
