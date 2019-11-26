const mongoose = require('mongoose')
const express = require('express')
const http = require('http')
const indexRouter = require('./routers')

const app = express()
const server = http.createServer(app)

app.use(express.urlencoded({extended:true})) 

app.use('/',indexRouter)

app.get('/test', function (req, res) {
  res.send({
    code: 0,
    data: 'hello vue test!'
  })
})


mongoose.connect('mongodb://localhost/dang', {useNewUrlParser: true})
  .then(() => {
    console.log('连接数据库成功!!!')
    // 只有当连接上数据库后才去启动服务器
    server.listen('3000',()=>{
      console.log('服务器启动成功，请访问： http://localhost:3000 ')
    })
  })
  .catch(error => {
    console.error('连接数据库失败', error)
  })