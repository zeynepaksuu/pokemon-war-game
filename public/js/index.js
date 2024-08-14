
function displayPokemons(pokemons){
  

  if(pokemons && Array.isArray(pokemons)){
    pokemons.forEach((pokemon,index) => {
      const imgSrc = pokemon.sprite;
      const imgElement = document.getElementById(`pokemon${index + 1}`);

      if(imgElement){
        imgElement.src =imgSrc; //resim urlsini atar

       //document.getElementById(`ability${index + 1}`).textContent = `ability: ${pokemon.abilities[0]?.ability.name || 'Unknown'}`;
        //document.getElementById(`power${index + 1}`).textContent = `power: ${pokemon.stats[1]?.base_stat || 'Unknown'}`;
        //document.getElementById(`heal${index + 1}`).textContent = `heal: ${pokemon.stats[0]?.base_stat || 'Unknown'}`;
    
      }
    })
  }
}



















/* var http = require ('http');
const axios = require('axios');


http.createServer (function (req,res) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    axios.get("https://pokeapi.co/api/v2/pokemon/400")


        //if successful, returns data as response
        .then(response => {
          console.log(response.data);
         res.end(JSON.stringify(response.data));
        })

        //if has an error in the code, it will print on the terminal screen 
        .catch(error => {
          console.log(error);
        });
     
}).listen(3000); */