// vite.config.js / vite.config.ts
import { viteStaticCopy } from "vite-plugin-static-copy";

export default {
  base: "./",
  build: {
    outDir: "./docs",
    emptyOutDir: true, // also necessary
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "resources/images",
          dest: "assets",
          recursive: true,
        },
      ],
    }),
  ],
};
