// config/config.default.js
exports.keys = 'safety Cookie string'

// add configuration of view engine
exports.view = {
	defaultViewEngine: 'nunjucks',
	mapping: {
		'.tpl': 'nunjucks'
	}
}

// add configuratin of views
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
}

// add middleware robot
exports.middleware = [
  'robot'
]

// robot's configuration
exports.robot = {
  ua: [
    /Baiduspider/i
  ]
}