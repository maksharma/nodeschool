'use strict';

var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filepath = process.argv[3];

var server = http.createServer(function callback(request, response){
  var dataStream = fs.createReadStream(filepath);
  dataStream.pipe(response);
});

server.listen(port);