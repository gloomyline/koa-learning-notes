/*
* @Author: AlanWang
* @Date:   2017-11-21 11:35:23
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-22 10:16:54
*/

module.exports = app => {
  const mongoose = app.mongoose
  const UserSchema = new mongoose.Schema({
    uid: { type: Number, unique: true },
    status: { type: Number },
    createtime: { type: String },
    username: { type: String },
    password: { type: String }
  })
  return mongoose.model('User', UserSchema)
}