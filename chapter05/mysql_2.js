// nodejs 通过连接池连接 mysql
var DataPool = require('./views/datapool.js');

var dataPool = new DataPool();

var pool = dataPool.getPool();


// 执行sql
pool.getConnection(function(err,conn){
    // insert
    // var userInsertSql = 'insert into admin(username,password) values("yjj","123")';
    // conn.query(userInsertSql,function(err,results){
    //     console.log('insert success!');
    // })

    // select
    var userSelectSql = 'select * from admin';
    conn.query(userSelectSql,function(err,results){
        for(var i = 0; i < results.length; i++){
            console.log(results[i].username);
        }
        conn.release();
    })
})
