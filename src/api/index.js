import request from './ajax'


export const reqDetail = () => request.get('/detail')

import ajax from "./ajax";

export const getflowers = () => ajax({
  url:'/home_flower'
})

