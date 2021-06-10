const { loadMessages } = require('./helpers/transformMessages')

module.exports = function(source) {
  return JSON.stringify(
    loadMessages(this.resourcePath, this.rootContext, JSON.parse(source)),
    null,
    2,
  )
}
