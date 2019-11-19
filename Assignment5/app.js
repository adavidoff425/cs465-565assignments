var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var _dirname = "/u/ad35/cs465-565assignments/Assignment5";

//app.set('view engine', 'pug');
//app.set('views', './views');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.sendFile(path.join(_dirname + "/index.html"));
});

app.post('/submit', function(req, res) {
	res.send('name: ' + req.body.firstname + '\nemail: ' + req.body.email + '\ncomments: ' + req.body.comments);
});	

//app.listen(8080);
module.exports = app;
