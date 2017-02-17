// var http = require('http');
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'Text/html'})
//     res.write('<h1>hello world</h1>');
//     res.end('<h2>nodejs</h2>');
// }).listen(3000);
// console.log("http server is listening at port 3000")

var fs = require('fs');

fs.readFile('file.txt','utf-8',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

var data = fs.readFileSync('file.txt','utf-8');
console.log(data)
console.log('end');
console.log(global)