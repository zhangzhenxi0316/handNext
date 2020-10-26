const Koa = require('koa')
// koa router
const Router = require('koa-router')
// next
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
// next渲染完毕之后在发送请求
app.prepare().then(()=>{
    const server = new Koa()
    const router = new Router()
   
    router.get('/a/:id', async (ctx) => {
        const id = ctx.params.id;
        // handle传入的第三个参数跟我们next.js中用Router.push({})传入的数组一样
        console.log(id)
          await handle(ctx.req, ctx.res, {
            pathname: '/a',
            query: {
              id
            }
          })
          ctx.respond = false
        })
      
      
        server.use(router.routes())

    server.use(async(ctx,next)=>{
        // console.log(111)
        await handle(ctx.req,ctx.res)
        ctx.respond = false
        await next()
    })
    server.listen(3000,()=>{
        console.log('3000端口监听')
    })
})