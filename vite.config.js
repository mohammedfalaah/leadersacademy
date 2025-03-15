import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/leadersacademy/", // Ensure this matches your repo name
  plugins: [react()],
});
