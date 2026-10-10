import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Potturi_919_Portfolio/',
  build: {
    outDir: 'docs'
  }
})
