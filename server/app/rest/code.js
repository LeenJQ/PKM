const ObjectID = require("mongodb").ObjectID;

module.exports = (router) => {
  router.get('/code/list', async (ctx) => {
    ctx.body = await ctx.app.mongoDB.Code.find().toArray()
  })
  
  router.post('/code/add', async (ctx) => {
    let valuesToUpdate = ctx.request.body
    delete valuesToUpdate['_id']  
    const res = await ctx.app.mongoDB.Code.insert(valuesToUpdate)
    ctx.body = res.result
  })
  
  router.put('/code/edit/:id', async (ctx) => {
    let documentQuery = {"_id": ObjectID(ctx.params.id)}
    let valuesToUpdate = ctx.request.body
    delete valuesToUpdate['_id']
    const res = await ctx.app.mongoDB.Code.updateOne(documentQuery, valuesToUpdate)
    ctx.body = res.result
  })
  
  router.delete("/code/:id", async (ctx) => {
    let documentQuery = {"_id": ObjectID(ctx.params.id)}; // Used to find the document
    ctx.body = await  ctx.app.mongoDB.Code.deleteOne(documentQuery);
  });
}