var express = require('express');
var router = express.Router();
var get_poke = require('../helpers/getpoke');

/* GET home page. */
router.get('/test', async function(req, res) {
 
try{
    let result = await get_poke();  //helpteki returnü bekler
   // console.log(result.length);
    res.send(result);
}
catch(err) {
    res.send(err);
}

});



module.exports = router;

//awaitle get_pokeyi bekletip async yapıcaz

