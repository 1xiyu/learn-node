var express = require('express');
var router = express.Router();

/* GET test page. */
router.post('/', function(req, res, next) {
  res.send('dologin');
});

router.get('/',function(req,res,next){
    console.log('login')
});

module.exports = router;
