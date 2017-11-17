/*
* @Author: AlanWang
* @Date:   2017-11-15 14:30:55
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-15 15:15:52
*/

class NewsController extends require('./base') {
  async list() {
    const ctx = this.ctx
    let page = ctx.query.page || 1
    let newsList = await ctx.service.news.list(page)
    await this.ctx.render('news/list.tpl', { list: newsList })
  }
}

module.exports = NewsController