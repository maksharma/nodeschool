'use strict';
var http=require('http');
var bl=require('bl');
var res=[];
var count=0;

function printresults(){
  for(var i=0;i<3;i++){
    console.log(res[i]);
  }
}

function httpget(index){
  http.get(process.argv[2+index], function(response){
    response.pipe(bl(function(err,data){
      if(err){
        return console.error(err);
      }
      res[index]=data.toString();
      count++;
      if(count===3){
        printresults();
      }
    }))
  }).on('error',function(errmg){
    console.log(errmg);
  })
}

for(var i=0;i<3;i++){
  httpget(i);
}