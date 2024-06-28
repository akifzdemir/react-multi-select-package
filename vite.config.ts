import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      outDir: "dist",
      insertTypesEntry: true,
      cleanVueFileName: true,
      copyDtsFiles: true,
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "react-multi-select",
      fileName: (format) => `react-multi-select.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "clsx",
        "tailwind-merge",
        "react/jsx-runtime",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          clsx: "clsx",
          "tailwind-merge": "twMerge",
          "react/jsx-runtime": "jsx",
        },
      },
    },
  },
});
