// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from './router';
import VueRouter from 'vue-router';
import goods from '../src/components/goods/goods';
import seller from '../src/components/seller/seller';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    { path: '/goods', component: goods },
    { path: '/seller', component: seller }
  ]

var router =  new VueRouter({
    routes
})

const app = new Vue({
    router
  }).$mount('#app')
export default router;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})




