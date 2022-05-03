var express = require('express');
const auth = require('../middlewares/auth');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
  return response.render('index', { user: request.session.user } );
});

router.get('/profile', auth, function(request, response) {
  return response.render('profile');
});

module.exports = router;
