var express = require("express");
var app = express();
var http = require("http");
var server = http.Server(app);

app.get('/', function(req,res){
	res.send('<h1>Hello World</h1>');
});

server.listen('3000', function(){
	console.log('listening to *:3000.');
});
