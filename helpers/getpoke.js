const axios = require('axios');


async function get_poke(){
  
    try{
        var i = 0; //dışarı da tanımlayabilirdik ama global olurdu (fonksiyonun dısı) ve sorun cıkabilirdi
        const result = [];

        for (i;i<6;i++) {

            var rand = Math.floor(Math.random()*1024 + 1); //rastgele poke cekmek için sayı üretiyor
            var pr = await axios.get('https://pokeapi.co/api/v2/pokemon/'+ rand) //returns promise;  
            console.log(pr.data);
            var obj ={
                sprite: pr.data.sprites.other.home.front_default,
                name: pr.data.name,
            };
            result[i]= obj;
        }
        return result;
    }
    catch(err) {
       console.log(err);
    } 
}



module.exports = get_poke;