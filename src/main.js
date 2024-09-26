import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import vuetify from './plugins/vuetify' // Import Vuetify

createApp(App)
    .use(vuetify) // Use Vuetify
    .mount('#app')
