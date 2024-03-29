var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var searchRouter = require('./routes/search');
var searchInbox = require('./routes/inbox');

var indexPeoples = require('./routes/peoples');
var indexPeople = require('./routes/people');
var favicon = require('serve-favicon');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// Routs/// поправить обработчики роутеров -ПЕРЕПУТАНЫ
app.use('/', indexPeoples);
app.use('/search', searchRouter);
app.use('/inbox', searchInbox);
app.use('/peoples', indexRouter);
// app.use('/peoples/:id',indexPeople );

app.use('/peoples/:id', function (req, res) {
  //res.send('people id: ' + req.params.id);
  res.render('people', {
    title: 'people-' + req.params.id,
    girls: req.params.id,
  });

  next();
});

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
