/*
能操作users集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')

// 2.字义Schema(描述文档结构)
const userSchema = new mongoose.Schema({
  'phone': {'type': String}
})

// 3. 定义Model(与集合对应, 可以操作集合)
const UserModel = mongoose.model('users', userSchema)

// 4. 向外暴露Model
module.exports = UserModel