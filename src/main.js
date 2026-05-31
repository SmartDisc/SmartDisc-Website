import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/colors_and_type.css'
import './assets/landing.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
