/*
* @Author: AlanWang
* @Date:   2017-08-28 11:07:02
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-08-28 11:13:41
*/

'use strict'

const assert = require('assert')
const mock = require('egg-mock')
describe('test/app/middleware/robot.test.js', () => {
  let app
  before(() => {
    // create instance of current app
    app = mock.app()
    // only excute the test instance when the app has started already
    return app.ready()
  })
  afterEach(mock.restore)
  it('should block robot', () => {
    return app.httpRequest()
      .get('/')
      .set('User-Agent', 'Baiduspider')
      .expect(403)
  })
}) 