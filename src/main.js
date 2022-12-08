import { createApp } from 'vue'
import './style.css'
import 'flowbite';
import App from './App.vue'
import store from './store/index.js'
import router from './router.js'



const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
