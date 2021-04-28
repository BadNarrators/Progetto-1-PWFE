const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri = process.env.URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");

//   console.log('Connection estabilished with MongoDB');
//   client.close();
// });

module.exports = client;
