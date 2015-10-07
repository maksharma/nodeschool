
/**
 * Module dependencies.
 */

var mysql = require('mysql');
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
'use strict';
var path = require('path');

var app = express();
var bodyParser = require('body-parser');  

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mysql'
});
/*connection.connect();
//connection.query('SELECT name from test where age =?',[23], function(err, rows, fields) {
connection.query('SELECT * from test', function(err, rows, fields) {

  if (!err){
    console.log('The solution is: ');
     rows.forEach(function (row){
      console.log(row.name.toString());
    });
  //response.JSON(rows);
  }
  else
    console.log('Error while performing Query.');
});

connection.end();
*/
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
app.use(bodyParser());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.post('/', routes.index1, routes.index222);
app.get('/users', user.list);

app.get('/', function(req, res){
  // login form
  var html = '<form action="/" method="post">' +
               'Enter your name:' +
               '<input type="text" name="userName" placeholder="..." />' +
               '<input type="password" name="password" ' +
               '<br>' +
               '<button type="submit">Submit</button>' +
            '</form>';
               
  res.send(html);
});

  connection.connect();
app.post('/', function(req, res){
  var userName = req.body.userName;

  connection.query('SELECT name from test where name = ?',[userName], function(err, rows, fields) {

  if (!err && rows.length>0){
    /*console.log('The solution is: ');
     rows.forEach(function (row){
      console.log(row.name.toString());
    });*/
    console.log(rows);
    console.log('you are successfully logged in');
      
  }
  else
    console.log('Can\'t log you in');
});

//connection.end();
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
