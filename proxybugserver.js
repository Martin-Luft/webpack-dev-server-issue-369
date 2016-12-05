var http = require("http");

http.createServer(function (request, response) {
  console.log('incoming request');
  setTimeout(function() {waitAndResponse(response)}, 180000);
}).listen(8081);

function waitAndResponse(response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
}

console.log('Server running at http://127.0.0.1:8081/');

