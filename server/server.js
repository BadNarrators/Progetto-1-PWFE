// require modules
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../public'));
app.set('port', process.env.PORT || 8000);

module.exports = app;
