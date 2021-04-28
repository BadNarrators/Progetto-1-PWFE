// require modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const app = express();

// bodyparser 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('../public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../public/views'));
app.set('port', process.env.PORT || 8000);

module.exports = app;
