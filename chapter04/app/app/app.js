var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var _index = require('./routes/index');
var _users = require('./routes/users');
var _login = require('./routes/login');
var _reg = require('./routes/reg');
var _post = require('./routes/post');
var _logout = require('./routes/logout');

var MongoStore = require('connect-mogo');
var settings = require('../setting')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.session({
  secret: settings.cookieSecret,
  store: new MongoStore({
      db: settings.db
  })
}));

app.use('/', _index);
app.use('/users/', _users);
app.use('/login',_login);
app.use('/reg',_reg);
app.use('/post',_post);
app.use('/logout',_logout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
