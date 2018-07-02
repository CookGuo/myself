var controller = require("../controller/index.js");

exports.home = function(req, res) {
	res.render('index/index', { hungry: true })
}