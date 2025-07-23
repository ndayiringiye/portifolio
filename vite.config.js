import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { motion } from "framer-motion";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    },
  },
  server: {
    port: 3000
  },
  optimizeDeps: {
    include: ['tailwindcss']
  }
})