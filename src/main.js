import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'virtual:svg-icons-register';
import Maska from 'maska';
import './api/mock.js'

createApp(App).use(store).use(router).use(Maska).mount('#app');
