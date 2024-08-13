var axios = require ('axios');

async function fetchPokemon(){
  try{
    const response = await axios.get('/api/random-pokemon');
    return response.data; //JSON formatında döndürür
  } catch (error) {
    console.error('error',error);
  }
}

async function displayPokemons(){
  const pokemons = await fetchPokemon();

  if(pokemon && Array.isArray(pokemons)){
    pokemons.forEach((pokemon,index) => {
      const imgSrc = pokemon.sprites.front_default;
      const imgElement = document.getElementById(`pokemon${index + 1}`);

      if(imgElement){
        imgElement.src =imgSrc; //resim urlsini atar

        document.getElementById(`ability${index + 1}`).textContent = `ability: ${pokemon.abilities[0]?.ability.name || 'Unknown'}`;
        document.getElementById(`power${index + 1}`).textContent = `power: ${pokemon.stats[1]?.base_stat || 'Unknown'}`;
        document.getElementById(`heal${index + 1}`).textContent = `heal: ${pokemon.stats[0]?.base_stat || 'Unknown'}`;
    
      }
    })
  }
}



window.onload = displayPokemons;  //sayfa yüklendiğinde pokemonları gösterir















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