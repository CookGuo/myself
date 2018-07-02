var router = require("express").Router();

var index = require('./routers/index');


router.get('/index', index.home);


module.exports = router;