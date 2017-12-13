const koaRouter = require('koa-router');
const router = module.exports = koaRouter();

require('./qa')(router)
require('./code')(router)
