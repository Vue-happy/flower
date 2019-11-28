import request from './ajax'
// import ajax from "./ajax";


export const reqDetail = () => request.get('/detail')


export const getflowers = () =>  request.get('/home')

