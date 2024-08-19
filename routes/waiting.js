var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/waiting', function(req, res, next) {
  res.render('waiting');
});

module.exports = router;