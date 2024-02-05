import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src/App' },
      { find: '@public', replacement: '/src/public' },
    ],
  },
  server: {
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          css: "./style.scss"
        }
      }
    }
  }
})
