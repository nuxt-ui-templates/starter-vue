import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import uiPro from '@nuxt/ui-pro/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    uiPro()
  ]
})
