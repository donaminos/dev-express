var express = require('express');
//	home = require('./routes/home.js'),
//	customer = require('./routes/customer.js');

var app = express();
/*
app.get('/', home.index);
//app.get('/customer', customer.index);
app.get('/customer/contact', customer.contact);

//customer/20
app.get('/customer/:id', function(req, res){
	res.send('Customer selected is ' +req.params.id);
});

//customer?id=20
app.get('/customer', function(req, res){
	res.send('Customer selected is ' +req.query.id);
});
*/


//config removed in Express 4
/*app.configure('development', function(){
	app.set('title', 'CRM Application');
});*/

// becomes
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
   app.set('title', 'CRM Application - dev');
} else if ('production' == env) {
   // configure stuff here
   app.set('title', 'CRM Application - prod');
}
 

app.get('/', function (req, res){
	res.send('value pf title ' + app.get('title'));
});

app.listen(3000);