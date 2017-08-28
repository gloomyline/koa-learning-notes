/*
* @Author: AlanWang
* @Date:   2017-08-28 10:57:05
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-08-28 10:58:13
*/

'use strict'

const moment = require('moment')
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow()