const owo = require('../commands/owo')
const oof = require('../commands/oof')

module.exports = (client, message) => {
  switch(message.content) {
    case 'owo':
      return owo(message)
      break;
    case 'oof':
      return oof(message)
      break;
  }

}