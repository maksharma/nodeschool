	var filepath = process.argv[2];
	var fileextension = process.argv[3];
	var fs = require('fs');
	var path = require('path');
	//console.log('scanning in' +filepath+' for .'+fileextension);
	
	fs.readdir(filepath,function callback(error,list){
	//console.log(list.length);
	for(var  i=0;i<list.length;i++){
	var extn = path.extname(list[i]);
	//console.log(extn);
	if(extn =='.'+fileextension){
		console.log(list[i]);
	}
	}
	});