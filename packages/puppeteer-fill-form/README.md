# puppeteer-fill-form

use puppeteer to fill form, and get information(like cookies) from chromium page.

使用 puppeteer 打开网页填写表单, 然后从页面中获取必要的信息. 这就是 puppeteer-fill-form.

puppeteer-fill-form 已经提供多个成熟可用的 preset, 预设是指一串已经确定的自动化操作.

puppeteer-fill-form 将会打开您输入的 url 网站, 并在网站上执行这写自动化的操作. 如果预设的操作不能在您指定的 url 网站上执行, 您将不能得到预期输出的结果.

目前官方已经提供以下预设, 您可以方便地使用如下的功能:

-   抓取 baidu 新闻搜索结果 `puppeteer-fill-form-preset-baidu-search`
-   模拟字节跳动 EA-采购项目的登录并获取 cookie `puppeteer-fill-form-preset-p2p-login`

并且您也可以开发自己的 preset, 并在 puppeteer-fill-form 中使用他们.

## 安装

```console
$ npm install puppeteer-fill-form puppeteer-fill-form-preset-github-login
```

## 使用

`puppeteer-fill-form` 核心配置是 `url` 和 `preset`, 其他配置项都是为 `preset` 提供的.

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

```javascript
const puppeteerFillForm = require('puppeteer-fill-form')

const result = await puppeteerFillForm({
    url: 'https://github.com/login/login.jsp',
    preset: 'github-login',
    user: 'teeeemoji',
    password: 'xxxx'
})
// result 将会得到 url 指定网站 origin 域名下的 cookie 详细信息列表
```

## 开发预设

`puppeteer-fill-form` 的核心能力是打开 puppeteer 然后依次执行 `preset` 的方法. 整个执行过程如下图所示:

![image.png](https://i.loli.net/2020/02/13/WsyFXqMfoGRtLOA.png)

因此一个最简单的预设就是:

```javascript
module.exports = {
  async before(page, options) {},
  async fill(page, options) {},
  async after(page, options) {}
}
```

## API

## 如何贡献代码

`preset` 的开发完全可以自由进行, 但如果您希望维护到 `puppeteer` 中, 欢迎随时申请权限. EA-采购项目的所有都有本项目的 master 权限.

## License

This project is licensed under the [MIT license](LICENSE).
