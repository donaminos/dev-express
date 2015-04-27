var connect = require('connect');
var serveStatic = require('serve-static');

var server = connect()
			.use(serveStatic(__dirname + '/public'))
			.use(function onRequest(request, response){
				response.end('Hello from connect usins static method...')
			}).listen(3000);