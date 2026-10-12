import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = parseInt(env.VITE_PORT || env.PORT || '5174', 10);

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port,
      host: true,
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
      port,
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
  };
});
