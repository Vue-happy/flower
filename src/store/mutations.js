import {SAVE_FLOWERS} from './mutations-type'

export default{
  [SAVE_FLOWERS](state,{data}){
    let datas = data.ProductPrices.slice(0,11)
    state.flowers = datas

  }
}
