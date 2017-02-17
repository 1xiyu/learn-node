var express = require('express');
var router = express.Router();

/* GET test page. */
router.post('/', function(req, res, next) {
  res.send('doreg');
});

router.get('/',function(req,res,next){
    console.log('reg')
})
module.exports = router;
