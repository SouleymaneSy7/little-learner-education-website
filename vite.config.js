import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: "/",
    strictPort: false,
    port: 3000,
  },
  clearScreen: false,
});
