/*
* @Author: AlanWang
* @Date:   2017-11-16 17:26:41
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-16 18:01:30
*/

// unit test for robot middleware
const assert = require('assert')
const mock = require('egg-mock')

describe('test/app/middleware/robot.test.js', () => {
  let app
  before(() => {
    // create instance of current app
    app = mock.app()
    // excute test file until waiting app to start successfully
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