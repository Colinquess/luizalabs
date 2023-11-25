const express = require('express')
const multer = require('multer')
const createError = require('http-errors')
const handlers = require('./handlers')

const app = express()
const multerConfig = multer({ storage: multer.memoryStorage() })

// File Upload Endpoint
app.post('/api/setdata', multerConfig.array('files'), handlers.setdata)

// Data Retrieval Endpoint
app.get('/api/getdata', handlers.getdata)
app.get('/api/getdatabyid/:id', handlers.getdatabyid)
app.get('/api/getdatabyinterval/:dtstart/:dtend', handlers.getdatabyinterval)

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
})

module.exports = app
