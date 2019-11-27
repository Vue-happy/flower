let express = require('express')

let detailList = require('./datas/detail')
let app = new express()
app.use(express.urlencoded({extended:true}))

app.get('/detail',(req,res) => {
  console.log(1111)
  res.send(detailList)
})

app.listen('3000',() => {
  console.log('成功')
})