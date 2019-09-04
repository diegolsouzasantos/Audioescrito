const app = require('./src/config/express');

const port = app.get('port');

app.listen(port, function() { 
	console.log('Application running on port:' + port) 
}); 