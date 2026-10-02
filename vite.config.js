import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/kemenag-depok-news": {
        target: "https://depok.kemenag.go.id",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/kemenag-depok-news/, ""),
      },
      "/fonnte-api": {
        target: "https://api.fonnte.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fonnte-api/, ""),
      },
    },
  },
  preview: {
    proxy: {
      "/kemenag-depok-news": {
        target: "https://depok.kemenag.go.id",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/kemenag-depok-news/, ""),
      },
      "/fonnte-api": {
        target: "https://api.fonnte.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fonnte-api/, ""),
      },
    },
  },
  plugins: [
    react(),
  ]
});
