module.exports = {
  async before(page, options) {
    const news = await page.$('a.mnav[name="tj_trnews"]')
    await news.click()
    await page.waitForNavigation({waitUntil: 'networkidle0'})
  },
  async fill(page, options) {
    const inputEle = await page.$('input#ww')
    await inputEle.focus()
    await inputEle.type(options.keywords)
    const submitBtn = await page.$('#s_btn_wr')
    await submitBtn.click()
    await page.waitForNavigation({waitUntil: 'networkidle0'})
  },
  async after(page, options) {
    return await page.$$eval('.c-title', nodes => nodes.map(node => node.innerText))
  }
}
