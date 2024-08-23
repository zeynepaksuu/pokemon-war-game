var express = require('express');
var router = express.Router();


/* GET home page. */
router.post('/login', function(req, res, next) {
  res.render('waiting');
  //1- kullanıcı tablosunda kişi bilgileri var mı yok mu kontrol edilcek, varsa session tablosuna bir token oluşturulcak, unique id, (session id), 
 // res.cookie();  , redirect- render waiting 
});


module.exports = router; 

