var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var { Server } = require('socket.io');  // Socket.IO'yu ekleyin

var mainRoute = require('./routes/main');
var enterenceRoute = require('./routes/enterence');
var scoreboardRoute = require('./routes/scoreboard');
var testRoute = require('./routes/test');

var app = express();

// Create a separate HTTP server for Socket.IO
const wsServer = http.createServer();

// Socket.IO sunucusu oluşturun ve 8080 portunda dinlesin
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

app.use('/', mainRoute);
app.use('/', enterenceRoute);
app.use('/', scoreboardRoute);
app.use('/', testRoute);

// Handle WebSocket connections on Socket.IO
io.on('connection', (socket) => {
  console.log('New WebSocket connection established');

  // Send a welcome message to the client
  socket.emit('message', 'Hello, Socket.IO server is running on port 3000!');

  // Handle messages received from the client
  socket.on('message', (message) => {
    console.log('Received:', message);
    // Echo the message back to the client
    socket.emit('message', `Server received: ${message}`);
  });

  // Handle connection close
  socket.on('disconnect', () => {
    console.log('WebSocket connection closed');
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
