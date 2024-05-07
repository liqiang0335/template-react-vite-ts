import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://www.xxx.com",
        changeOrigin: true,
      },
    },
  },
});
