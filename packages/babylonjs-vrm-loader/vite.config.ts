import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist/example',
    commonjsOptions: {
      include: [/babylon-mtoon-material/, /node_modules/],
    },
  },
  plugins: [react()],
  optimizeDeps: {
    include: [
      'babylon-mtoon-material'
    ]
  }
})
