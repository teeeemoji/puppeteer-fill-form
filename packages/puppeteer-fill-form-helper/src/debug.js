const DEBUG_KEY = 'puppeteer-fill-form'
const debug = require('debug')(DEBUG_KEY)
const isDebug = new RegExp(`${DEBUG_KEY}`).test(process.env.DEBUG)

if (isDebug) {
  debug('NOW you are on debug mode')
}

module.exports = {
  debug,
  isDebug
}
