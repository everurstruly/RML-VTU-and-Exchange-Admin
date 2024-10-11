// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generouted(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})