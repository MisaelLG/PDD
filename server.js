var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/client.html');
  });

app.set('port', process.env.PORT || 3000);


io.on('connection', function(socket){
  socket.on('newmessage', (data) => {
      io.emit('newmessage', data)
  })
});


http.listen(app.get('port', () => {
  console.log('Server on port ${app.get('port')}');
});
