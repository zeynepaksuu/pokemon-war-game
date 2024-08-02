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