var express = require('express');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var morgan = require('morgan');
var swig = require('swig');
var router = require('./routes/index');



app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', swig.renderFile);

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(__dirname + '/public'));

app.use('/', router);



app.use(function(err, req, res, next){
	res.status(err.status || 500);
	console.log("On noes!!!!");
	console.log(err, err.stack);
});

app.listen(port, function() {
	console.log("Server is listening intently at port " + port + "...");
});