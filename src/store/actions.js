import {getflowers} from '../api/index'
import {SAVE_FLOWERS} from './mutations-type'

//发送请求,获取数据
export default {
  async getFlowersAction({commit}){
    let result = await getflowers()
    if (result.Status === '0') {
      commit(SAVE_FLOWERS,{data:result.Datas})
    }
  }
}
