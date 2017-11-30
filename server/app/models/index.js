const mongoose = require('mongoose');
mongoose.Promise = Promise; // ES6 promises

module.exports = (app) => {
  mongoose.connect('mongodb://localhost:27017/PKM', {
    useMongoClient: true,
    promiseLibrary: global.Promise
  }).then((connection) => {
      app.mongoDB = {
        QA: connection.collection('qa')
      }
      console.log("Database connection established")
  }).catch((err) => console.error(err));
}