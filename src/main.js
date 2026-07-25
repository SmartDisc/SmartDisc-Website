import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { syncDocumentLocale } from './i18n'
import './assets/styles/index.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
syncDocumentLocale()
app.mount('#app')
