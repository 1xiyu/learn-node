var http = require('http');
var User = require('./views/User.js');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url !== '/favicon.ico') {
        // 通过原型继承存在的问题
        var user1 = new User('1xiyu',23,['a','b']);
        var user2 = new User('litchi',18,['e','d']);
        user1.friends.push('c');
        response.write(user1.sayFriends().toString());
        response.write('<br/>')
        response.write(user2.sayFriends().toString())
        response.end();
    }
}).listen(8000);
console.log('Server running at http://localhost:8000');