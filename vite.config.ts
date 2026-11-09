import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['yodel-babbling-gothic.ngrok-free.dev'],
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
  build: {
    outDir: 'build',
    target: 'es2022',
    cssCodeSplit: true,
  },
})
