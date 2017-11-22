/*
* @Author: AlanWang
* @Date:   2017-11-22 10:09:26
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-22 14:46:24
*/

// preferences's rules for registering
const createRule = {
  username: 'string',
  password: 'string'
}

// preferences's rules for updateById
const updateByIdRule = {
  username: { type: 'string', required: false },
  password: { type: 'string', required: false }
}

class User extends require('egg').Controller {
  async register () {
    const ctx = this.ctx
    ctx.validate(createRule)
    ctx.body = await ctx.service.user.create(ctx.request.body)
    ctx.status = 201
  }
}

module.exports = User