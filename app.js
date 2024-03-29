var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var nocache = require('nocache')
const{v4: uuidv9}=require("uuid");



/* var indexRouter = require('./routes/index'); */
var usersRouter = require('./routes/users');
var usersLogin = require('./routes/login');
var usersDashboard = require('./routes/dashboard');
var usersRouter = require('./routes/logout');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(nocache())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session
  ({
    secret: uuidv9(),
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 }
  }));

/* app.use('/', indexRouter); */
app.use('/', usersLogin);
app.use('/users', usersRouter);
app.use('/dashboard', usersDashboard);
app.use('/logout', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
