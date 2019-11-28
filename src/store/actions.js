import {getflowers} from '../api'
import {SAVE_FLOWERS} from './mutations-type'

//发送请求,获取数据
export default {
  async getFlowersAction({commit}){
    console.log(111111111)
    let result = await getflowers()
    console.log(3333333333333333333333333)
    if (result.Status === '0') {
      commit(SAVE_FLOWERS,{data:result.Datas})
      console.log(2222222222222222222222)
    }
  }
}
