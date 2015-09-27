var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var http = require('http');
var routes = require('./routes');
var engine = require('ejs-locals')

fs.exists = fs.exists || path.exists;


app.engine('ejs', engine);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.set('port',process.env.PORT || 12345);


//
// 透過app.use(express.static(path.join(__dirname,'public')))
// 是使得靜態檔指向都會在/public中
//
app.use(express.static(path.join(__dirname,'public')));
app.use(app.router);

app.get('/',routes.index);

http.createServer(app).listen(app.get('port'),function(res,req){
	console.log('Express Server runs on port' + app.get('port'));
});
