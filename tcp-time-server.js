var net = require('net');
var port = process.argv[2];
var moment = require('moment');

var server = net.createServer(function(socket){
  var date = new Date();
  var year = date.getFullYear();
  var date = date.getMonth();
  if(date<10){
    date = '0'+date;
  }
  var datetime = moment().format('YYYY-MM-DD hh:mm');
  //socket.write(''+year+date);
  socket.write(datetime);
  socket.end();
});
server.listen(port);