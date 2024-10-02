import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'
import vuetify from './plugins/vuetify' // Import Vuetify

createApp(App)
  .use(vuetify) // Use Vuetify
  .mount('#app')
