import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js"

createApp(App).use(store).mount('#app')

