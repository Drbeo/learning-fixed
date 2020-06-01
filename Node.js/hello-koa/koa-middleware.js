
const Koa = require('koa')
const app = new Koa()

// middleware的顺序很重要，也就是调用app.use()的顺序决定了middleware的顺序。
app.use(async (ctx, next) => {
    console.log(`请求地址： ${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`处理耗费Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 如果一个middleware没有调用await next() 后面的将不会执行 比如说用户权限检测
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
