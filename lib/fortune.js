// fortunes
var fortunes = [
	"ACAB",
	"Fuck the police.",
	"Every dog is exactly one dog. No more, no less.",
	"One banana, two banana, one for me, and one for you banana.",
	"We're all going to die and life is meaningless."
];

exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortunes.length);
	return fortunes[idx];
}