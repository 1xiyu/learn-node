// express3 都封装在connect中  4 单独加载依赖module
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// import session
var session = require('express-session');

// set routes
var index = require('./routes/index');
var users = require('./routes/users');
var comment = require('./routes/comment');

//  the pro instance
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// set log rank
app.use(logger('dev'));
// set data parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// set cookie parse
app.use(cookieParser());

// set session
app.use(session({
  secret: 'recommend 128 bytes random string',
  cookie: { maxAge: 20 * 60 * 1000 },
  resave: true,
  saveUninitialized: true
}))
app.use(express.static(path.join(__dirname, 'public')));

// route page set
app.use('/', index);
app.use('/users', users);
app.use('/comment',comment);

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

// 开发环境，500错误处理和错误堆栈跟踪
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

module.exports = app;
