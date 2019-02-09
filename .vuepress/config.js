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
  }
}