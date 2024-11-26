import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://github.io/IbadT/dissertations.git",
  // base: "https://IbadT.github.io/dissertations",
  plugins: [react()],
  assetsInclude: ['**/*.docx']
})
