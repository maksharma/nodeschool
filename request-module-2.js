'use strict';
var request = require('request');

request({
  url: 'http://localhost:3000',
  //method: 'POST',
  method: 'GET',
  qs: 'google',
  json: {
    field1: 'dadsddssd',
    field2: 'asdf'
  }
}, function(err, res, body){
    if(err)
      console.log(err);
    else
      console.log(res.statusCode, body);
});