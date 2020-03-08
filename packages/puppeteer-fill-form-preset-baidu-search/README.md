# `puppeteer-fill-form-preset-baidu-search`

`puppeteer-fill-form` 的一个预设, 用于抓取 baidu 新闻第一页搜索结果的标题 

## Usage

Example:

```javascript
const puppeteerFillForm = require('puppeteer-fill-form')

const news = await puppeteerFillForm({
  url: 'https://www.baidu.com/',
  preset: 'baidu-search',
  keywords: '肺炎'
})
// news 将会得到baidu 新闻搜索结果第一页的所有标题组成的数组
```
