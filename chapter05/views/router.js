var files = require('./file.js');
var url = require('url');
var queryString = require('querystring');
module.exports = {
    home: function(res){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        files.readFile('./templates/main.html',res);
    },
    login: function(res,req){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        //  deal get 
        // var urlObject = url.parse(req.url,true).query;
        // if(urlObject.email && urlObject.password){
        //     console.log(urlObject.email);
        //     console.log(urlObject.password);
        // }
        // files.readFile('./templates/login.html',res);

        // deal post
        var post = "";
        req.on('data',function(chunk){
            post += chunk;
        });
        req.on('end',function(){
            var urlObject = queryString.parse(post);
            console.log(urlObject);
        })
        files.readFile('./templates/login.html',res);
    },
    register: function(res){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        files.readFile('./templates/register.html',res);
    },
    image: function(res){
        res.writeHead(200,{'Content-Type':'image/jpeg'})
        files.readImageFile('./images/timg.jpeg',res);
    }
};