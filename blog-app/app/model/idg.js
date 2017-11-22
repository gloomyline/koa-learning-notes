/*
* @Author: AlanWang
* @Date:   2017-11-22 10:40:55
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-22 11:15:50
*/

module.exports = app => {
  const mongoose = app.mongoose
  const IdgSchema = new mongoose.Schema({
    modelname: { type: String },
    nid: { type: Number, default: 0 },
    uid: { type: Number, default: 0 },
    tid: { type: Number, default: 0 }
  })

  return mongoose.model('Idg', IdgSchema, 'IdGenerator')
}