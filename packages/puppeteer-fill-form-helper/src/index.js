const debugObj = require('./debug')

const SCOPE_PREFIX = '@ea'
// preset prefix
const PRESET_PREFIX = 'puppeteer-fill-form-preset-'

/**
 *
 * @param presetName
 * @returns {any}
 */
function loadPreset(presetName = '') {
  try {
    return require(presetName)
  } catch (e) {
    try {
      return require(`${PRESET_PREFIX}${presetName}`)
    } catch (err) {
      try {
        return require(`${SCOPE_PREFIX}/${PRESET_PREFIX}${presetName}`)
      } catch (error) {
        // eslint-disable-next-line max-len
        throw new Error(`Can't find preset named ${presetName} or ${PRESET_PREFIX}${presetName} or ${SCOPE_PREFIX}/${PRESET_PREFIX}${presetName} \n ${error}`)
      }
    }
  }
}

const urlParser = require('url-parse')

module.exports = {
  PRESET_PREFIX,
  loadPreset,
  urlParser,
  ...debugObj
}
