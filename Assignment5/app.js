var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post('/submit', function(req, res) {
	res.send('name: ' + req.body.firstname + '<br />email: ' + req.body.comments + '<br />comments: ' + req.body.comments);
});	

app.listen(8080);
