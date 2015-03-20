var express = require('express');
var app = express();

// app.use(express.static(__dirname + '/public/'));
// app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/build/'));
app.get('/test/:truc', function (req, res) {
	var test = { hello: req.params.truc };
	res.status(200).send(test);
});

app.listen(3000);