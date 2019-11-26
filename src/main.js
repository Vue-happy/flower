import Vue from 'vue'
import Vant from 'vant'
import App from './App.vue'


import  'lib-flexible/flexible'
import router from './router'
import { Field,Icon  } from 'vant';
Vue.config.productionTip = false

Vue.use(Field);
Vue.use(Icon);

new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  router,
})
