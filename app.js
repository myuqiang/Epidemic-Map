const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
var cors = require('koa2-cors');
const path = require('path');
const static = require('koa-static');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');


const index = require('./routes/index')
// const users = require('./routes/users')

// error handler
onerror(app)
app.use(cors());
app.use(historyApiFallback({
  index: '/index.html',
}))
app.use(static(path.join( __dirname, './public/dist')))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
// app.use(json())
app.use(logger())
// app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  console.log(ctx)
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes()).use(index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
