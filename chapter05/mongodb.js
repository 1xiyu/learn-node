//test
var mongodb = require('mongodb');

var server = new mongodb.Server(
    'localhost',
    27017,
    { auto_reconnect: true }
)

var db = new  mongodb.Db(
    'test',
    server,
    { safe: true }
)
db.open(function(err,db){
    if(err){
        console.log('log-' + err);
    }else{
        console.log('log-connect mongodb success');
        db.collection('movies',{safe: true},function(err,conn){
            if(err){
                console.log(err);
            }else{
                conn.find({},{title:0,year:1,_id:0}).limit(3).skip(3).toArray(function(err,res){
                    if(!err){
                        console.log(res[0].titile);
                    }
                })
            }
        })
    }
})