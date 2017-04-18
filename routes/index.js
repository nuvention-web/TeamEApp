/* https://github.com/danielgynn/express-authentication/blob/local/routes/index.js */

var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', message: req.flash('loginMessage')  });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title:'Login', message: req.flash('loginMessage') });
});

router.get('/signup', function(req, res) {
  res.render('index', { title:'Signup', message: req.flash('loginMessage')});
});

router.get('/profile', isLoggedIn, function(req, res) {
  res.render('profile', { title:'Profile', user: req.user });
});

router.get('/programs', isLoggedIn, function(req, res) {
  res.render('index', { title:'Programs', user: req.programs });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile#/profile',
  failureRedirect: '/signup#/signup',
  failureFlash: true,
}));

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile#/profile',
  failureRedirect: '/login#/login',
  failureFlash: true,
}));

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/');
}

// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Academic Resource Portal' });
// });

// module.exports = router;
