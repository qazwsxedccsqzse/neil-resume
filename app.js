var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var http = require('http');
var routes = require('./routes');
var engine = require('ejs-locals');

// for openshift
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 12345;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

fs.exists = fs.exists || path.exists;


app.engine('ejs', engine);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//app.set('port',process.env.PORT || 12345);
app.set('port',server_port);

//
// 透過app.use(express.static(path.join(__dirname,'public')))
// 是使得靜態檔指向都會在/public中
//
app.use(express.static(path.join(__dirname,'public')));
app.use(app.router);

app.get('/',routes.index);

http.createServer(app).listen(app.get('port'),function(res,req){
	console.log('Express Server runs on port ' + app.get('port'));
});


app.get('/css/[a-zA-Z]+\.css',function(req,res,next){
	console.log('param[0] =' + req.params[0]);
	if(path.exists(path.join(__dirname,'public/css/',req.params[0]))){
	  console.log('exist!');
	  res.sendStatus(200);
	  res.type('css');
      res.sendFile(path.join(__dirname,'public/css/',req.params[0]));
	}
	next();
});