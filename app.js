var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var { Server } = require('socket.io');  // Socket.IO'yu ekleyin


const get_poke = require('./helpers/getPoke'); //içe aktardık cunku get pokeyi burda kullanıcaz

var mainRoute = require('./routes/main');
var enterenceRoute = require('./routes/enterence');
var scoreboardRoute = require('./routes/scoreboard');
var testRoute = require('./routes/test');

var app = express();

// socket.io icin http server
const wsServer = http.createServer();

// Socket.IO sunucusu oluşturuldu ve 8080 portunda dinlenecek
var io = new Server(wsServer, {
  cors: {
    origin: "*",  
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var mainRoute = require('./routes/main');
var enterenceRoute = require('./routes/enterence');
var scoreboardRoute = require('./routes/scoreboard');
var testRoute = require('./routes/test');
var dataRoute = require('./routes/data');

app.use('/', dataRoute);
app.use('/', mainRoute);
app.use('/', enterenceRoute);
app.use('/', scoreboardRoute);
app.use('/', testRoute);

// Handle WebSocket connections on Socket.IO
io.on('connection', (socket) => {
  console.log('New WebSocket connection established');

    // Handle messages received from the client
    socket.on('get_pokemon', async (message) => {
      console.log('Received:', message);
      // Echo the message back to the client  
      const pokemons = await get_poke();
      socket.emit('get_pokemon', pokemons);
    });
  
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



wsServer.listen(8080, () => {
  console.log('ws server is listening on port 8080');
})

module.exports = app;