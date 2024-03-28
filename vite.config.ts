import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    Pages({
      dirs: 'src/pages'
    })
  ],

  /**
   * Création d'alias pour simplifier l'import des fichiers 
   */
  resolve : {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, 'src/components/layouts')
      },
    ]
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})
