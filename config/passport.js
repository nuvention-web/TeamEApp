/* https://github.com/danielgynn/express-authentication/blob/local/config/passport.js */

var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/User');

module.exports = function(passport) {

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true,
		},
		function(req, email, password, done) {
			var firstname = req.body.firstname;
			var username = req.body.username;
			var lastname = req.body.lastname;
			var graduation = req.body.graduation;
			var birthday = req.body.birthday;
			var school = req.body.school;
			var major = req.body.major;
			var gender = req.body.gender;

			process.nextTick(function() {
				User.findOne({ 'local.email': email }, function(err, user) {
					if (err)
						return done(err);
					if (user) {
						console.log(req);
						return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
					} else {
						console.log('hello');
						var newUser = new User();
						newUser.local.email = email;
						newUser.local.firstname = firstname;
						newUser.local.lastname = lastname;
						newUser.local.username = username;
						newUser.local.password = newUser.generateHash(password);
						newUser.local.graduation = graduation;
						newUser.local.birthday = birthday;
						newUser.local.school = school;
						newUser.local.major = major;
						newUser.local.gender= gender;
						console.log('bye');
						newUser.save(function(err) {
							if (err)
								throw err;
							console.log('made it');
							return done(null, newUser);
						});
					}
				});
			});
		}));

	passport.use('local-login', new LocalStrategy({
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true,
		},
		function(req, email, password, done) {
			User.findOne({ 'local.email': email }, function(err, user) {
				if (err)
					return done(err);
				if (!user)
					return done(null, false, req.flash('loginMessage', 'No user found.'));
				if (!user.validPassword(password))
					return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
				return done(null, user);
			});
		}));

};
