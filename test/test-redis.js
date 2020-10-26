const Redis = require('ioredis')
const redis = new Redis({
    // 传入配置参数
    port:6379,//默认
    host:'127.0.0.1',//主机，默认
    family:5,//ipv4 ipv6
    // password:'',//密码
})

  
async function a(){
    await redis.set('1',123)

      // 获取所有keys
    const keys = await redis.keys('*')
console.log(keys)
}
a()