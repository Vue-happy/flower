import Vue from 'vue'
import App from './App'
import 'lib-flexible/flexible'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import loading from './assets/loading.gif'

import Comment from './components/Comment/Comment'
import Chat from './pages/Chat/Chat'


import {Overlay} from 'vant'


Vue.component('Comment',Comment)
Vue.component('Chat',Chat)



Vue.use(Overlay)
Vue.use(VueLazyLoad,{
  loading
})
new Vue({
  components:{App},
  template: '<App/>',
  router,
  store
}).$mount('#app')