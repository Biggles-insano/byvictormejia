import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/byvictormejia/', // 👈 nombre exacto de tu repositorio en GitHub
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true
  }
})