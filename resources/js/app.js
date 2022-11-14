require('./bootstrap');

import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';
import { vue } from 'laravel-mix';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

import App from './components/App.vue';

const app = new Vue({
    id: '#app',
    render(h) { return h(App)}
})