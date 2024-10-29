// vite.config.ts
import path from "path";
import react from '@vitejs/plugin-react-swc'
import generouted from '@generouted/react-router/plugin'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    generouted(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
})