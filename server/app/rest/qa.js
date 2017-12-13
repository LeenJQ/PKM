const ObjectID = require("mongodb").ObjectID;

module.exports = (router) => {
  router.get('/qa/list', async (ctx) => {
    ctx.body = await ctx.app.mongoDB.QA.find().toArray()
  })
  
  router.post('/qa/add', async (ctx) => {
    let valuesToUpdate = ctx.request.body
    delete valuesToUpdate['_id']  
    const res = await ctx.app.mongoDB.QA.insert(valuesToUpdate)
    ctx.body = res.result
  })
  
  router.put('/qa/edit/:id', async (ctx) => {
    let documentQuery = {"_id": ObjectID(ctx.params.id)}
    let valuesToUpdate = ctx.request.body
    delete valuesToUpdate['_id']
    const res = await ctx.app.mongoDB.QA.updateOne(documentQuery, valuesToUpdate)
    ctx.body = res.result
  })
  
  router.delete("/qa/:id", async (ctx) => {
    let documentQuery = {"_id": ObjectID(ctx.params.id)}; // Used to find the document
    ctx.body = await  ctx.app.mongoDB.QA.deleteOne(documentQuery);
  });
}