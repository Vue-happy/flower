import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import loading from './assets/loading.gif'

Vue.use(VueLazyLoad,{
  loading
})
new Vue({
  components:{App},
  template: '<App/>',
  router,
  store
}).$mount('#app')