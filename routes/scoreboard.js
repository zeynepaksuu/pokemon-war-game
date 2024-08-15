var express = require('express');
var router = express.Router();
var db = require('../database')

/* GET home page. */
router.get('/scoreboard', (req, res, next) => {
  const query = 'SELECT user_id, score FROM scoreboard';
  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('Sorgu hatası:', err.message); // Hata mesajı
      res.status(500).send('Sorgu hatası');
    } else {
          res.render('scoreboard', { rows: rows});
          console.log(rows);
    }
  }); 
});

module.exports = router;



