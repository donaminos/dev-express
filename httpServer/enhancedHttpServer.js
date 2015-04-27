var fs 		= require('fs'),
	http 	= require('http'),
	url 	= require('url'),
	path 	= require('path');

	var server = http.createServer(function onRequest (request, response){

		var urlParts = url.parse(request.url);
		console.log('url parts:');
		console.log(urlParts);

		var doc = './docs' + urlParts.pathname;
		console.log('Doc:');
		console.log(doc);
		
		fs.exists(doc, function fileExists(exists){

			if(exists){

				response.writeHead(200, {'Content-Type': 'text/plain'});
				fs.createReadStream(doc).pipe(response);

			} else {
				response.writeHead(404);
				res.end('Not found\n');
			}

		});

	}).listen(3000);

	console.log('Server running...');