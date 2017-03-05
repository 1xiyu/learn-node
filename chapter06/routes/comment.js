var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';

router.post('/submit',function(req,res){
    //todo
    var title = req.body['title'];
    var content = req.body['content'];
    var username = req.session.username || '';

    if( !username ){
        res.send("<script>alert('session unuseful');location.href='/login';</script>");
        // res.redirect('/login');
        return 
    }
    var insertData = function(db,callback){
    var data = [{username: username,title: title,content: content}];
    // connect table
    var conn = db.collection('comment');

    conn.insert(data,function(err,results){
      if(err){
        console.log(err);
        return;
      }
      callback(results);
    })
    
  }
  
  MongoClient.connect(DB_CONN_STR,function(err,db){
    if(err) {
      console.log(err);
      return;
    }
    console.log('connection success');
    insertData(db,function(results){
      console.log(results);
      res.redirect('/')
    //   res.send('submit comment success');
      db.close();
    })
  })
})

module.exports = router;