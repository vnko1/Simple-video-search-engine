import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
  base: "/simple-video-search-engine/",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "./src/partials"),
    }),
    jsconfigPaths(),
  ],
});
