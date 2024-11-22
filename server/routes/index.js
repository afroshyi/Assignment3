var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET menu page. */
router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'Menu' });
});


module.exports = router;
