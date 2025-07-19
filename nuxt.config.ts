import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from 'node:url';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['@/app/assets/css/main.css','material-icons/iconfont/material-icons.css'],
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url))
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})