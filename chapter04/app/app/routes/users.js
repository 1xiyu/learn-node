var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  res.send('I am only a test!' + req.params.username);
});

module.exports = router;
