import { SAVE_DETAILLIST , SAVE_SORT_NUM,SAVE_SORT_PRICE } from '../mutations-type'
import {reqDetail} from '../../api'

const state = {
  detailList:[]
}

const mutations = {
  [SAVE_DETAILLIST](state,detailList){
    // console.log(state,detailList)
    state.detailList = detailList
    // console.log(detailList)
  },
  [SAVE_SORT_NUM](state){
    console.log(state)
    let result = state.detailList.sort( (a,b) => {
      b.ItemCode *= 1
      a.ItemCode *= 1
      return  b.ItemCode - a.ItemCode
      
    })
    state.detailList = result
    // console.log(detailList,result)
  },
  [SAVE_SORT_PRICE](state){
    console.log(state)
    let result = state.detailList.sort( (a,b) => {
      return b.Price - a.Price
    })
    state.detailList = result
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