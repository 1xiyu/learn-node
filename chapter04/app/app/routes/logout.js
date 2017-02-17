var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  res.send('I am only a logout!');
});

module.exports = router;
