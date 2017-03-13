var express = require('express');
// create can access to
// express.Router类，创建模块化安装路径的处理程序,for manage router。
// router()  return a Router instance
var router = express.Router();  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'litchi',username: req.session.username });
});

router.get('/login',function(req,res,next){
  res.render('login');
})

router.get('/register',function(req,res){
  res.render('register',{});
})

router.get('/logout',function(req,res){
  // clear session method1
  // req.session.username = undefined;
  // res.redirect('/');

  // clear session method2
  req.session.destroy(function(err){
    res.redirect('/');
  });
})

router.get('/comment',function(req,res){
  res.render('comment',{});
})
module.exports = router;
