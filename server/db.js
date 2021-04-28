// require MongoDB modules and dotenv config
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri = process.env.URI;

// mongoclient connection
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// module client exported
module.exports = client;
