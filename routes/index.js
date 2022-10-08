const allServices = require('../controllers/mysqlConfig');

const router = require('koa-router')()

router.get('/getData', async (ctx, next) => {
  console.log(ctx)
  ctx.body = await allServices.findAllUsers();
})



router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/picture', async (ctx, next) => {
  ctx.body = {
    title: ['https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=1956604245,3662848045&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF',
    'https://t7.baidu.com/it/u=2529476510,3041785782&fm=193&f=GIF'
  ]
  }
})

module.exports = router
