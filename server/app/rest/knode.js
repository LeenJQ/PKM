const ObjectID = require("mongodb").ObjectID;

module.exports = (router) => {
  router.get('/knode/list', async (ctx) => {
    ctx.body = await ctx.app.mongoDB.Knode.find().toArray()
  })
  
  router.post('/knode/add', async (ctx) => {
    let valuesToUpdate = ctx.request.body
    delete valuesToUpdate['_id']  
    const res = await ctx.app.mongoDB.Knode.insert(valuesToUpdate)
    ctx.body = res.result
  })
  
  router.put('/knode/edit/:id', async (ctx) => {
    let documentQuery = {"_id": ObjectID(ctx.params.id)}
    let valuesToUpdate = ctx.request.body
    delete valuesToUpdate['_id']
    const res = await ctx.app.mongoDB.Knode.updateOne(documentQuery, valuesToUpdate)
    ctx.body = res.result
  })
  
  router.delete("/knode/:id", async (ctx) => {
    let documentQuery = {"_id": ObjectID(ctx.params.id)}; // Used to find the document
    ctx.body = await  ctx.app.mongoDB.Knode.deleteOne(documentQuery);
  });
}