var express = require('express'),
	path = require('path');

var app = express();

var env = process.env.NODE_ENV || 'development'

if( 'development' === env){

	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views');
	app.use(express.static(path.join(__dirname, 'public')));

} else if( 'production' === env){

}

app.get('/', function (req,res){
	res.render('empty');
});

/*app.get('/elements', function (req,res){
	res.render('elements');
});*/

app.get('/:viewname', function (req,res){
	res.render(req.params.viewname);
});


app.listen(3000);