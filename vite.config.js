import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      outDir: "dist",
      manifest: {
        name: "Rick-Morty",
        short_name: "RickMorty",
        description: "rick & morty app",
        theme_color: "#041527",
        start_url: "/",
        display: "standalone",
        icons: [
          {
            src: "./icons/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./icons/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "./icons/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
    }),
  ],
});
