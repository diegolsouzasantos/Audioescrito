const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname + '/views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./routes/router');

app.use('/', routes);

app.use(function (req, res, next) {
	let err = new Error('File Not Found');
	err.status = 404;
	next(err);
});
  
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.send(err.message);
});

app.listen(1000, function () {
	console.log('Application running on port 10000');
});