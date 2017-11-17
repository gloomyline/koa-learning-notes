/*
* @Author: AlanWang
* @Date:   2017-11-16 17:06:12
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-16 17:48:43
*/

// options === app.config.robot
module.exports = (options, app) => {
  return async function (ctx, next) {
    const source = ctx.get('user-agent') || ''
    const match = options.ua.some(ua => ua.test(source))
    if (match) {
      ctx.status = 403
      ctx.message = 'Go away, robot.'
    } else {
      await next()
    }
  }
}