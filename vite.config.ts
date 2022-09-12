import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { Plugin } from 'rollup';
import legacy from "@vitejs/plugin-legacy";
import qiankun from 'vite-plugin-qiankun';

// https://vitejs.dev/config/
export default defineConfig(({command, mode }) => {
  console.log(command, mode)
  return {
    plugins: [
      react(),
      // legacy({
      //   targets: ['defaults', 'not IE 11']
      // }),
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
          // modifyVars: {
          //   '@primary-color': 'var(--test-color)'
          // },
          javascriptEnabled: true
        },
        plugin: {

        }
      }
    },
    server: {
      port: 3002
    },
    build: {
      target: "ES2015",
    },
  }
});
