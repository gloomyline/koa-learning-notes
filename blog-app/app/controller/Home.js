/*
* @Author: AlanWang
* @Date:   2017-11-21 10:53:51
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-22 11:45:11
*/

class Home extends require('egg').Controller {
  async index () {
    const ctx = this.ctx
    ctx.body = 'Hello World!'
  }
}

module.exports = Home
