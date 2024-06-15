import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import console from "@cynario/console.image"

console.image("/test.png", {width: 256})

createApp(App).use(store).use(router).mount('#app')
