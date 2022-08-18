import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
// import legacy from "@vitejs/plugin-legacy";
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    qiankun('sub-root', { useDevMode: true })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@primary-color': 'var(--test-color)'
        },
        // customizeThemeLessPath: resolve(__dirname, 'src/themes.less'),
        // modifyVars: resolve(__dirname, 'src/themes.less'),
        javascriptEnabled: true
      }
    }
  },
  server: {
    port: 3002
  },
  build: {
    target: "ES2015",
  },
});
