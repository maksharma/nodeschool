
var filePath = process.argv[2];
var fs = require('fs');
var fileStr = fs.readFileSync(filePath);//'/home/mayanksharma/test/javascripting/arrays.js');
//console.log(fileStr.toString());
var strArr = fileStr.toString().split('\n');//splits the filestring into arrays of lines with \n as a delimiter
//console.log(strArr);
console.log(strArr.length-1);//num of lines - 1 = num of \n :)