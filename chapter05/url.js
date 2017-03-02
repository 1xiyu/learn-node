var http = require('http');
var router = require('./views/router');

http.createServer(function(req,res){
   
    if(req.url !== '/favicon.ico') {
        // routers.home(res);
        // routers.login(res);
        // routers.register(res);
        var path = req.url.split('?')[0].replace(/\//,'');
        console.log(path);
        try{
            router[path](res,req);
        } catch(e){
            //router['home'](res,req);
        }
        // res.end();
    }
}).listen(8000);
console.log('Server running at http://localhost:8000');