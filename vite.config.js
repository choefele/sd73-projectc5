import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/sd73-projectc5/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.js',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
})
