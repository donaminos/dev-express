var fs = require('fs');

fs.readFile('writeToConsole.js', 'utf-8', function(err, content){
	
	if(err){
		throw err;
	}	

	console.log(content);
});

console.log('File is comming async:');