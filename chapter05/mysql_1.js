// nodejs 直连 mysql
// 包想到那个于驱动程序，bridge
var mysql = require( 'mysql');

// 连接数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'litchi',
    database: 'user',
    port: '3306'
})

// 创建一个连接
connection.connect(function(err){
    if(err){
        console.log('[log]-' + err);
        return;
    }else{
        console.log('[connection connect] success!');
    }
})

// 执行一个插入语句
//  var userInsertSql = 'insert into user(username,password) values("litchi","123123")';
// var userInsertSql = 'insert into admin(username,password) values(?,?)';
// var param = ['lcy','123abc'];  // 防止非法注入
//  connection.query(userInsertSql,param,function(err,res){
//      if(err){
//          console.log('insert err' + err);
//          return;
//      }
//      console.log('insert success');
//  })

// 查询数据
var userSelectSql = 'select * from admin';
connection.query(userSelectSql,function(err,results){
    if(err){
         console.log('select err' + err);
         return;
    }
    for(var i = 0; i < results.length; i++){
        // console.log(results[i].id + '/' + results[i].username + '/' + results[i].password);
        console.log((i+1) + '/' + results[i].username + '/' + results[i].password);
    }
})
// 手动关闭，否则内存堆积   关闭一个连接
connection.end(function(err){
    if(err){
        console.log(err.toString());
        return;
    }else{
        console.log('[connection end] success!');
    }
})