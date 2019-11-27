import { SAVE_DETAILLIST } from '../mutations-type'
import {reqDetail} from '../../api'

const state = {
  detailList:[]
}

const mutations = {
  [SAVE_DETAILLIST](state,detailList){
    state.detailList = detailList
  }
}

const actions = {

  async detailList({commit}) {
    let result = await reqDetail()
    if (result.Status === '0') {
      commit (SAVE_DETAILLIST,result.Datas.ProductPrices)
    }
  },
}



export default {
  state,
  mutations,
  actions
}