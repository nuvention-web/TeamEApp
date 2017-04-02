/* https://github.com/danielgynn/express-authentication/blob/local/app.js */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var programs = require('./routes/programs');

var configDB = require('./config/database.js');
mongoose.Promise = global.Promise;
mongoose.connect(configDB.url);

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'shhsecret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

app.use('/', routes);
app.use('/api/users', users);
app.use('/api/programs', programs);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

app.listen(port);

module.exports = app;

// // https://github.com/danielgynn/express-authentication

// var mongoose = require('mongoose');
// // Use native Node promises
// mongoose.Promise = global.Promise;
// // connect to MongoDB
// // changed from portal-api to portalData
// mongoose.connect('mongodb://NUVentionE:19951113@ds157499.mlab.com:57499/portaldata')
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var passport = require('passport');
// var app = express();


// app.use(passport.initialize());


// var programs = require('./routes/programs');
// app.use('/programs', programs);

// var users = require('./routes/users');
// app.use('/users', users);

// var index = require('./routes/index');
// app.use('/', index);

// var login = require('./routes/login');
// app.use('/', login);

// var signup = require('./routes/signup');
// app.use('/', signup);


// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
