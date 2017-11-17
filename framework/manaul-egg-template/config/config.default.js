exports.keys = 'Cookie safety string.'

// add view config
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
}

// add news config
exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
}

// add middleware robot detector
exports.middleware = [
  'robot'
]

// robot's configurations
exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i
  ]
}