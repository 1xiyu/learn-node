var http = require('http')
var querystring = require('querystring')
var contents = querystring.stringify({
    name: 'byvoid',
    email: 'byvoid@byvoid.com',
    address: 'Zijing 2#, Tsinghua University',
})
// console.log(contents)

// var options = {
//     host: 'www.byvoid.com',
//     path: '/application/node/post.php',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Content-Length' : contents.length
//     }
// }

// var req = http.request(options,function(res){
//     res.setEncoding('utf-8');
//     res.on('data',function(data){
//         console.log(data)
//     })
//     res.write(contents)
//     res.end()
// })

var http = require('http')
var req = http.get({ host:'www.byvoid.com'});

req.on('response',function(res){
    res.setEncoding('utf-8')
    res.on('data',function(data){
        console.log(data)
    })
})

// http.get({ host: 'www.byvoid.com'},function(res){
//     res.setEncoding('utf-8');
//     res.on('data',function(data){
//         console.log(data)
//     })
// })

// var http = require('http');
// var req = http.get({host: 'www.byvoid.com'});
// req.on('response', function(res) { res.setEncoding('utf8'); res.on('data', function (data) {
//         console.log(data);
//       });
// });