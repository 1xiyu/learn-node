var http = require('http');
// if name.util.js   not find
// ./    not find  will not try  ./ has meaning
var name = require('./views/name');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url !== '/favicon.ico') {
        console.log(name.sayName());
        response.write('Hello NodeJS~');
        console.log('hello nodejs');
        response.end();
    }
}).listen(8000);
console.log('Server running at http://localhost:8000');