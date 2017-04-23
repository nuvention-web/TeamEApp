/* https://github.com/danielgynn/express-authentication/blob/local/routes/index.js */

var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', { title: 'Index' });
});

router.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

// route to log out
router.get('/logout', function(req, res){
  req.logOut();
  res.redirect('/');
});

router.get('/signup', function(req, res){
  res.redirect('/#/signup');
});

router.get('/login', function(req, res){
  res.redirect('/#/login');
});

router.get('/profile', function(req, res){
  res.redirect('/#/profile');
});

router.get('/programs', function(req, res){
  res.redirect('/#/programs');
});

// router.post('/#/signup', passport.authenticate('local-signup'), function());

// router.get('/login', function(req, res, next) {
//   res.render('login', { title:'Login', message: req.flash('loginMessage') });
// });

// router.get('/signup', function(req, res) {
//   res.render('signup', { title:'Signup', message: req.flash('loginMessage')});
// });

// router.get('/profile', isLoggedIn, function(req, res) {
//   res.render('profile', { title:'Profile', user: req.user });
// });

// router.get('/programs', isLoggedIn, function(req, res) {
//   res.render('index', { title:'Programs', user: req.programs });
// });


router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup'
  })
);


router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/profile',
  failureRedirect: '/login',
  failureFlash: true,
}));


// router.post('/login', passport.authenticate('local-login'), function(req, res){
//     res.redirect('/#/programs');
// });

module.exports = router;

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated())
//       return next();
//   res.redirect('/');
// }

// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Academic Resource Portal' });
// });

// module.exports = router;
