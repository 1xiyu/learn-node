// var fs = require('fs')
// fs.open('context.txt','r',function(err,fd){
//     if(err){
//         console.log(err);
//         return;
//     }
// })


// var buffer = new Buffer(8);
// fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log("bytesRead" + bytesRead)
//     console.log(buffer)
// })

// var http = require('http');
// var url = require('url');
// var util = require('util');




/*  get */
// var http = require('http'); 
// var url = require('url'); 
// var util = require('util');
// http.createServer(function(req, res) { 
//     res.writeHead(200, {'Content-Type': 'text/plain'}); 
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);

/* post */
// var http =require('http')
// var querystring = require('string')
// var util = require('util')

// http.createServer(function(req,res){
//     var post = ''
//     res.on('data',function(chunk){
//         post += chunk;
//     })

//     res.on('end',function(){
//         post = querystring.parse(post)
//         res.end(util.inspect(post))
//     })
// }).listening(3000)

var fs = Promise.promisifyAll(require("fs"));


fs.readFileAsync('./file.txt').then(JSON.parse).then((data) => {
    console.log(data.name)
}).catch((e) => {
    console.log('error reading/parsing file',e)
})