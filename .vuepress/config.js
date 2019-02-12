module.exports = {
  title: 'Koa',
  description: 'Node.js 的新時代網站開發框架',
  ga: 'UA-39556213-4',
  evergreen: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  markdown: {
    lineNumbers: true,
    slugify: require('limax')
  },
  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/koajs/koa' },
      { text: '範例', link: 'https://github.com/koajs/examples' },
      { text: 'Middleware 與 Wiki', link: 'https://github.com/koajs/koa/wiki' },
    ],
    sidebar: [
      '/api/',
      '/api/context',
      '/api/request',
      '/api/response',
      '/guide',
      '/faq',
      '/error-handling',
      '/koa-vs-express',
      '/migration',
      '/troubleshooting',
    ]
  }
}