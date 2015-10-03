'use strict';

var filepath = process.argv[2];
var extn= process.argv[3];

var filterer = require('./modular-filtered-ls-1.js');


filterer(filepath, extn, function (err, result){
  if (err) console.log(err);
  else result.forEach(function(file){
    console.log(file);
  });
});