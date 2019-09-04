const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../../routes/routes');
const database = require('../../lib/database/index');

const app = express();
database.connect();

app.set('port', 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

app.use('/', routes);

module.exports = app;