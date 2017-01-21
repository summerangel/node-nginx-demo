/**
 * Created by summer on 17/1/20.
 *
 */
var http = require('http');
var morgan = require('morgan');

var server1 = http.createServer(function (req, res) {
  console.log("Request for: " + req.url + "-- port 3000 ");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js1\n');
}).listen(3000, "127.0.0.1");


var server2 = http.createServer(function (req, res) {
  console.log("Request for: " + req.url + "-- port 3001");
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js2\n');
}).listen(3001, "127.0.0.1");

server1.once('listening', function () {
  console.log('Server running at http://127.0.0.1:3000/');
});

//注释
server2.once('listening', function () {
  console.log('Server running at http://127.0.0.1:3001/');
});