exports.keys = "Alan's blog app"

exports.mongoose = {
  url: 'mongodb://localhost:27017/blog',
  options: {}
}

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
}

exports.security = {
  ignore: '/api/',
  csrf: {
    ignoreJSON: true
  }
}