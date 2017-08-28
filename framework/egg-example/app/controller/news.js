/*
* @Author: AlanWang
* @Date:   2017-08-28 10:11:16
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-08-28 10:55:07
*/

'use strict'

module.exports = app => {
  class NewsController extends app.Controller {
    *list() {
      const ctx = this.ctx
      const page = ctx.query.page || 1
      const newsList = yield ctx.service.news.list(page)
      console.log(newsList)
      yield ctx.render('news/list.tpl', { list: newsList })
    }
  }
  return NewsController 
}