/*
* @Author: AlanWang
* @Date:   2017-08-28 11:00:11
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-08-28 11:02:19
*/

'use strict'

module.exports = (options, app) => {
  return function* robotMiddleware(next) {
    const source = this.get('user-agent') || ''
    const match = options.ua.some(ua => ua.test(source))
    if (match) {
      this.status = 403
      this.message = 'Go away, robot'
    } else {
      yield next
    }
  }
}