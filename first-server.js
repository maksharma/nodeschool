'use strict';

var http = require('http');
var url = process.argv[2];

http.get(url, function cb(response) {
  var data = "";
  response.on('data', function(d){
    data += d.toString();
  });
  response.on('end', function () {
     console.log(data.length);
     console.log(data);
  });
})
.on('error',function err(errmsg){
  console.log(errmsg);
});