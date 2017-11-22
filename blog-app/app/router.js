/*
* @Author: AlanWang
* @Date:   2017-11-20 16:03:54
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-22 11:40:44
*/

module.exports = app => {
  app.get('/', app.controller.home.index)
  app.post('/api/user/register', app.controller.user.register)
  // app.resources('user', '/api/user', 'user')
}