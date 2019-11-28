let express = require('express')

let detailList = require('./datas/detail')
let app = new express()
let flower = require('./datas/flower')
app.use(express.urlencoded({extended:true}))

app.get('/detail',(req,res) => {
  console.log(1111)
  res.send(detailList)
})
app.get('/home_flower',(req,res) => {
  res.send(flower)
})

// app.get('/login',(req,res) => {})
app.listen('3000',() => {
  console.log('成功')
})