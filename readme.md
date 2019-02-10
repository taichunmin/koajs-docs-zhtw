---
actionLink: /guide
actionText: 快速上手 ➜
footer: MIT Licensed | Copyright © 2018-present Koa contributors
heroImage: /hero.png
heroText: ' '
home: true
lang: zh-TW
tagline: Node.js 的新時代網站開發框架
features:
- title: Express 的繼任者
  details: Koa 是由 Express 原班人馬打造的新時代網站開發框架，致力於成為開發 API 及伺服器端應用程式的一個更輕量、更富有表現力、更健壯的選擇。
- title: Async / Await
  details: Koa 透過 async 函式幫你拋棄 callback，並增強錯誤處理的能力。
- title: Middleware
  details: Koa 雖然沒有提供任何內建的 middleware，但是它提供了一套優雅的方法來幫您撰寫 middleware，讓您的伺服器端應用程式開發的又快又好。
---

## 安裝

```bash
$ npm install koa
```

## Hello Koa

```js
const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
```