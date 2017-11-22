/*
* @Author: AlanWang
* @Date:   2017-11-22 10:22:29
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-22 15:26:05
*/

class User extends require('egg').Service {
  async create (request) {
    if (!request) { return }
    const ctx = this.ctx
    let doc = ctx.model.Idg.findOneAndUpdate({ modelname: 'Counter' }, { $inc: { 'uid': 1 } }, { new: true } )
    console.log('11231', doc.uid)
    request.uid = doc.uid
    let result = await ctx.model.User.create(request)
    return result
  }
}

module.exports = User