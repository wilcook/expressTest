// express
var express = require('express');
var app = express();

// handlebars
var handlebars = require('express-handlebars')
						.create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


// fortunes
var fortunes = [
	"ACAB",
	"Fuck the police.",
	"Every dog is exactly one dog. No more, no less.",
	"One banana, two banana, one for me, and one for you banana.",
	"We're all going to die and life is meaningless."
]

app.set('port', process.env.PORT || 1312);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
});

app.get('/about', function(req, res){
	var randomeFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', { fortune: randomeFortune});
});

// custom 404 page
app.use(function(req, res, next){
	res.status(404);
	res.render('404');	
});

// custom 505 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + app.get('port') + '; press ctrl-c to terminate.');
});