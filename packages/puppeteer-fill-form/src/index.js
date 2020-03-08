/**
 * Summary.
 *  puppeteer-fill-form
 *
 * Description
 *  use puppeteer to fill form in page
 *
 * @file   This files defines the puppeteer-fill-form main class.
 * @author teeeemoji.
 * @since 2020-1-19
 */
const puppeteer = require('puppeteer')
const {loadPreset, debug, isDebug} = require('puppeteer-fill-form-helper')

/**
 * @public
 * fill form with options
 * @param options
 * @param [options.url] required
 * @param [options.preset] required
 * @param browser a puppeteer instance, is not required
 * @returns {Promise<any>}
 */
const puppeteerFillForm = async (options, browser) => {
  debug(`launch url ${options.url}, using preset ${options.preset}`)

  const preset = loadPreset(options.preset)

  browser = browser || await puppeteer.launch({
    executablePath: process.env.CHROME_BIN || null,
    headless: !isDebug,
    args: isDebug ? [] : ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const page = await browser.newPage()
  await page.goto(options.url)

  if (preset.before) {
    await preset.before(page, options)
  }

  if (preset.fill) {
    await preset.fill(page, options)
  }

  let result = undefined

  if (preset.after) {
    result = await preset.after(page, options)
  }

  await browser.close()
  debug(`launch url ${options.url} end, result is ${result}`)
  return result
}

module.exports = puppeteerFillForm
