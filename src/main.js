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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if(to.hash) {
      return { selector: to.hash }
    }

    return { x: 0, y: 0 } // top of the page again!
  }
});

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  console.log('global before each ', to, from, next);
  next(); // must do this or it gets frozen. next is a function

});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
