/*
* @Author: AlanWang
* @Date:   2017-11-14 15:06:48
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-15 14:42:07
*/
module.exports = app => {
  app.get('/', app.controller.home.index)
  app.get('/news', app.controller.news.list)
}