var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
var cors = require('cors');
var database = require('./config/database');
var auth = require('./auth/main.auth');
var testSERVERRouter = require('./routes/testSERVER');

var publicationsRouter = require('./routes/publication.router');
var usersRouter = require('./routes/usuario.router');

=======
var database = require('./config/database')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
>>>>>>> 97596be (Rebase client sobre main)

var app = express();

// view engine setup
<<<<<<< HEAD
// app.set('views', path.join(__dirname, 'views'));

app.use(cors());
=======
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

>>>>>>> 97596be (Rebase client sobre main)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mongo connection
database.mongoConnect();

//Router
<<<<<<< HEAD

app.use('/users', usersRouter);

app.use("/testSERVER", testSERVERRouter);

app.use(auth);

app.use('/publications', publicationsRouter);


// Mensaje a página del navegador
// app.use((req, res) => {
//   res.send({code: req.headers.connection, msg: "Estamos en construcción, code: " + `${res.statusCode}`})
// })

=======
app.use('/', indexRouter);
app.use('/users', usersRouter);

>>>>>>> 97596be (Rebase client sobre main)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
<<<<<<< HEAD
  res.json('error');
=======
  res.render('error');
>>>>>>> 97596be (Rebase client sobre main)
});

module.exports = app;
