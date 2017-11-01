const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: require('fs').readFileSync('./src/index.template.html', 'utf-8')
})
server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  const context = {
    title: 'hello world!',
    meta: `
    <meta name="description" content="贝思客bestcake.com-你身边的甜品专家，在线销售各种口味的生日蛋糕、巧克力蛋糕、芝士、乳酪蛋糕、慕斯蛋糕、鲜奶蛋糕、商务蛋糕,婚庆蛋糕,已在北京/上海/天津/杭州/苏州/无锡/宁波/南京/绍兴九大城市开通服务,让生日蛋糕延至日常">
    <meta name="Keywords" content="生日蛋糕,巧克力蛋糕,芝士,乳酪蛋糕,慕斯蛋糕,鲜奶蛋糕,商务蛋糕,婚庆蛋糕,提供健康、高品质蛋糕、时尚经典方形蛋糕,在线预订,配送到家,货到付款,极地牛乳,松露巧克力,柏林之恋,新天鹅堡情人">
    `
  }

  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(html)
  })
})

const port = process.env.PORT || 8080
server.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
