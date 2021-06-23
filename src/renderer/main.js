import Vue from 'vue'
import store from './store'
import ElementUI from 'element-ui'
import './theme/index.css'
import './assets/css/font-awesome.min.css'
import './assets/css/style.css'
import router from './router'
import Function from './function'

import App from './App.vue'
Vue.prototype.$Func = Function
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (!sessionStorage.getItem('tokenKey') && to.path != '/login') {
    next({path: '/login'});

  } else {
    next();
  }
});
router.afterEach(transition => {

});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
