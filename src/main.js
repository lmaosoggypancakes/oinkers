import { createApp } from 'vue'
import App from './App.vue'
import { router } from './util/router'
import './index.css'
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';

// Use plugin with defaults
const app = createApp(App)
    .use(router)
    .use(VCalendar)
    .mount("#app")
