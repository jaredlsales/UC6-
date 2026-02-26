import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  //caminho que ele tem que fazer quando compilar
  base:"/",
  plugins: [react()],
})
