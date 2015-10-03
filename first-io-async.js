var  filepath = process.argv[2];
var fs = require('fs');
fs.readFile(filepath,'utf8',function callback(error, data){
	//console.log(data);

	var countOfLines = data.toString().split('\n').length - 1;//  \n count = total lines-1 
console.log(countOfLines);
});
