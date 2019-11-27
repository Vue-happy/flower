
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import detailList from './modules/tls_details'

const store = new Vuex.Store({
  modules:{
    detailList
  },
  state,
  mutations,
  actions,
  getters
})
export default store