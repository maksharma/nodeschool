'use strict';

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var http = require('http');

var data='';
/*
http.get(url1,function(response1){
  http.get(url2,function(response2){
    http.get(url3,function(response3){
      response3.on('data',function(d3){
        data+=d3;
      });
      response3.on('end',function(){
        console.log(data);
      });

    }).on('error', function (errormsg){
  console.log(errormsg)
    });

    response2.on('data',function(d2){
      data+=d2;
    });
    response2.on('end',function(){
      console.log(data);
    });
  }).on('error', function (errormsg){
  console.log(errormsg)
    });
  response1.on('data',function(d1){
    data+=d1;
  });
  response1.on('end',function(){
    console.log(data);
  });
}).on('error', function (errormsg){
  console.log(errormsg);
});
*/
http.get(url1,function(response1){
  response1.on('data',function(d1){
    data+=d1;
  });
  response1.on('end',function(){
    console.log(data);
    http.get(url2,function(response2){
      data='';//reinitialize data to contain just the new data, removing the previous url's contents
      response2.on('data',function(d2){
        data+=d2;
      });
      response2.on('end',function(){
        console.log(data);
        http.get(url3,function(response3){
          data='';//reinitialize data to contain just the new data, removing the previous url's contents
          response3.on('data',function(d3){
            data+=d3;
          });
          response3.on('end',function(){
            console.log(data);
          });
        });
      });
    });
  });
}).on('error',function(errmsg1){
  console.log(errmsg1);
});