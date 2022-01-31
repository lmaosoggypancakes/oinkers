import { createApp } from 'vue'
import App from './App.vue'
import { router } from './util/router'
import './index.css'
const app = createApp(App)
    .use(router)
    .mount("#app")
