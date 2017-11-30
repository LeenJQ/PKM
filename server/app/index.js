const Koa = require('koa');
const BodyParser = require("koa-bodyparser");
const logger = require('koa-logger');
const rest = require('./rest');
const app = module.exports= new Koa();

// 连接数据库，并把collection 绑定到 app.mongoDB 上
require("./models")(app);

app
  .use(BodyParser())
  .use(rest.routes())
  .use(rest.allowedMethods())
  .use(logger());

app.listen(3002);
