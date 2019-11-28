<<<<<<< HEAD
import axios from 'axios'
import qs from 'qs'
import router from '../router'

// import { BASE_PATH } from '../config'
// import  { Message  } from 'element-ui';

const instance = axios.create({
  timeout: 10000,
  baseURL: '/api'
})

// 配置请求拦截器
instance.interceptors.request.use(config => {
  const {data} = config
  if (data instanceof Object) { // 只要data是对象就转换
    config.data = qs.stringify(data)
  }
  console.log('携带的参数',config)


instance.interceptors.request.use(config => {
  if(config.method.toUpperCase() === 'POST' && config.data instanceof Object){
    config.data = qs.stringify(config.data)
  }
  let token = localStorage.getItem('token_key')
  if(config.headers.needToken){
    if(token){
      config.headers.authorization = token
    }else{
      throw new Error('没有token,请先登录')
    }
  }
>>>>>>> origin/cui
  return config
})

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    const {status} = error.response
    loadingInstance.close()
    if(status === 404){
      alert('请求资源不存在')
      Message.error({
        message: '请求资源不存在',
        type: 'warning',
        duration:2000,
        center:true
      })

    }
    // 中断promise链
    return new Promise(()=>{})
  }
)

// export default instance