var express = require('express');
var async = require('async');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test';

router.post('/submit', function (req, res) {
  //todo
  var title = req.body['title'];
  var content = req.body['content'];
  var username = req.session.username || '';

  if (!username) {
    res.send("<script>alert('session unuseful');location.href='/login';</script>");
    // res.redirect('/login');
    return
  }
  var insertData = function (db, callback) {
    var data = [{ username: username, title: title, content: content }];
    // connect table
    var conn = db.collection('comment');

    conn.insert(data, function (err, results) {
      if (err) {
        console.log(err);
        return;
      }
      callback(results);
    })

  }

  MongoClient.connect(DB_CONN_STR, function (err, db) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('connection success');
    insertData(db, function (results) {
      console.log(results);
      res.redirect('/comment/list')
      //   res.send('submit comment success');
      db.close();
    })
  })
})

router.all('/list', function (req, res) {
  var username = req.session.username || '';
  var title = req.query['title'];
  var content = req.query['content'];


  if (!username) {
    res.send("<script>alert('session unuseful');location.href='/login';</script>");
    // res.redirect('/login');
    return
  }
 // 构建分业基本信息
    var pageNo = req.query['pageNo'],
      pageNo = pageNo ? pageNo : 1,
      pageSize = 5,
      totalPages = 0,
      count = 0;
  var findData = function (db, callback) {
    var conn = db.collection('comment');
   
    // bing xing wu guan lian 
    async.parallel([function (callback) {
      conn.find({}).sort({ _id: -1 }).toArray(function (err, results) {
        if (err) {
          console.log(err);
        } else {
          totalPages = Math.ceil(results.length / pageSize);
          count = results.length;
          callback(null, count,totalPages);
        }
      })
    }, function (callback) {
      conn.find({}).sort({ _id: -1 }).skip((pageNo - 1) * pageSize).limit(pageSize).toArray(function (err, results) {
        if (err) {
          console.log(err);
        } else {
          callback(null, results);
        }
      })
    }], function (err, results) {
      console.log(results);
      callback(results[1]);
    })

  }

  MongoClient.connect(DB_CONN_STR, function (err, db) {
    if (err) {
      console.log(err);
      return;
    }
    console.log('connection success');
    findData(db, function (results) {
      res.render('list.ejs', { 
        pageNo: pageNo,
        totalPages: totalPages, 
        res: results,
        count: count
      });
      console.log(results)
      db.close();
    })
  })
})
module.exports = router;