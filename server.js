
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/',function(req, res){
	res.sendFile('index.html');
});

app.listen(80, function(){
	console.log("server start at 80");
})

