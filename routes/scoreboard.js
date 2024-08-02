var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/scoreboard', function(req, res, next) {
  res.render('scoreboard');
});

module.exports = router;
