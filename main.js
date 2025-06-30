import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router/index.js'

// Create Vue app
const app = createApp(App)

// Use router
app.use(router)

// Mount the app
app.mount('#app') 