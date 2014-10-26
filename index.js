var express = require("express");
var app = express();
var http = require("http");
var server = http.Server(app);
var io = require('socket.io').listen(server);

app.use("/stylesheets", express.static(__dirname + '/stylesheets'));

app.get('/', function(req,res){
	res.sendFile('index.html', {"root": __dirname});
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg, user){
		io.emit('chat message', msg, user);
	});
	socket.on('disconnect', function(){
		io.emit('disconnect message');
	});
});

server.listen('3000', function(){
	console.log('listening to *:3000.');
});
