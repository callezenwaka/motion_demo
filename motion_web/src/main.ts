import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


const profile = localStorage.getItem('profile') === "true"? true : false;
store.dispatch('setProfile', profile);
const role = localStorage.getItem('role');
store.dispatch('setRole', role);

createApp(App).use(store).use(router).mount('#app')
