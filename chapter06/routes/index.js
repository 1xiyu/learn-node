var express = require('express');
var router = express.Router();

var multiparty = require('multiparty');
var fs = require('fs');
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

router.get('/uploadImg',function(req,res){
  var form = new multiparty.Form();
  // set encoding
  form.encoding = 'utf-8';
  //set file save path
  form.uploadDir = './uploadtemp';
  //set file size
  form.maxFilesSize = 2 * 1024 * 1024;

  form.parse(req,function(err,fields,files){
    var uploadurl = '/images/upload/';
    file = files['filedata'];
    originalFilename = file[0].originalFilename;   // 原始文件名
    tmpPath = file[0].path;

    var timestamp = new Date().getTime();
    uploadurl += timestamp + originalFilename;
    newPath = './public/uploadurl';

    var fileReadStream = fs.createReadStream('tmpPath');
    var fileWriteStram = fs.createWriteStream(newPath);

    fileReadStream.pipe(fileWriteStram);  // 管道流
    fileWriteStram.on('close',function(){
      fs.unlinkSync(tmpPath);
      res.send('{"err":"","msg":"' + uploadurl + '"}');
    })
  })
})
module.exports = router;
