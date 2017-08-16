import * as Koa from 'koa'
import * as config from './config'

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = config.prefix
})

app.listen(3000)

export default app
