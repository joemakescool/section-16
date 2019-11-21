import Vue from 'vue'
import App from './App.vue'

// Styles
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Routes
import VueRouter from "vue-router";
Vue.use(VueRouter);
import { routes } from './routes/routes'
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
