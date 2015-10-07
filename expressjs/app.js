
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var bodyparser = require('body-parser');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.urlencoded({extended: false}));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/api', routes.index);
//app.get('/', routes.index2);
//app.get('/users', user.list, user.response);
/*
app.get('/',function(req, res){
  res.render('index',{date: new Date().toDateString()});
  //res.send('hello world2');
  
});
*/

app.post('/', function(req, res){
  res.json(req.body);
});

http.createServer(app).listen(app.get('port'), function(){
//http.createServer(app).listen(process.argv[2], function(){
  console.log('Express server listening on port ' + app.get('port'));
}).on('error',function(errmsg){
  console.log(errmsg);
});
