import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Yang Do List",
        short_name: "Yang Do List",
        start_url: "/",
        display: "standalone",
        background_color: "blue",
        theme_color: "blue",
        icons: [
          {
            src: "public/icon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "public/icon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
