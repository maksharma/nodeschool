'use strict';

var http = require('http');
var map = require('through2-map');
var querystring = require('querystring');

var port = process.argv[2];

var body='';

var server = http.createServer(function callback(request, response){
  if(request.method == 'POST'){

  }
});
server.listen(port);


function processPost(request, response, callback){
    var data = '';
    if(request.method == 'POST'){
      request.on('data',function(d){
        data+=d;
        console.log(data);
      });
    }
};