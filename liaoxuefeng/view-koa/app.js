const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
// 导入controller middleware:
const controller = require('./controller');

const app = new Koa();



// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(bodyParser());

// 使用middleware:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');

