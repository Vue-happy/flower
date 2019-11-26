const express = require('express')
const sms_util = require('../util/sms_util')
const UserModel = require('../models/UserModel')
const createToken = require('../token/createToken')
const checkToken = require('../token/checkToken')

const router = express.Router()
const users = {}

// 获取首页商品列表
router.get('/home_flower',function(req,res) {
  setTimeout(function () {
    const data = require('../datas/flower.json')
    res.send({code:0,data})
  })
})

// //获取底部分类列表数据
//   router.get('/category_bottom', function(req, res) {
//     setTimeout(function () {
//       const data = require('../data/category.json')
//       res.send({code: 0, data})
//     }, 300)
//   })

//   router.get('/msite/freshsale', function(req, res) {
//     setTimeout(function () {
//       const data = require('../data/kk.json')
//       res.send({code: 0, data})
//     }, 300)
//   })

//发送验证码短信
router.get('/sendcode', function (req, res, next) {
  //1. 获取请求参数数据
  var phone = req.query.phone;
  //2. 处理数据
  //生成验证码(6位随机数)
  var code = sms_util.randomCode(6);
  //发送给指定的手机号
  console.log(`向${phone}发送验证码短信: ${code}`);
  sms_util.sendCode(phone, code, function (success) {//success表示是否成功
    if (success) {
      users[phone] = code
      console.log('保存验证码: ', phone, code)
      res.send({"code": 0})
    } else {
      //3. 返回响应数据
      res.send({"code": 1, msg: '短信验证码发送失败'})
    }
  })
})

//请求登录
router.post('/login_sms', function (req, res, next) {
  console.log(req.body)
  var phone = req.body.phone;
  var code = req.body.code;
  console.log(phone,code)
  if (users[phone] != code) {
    res.send({code: 1, msg: '验证码有误'});
    return;
  }
  //删除保存的code
  delete users[phone];

  UserModel.findOne({phone})
    .then(user => {
      if (user) {
        user._doc.token = createToken(user._id)
        res.send({code: 0, data: user})
        res.setHeader('content-type','text/html;charset=utf-8')
      } else {
        //存储数据
        return new UserModel({phone}).save()
      }
    })
    .then(user => {
      user._doc.token = createToken(user._id)
      res.send({code: 0, data: user})
    })
    .catch(error => {
      console.error('/login_sms', error)
    })
})


module.exports = router;

