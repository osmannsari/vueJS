import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { router } from "./router";
import store from './store';

import $http from '../src/plugins/http';




Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')


Vue.prototype.$http = $http;
const token = localStorage.getItem('token');
if (token) {
 $http.defaults.headers.common['Authorization'] = token;

}