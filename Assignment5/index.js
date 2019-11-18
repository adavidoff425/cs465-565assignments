var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true });

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/submit', function(req, res) {
	res.send('name: ' + req.body.firstname + '\nemail: ' + req.body.email + '\ncomments: ' + req.body.comments);
});	

app.listen(8080);