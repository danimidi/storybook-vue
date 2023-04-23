import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import VueAxios from 'vue-axios';

import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

const app = createApp(App);

app.use(store).use(router).use(VueAxios, axios).use(BootstrapIconsPlugin);
app.mount('#app');

import './main.css';
