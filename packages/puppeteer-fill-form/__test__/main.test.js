/**
 * Summary.
 *  main test file.
 *
 * Description
 *  This is the main test file
 *
 * @file   This main test file for class puppeteer-fill-form.
 * @author teeeemoji.
 * @since 2020-1-19
 */
const puppeteerFillForm = require('../index')

describe('fill baidu search form', function () {
  jest.setTimeout(30000)
  it('fill baidu search form',
    async function (done) {
      const result = await puppeteerFillForm({
        url: 'https://www.baidu.com/',
        preset: 'baidu-search',
        keywords: '肺炎'
      })
      expect(result).toBeInstanceOf(Array)
      done()
    })
})
