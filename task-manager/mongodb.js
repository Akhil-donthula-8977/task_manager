const mongodb = require('mongodb');
//const Db = require('mongodb/lib/db');
const mongoClient = mongodb.MongoClient;
const connectionurl = 'mongodb://127.0.0.1:27017';
const databasename = 'task-manager'
const ObjectID = mongodb.ObjectID
// const id=new ObjectID//this gives a new obkject id
// console.log(id.getTimestamp());
/* {mongoClient,objectID}=require('mongidb')*/
mongoClient.connect(connectionurl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => { //connect() is an asyncronous operation
  const db = client.db(databasename);





})
