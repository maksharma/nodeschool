'use strict';

var fs = require('fs');
var path = require('path');

function myFilter(dirname, extn, cb) {
  fs.readdir(dirname, function (error, list){
    if (error) return cb(error);

    var filtered = list.filter(function(file){
      return path.extname(file) === "." + extn;
    });

    cb(null, filtered);
  });
}

module.exports = myFilter;