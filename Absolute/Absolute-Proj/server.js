var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const methodOverride = require('method-override') // requiring methodoverride

require('dotenv').config()
require('./config/database')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
const programsRouter = require('./routes/programs')
const opinionsRouter = require('./routes/opinions')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method')) // for the delete function

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/programs', programsRouter)
app.use('/', opinionsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
