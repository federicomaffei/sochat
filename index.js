var express = require("express");
var app = express();
var http = require("http");
var server = http.Server(app);
var io = require('socket.io').listen(server);

app.get('/', function(req,res){
	res.sendFile('index.html', {"root": __dirname});
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
	// socket.on('disconnect', function(){
	// 	console.log('a user disconnected from the socket.');
	// });
});

server.listen('3000', function(){
	console.log('listening to *:3000.');
});
