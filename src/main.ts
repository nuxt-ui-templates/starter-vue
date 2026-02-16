import './assets/css/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import ui from '@nuxt/ui/vue-plugin'

import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  routes,
  history: createWebHistory()
})

app.use(router)
app.use(ui)

app.mount('#app')

if (import.meta.hot) {
  handleHotUpdate(router)
}
