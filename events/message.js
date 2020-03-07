const owo = require('../commands/owo')
const oof = require('../commands/oof')
const beep = require('../commands/beep')

module.exports = (client, message) => {
  switch(message.content) {
    case 'owo':
      return owo(message)
      break;
    case 'oof':
      return oof(message)
      break;
    case 'beep':
      return beep(message)
      break;
  }

}