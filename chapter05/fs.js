var http = require('http');
var files = require('./views/file');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(req.url !== '/favicon.ico') {
        // files.readFileSync(response);
        // files.readFile('./templates/main.html',response);
        // files.writeFile('./files/test.txt',res);
        // response.end();
    }
}).listen(8000);
console.log('Server running at http://localhost:8000');