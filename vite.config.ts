import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'
import { nitro } from 'nitro/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nitro(),
    vue(),
    ui({
      ui: {
        colors: {
          primary: 'green',
          neutral: 'zinc'
        }
      }
    })
  ]
})
