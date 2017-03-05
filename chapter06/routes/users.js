var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login',function(req,res,next){
  console.log(req);
  // res.send('login get success');
  console.log('abc' + req.param('username'));
  res.send(req.query['username']);
 
})

router.post('/register',function(req,res){
  var username = req.body['username'];
  var password = req.body['password'];
  var nickname = req.body['nickname'];
  var insertData = function(db,callback){
    var data = [{username: username,password: password,nickname: nickname}];
    // connect table
    var conn = db.collection('user');

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
      res.send('register success');
    })
  })
})
router.post('/login',function(req,res,next){
    var findData = function(db,callback){
      var data = {username: req.body['username'],password: req.body['password']};
      // connect table
      var conn = db.collection('user');

      conn.find(data).toArray(function(err,results){
        callback(results);
      })
    }
  
  MongoClient.connect(DB_CONN_STR,function(err,db){
    if(err) {
      console.log(err);
      return;
    }
    console.log('connection success');
    findData(db,function(results){
      if(results.length > 0){
        // req.session = {
        //   d: 'a',
        //   b: 'aaa'
        // }
        // save session
        req.session.username = results[0].username;
        
        // router jump 
        res.redirect('/');
        // res.send('login success');
      }else{
        res.redirect('/');
      }
       db.close();
    })
  })

})

// router.all('./',function(req,res){
//   res.send('accept get or post request');
// })

router.get('/ab*cd',function(req,res,next){
  res.send('router reg');
})

router.get('/html',function(req,res){
  res.sendFile('/Users/1xiyu/demos/learn-node/chapter06/package.json');
})
module.exports = router;
