import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Pagina-de-Muestra---Tatuador/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
