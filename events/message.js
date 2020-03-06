const owo = require('../commands/owo')

module.exports = (client, message) => {
  if (message.content.startsWith('owo')) {
    return owo(message)
  }
}