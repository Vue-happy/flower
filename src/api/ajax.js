import axios from "axios";
import qs from "qs";
import router from '../router'
// import { Toast } from "mint-ui";

const instance = axios.create({
  baseURL:'/api'
})

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
  return config
})

instance.interceptors.response.use(
  response => {
    return response.data
  }
  ,
  error => {
    console.log(error)
    if(!error.response){
      console.log(error.message)
      router.currentRoute.path !== '/login' && router.replace('/login')
    }else if(error.response.status === 401){
      console.log ('登录过期，请重新登录')
      router.currentRoute.path !== '/login' && router.replace('/login')
    }else if(error.response.status === 404){
      console.log ('请求资源未找到')
    }else{
      console.log ('请求失败1')
    }
    console.log ('请求失败2')
    return new Promise(()=>{})
  }
)



export default instance