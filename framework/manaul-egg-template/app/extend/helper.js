/*
* @Author: AlanWang
* @Date:   2017-11-16 16:51:16
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-11-16 16:53:06
*/

const moment = require('moment')
exports.localeTime = time => moment(new Date(time * 1000)).fromNow()