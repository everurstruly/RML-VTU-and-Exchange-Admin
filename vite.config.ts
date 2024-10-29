// vite.config.ts
import path from "path";
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generouted(),
    ViteAliases(),
    tsconfigPaths(),
  ],
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src"),
  //   },
  // },
})