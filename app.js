const express = require('express');
const path = require('path');
const logger = require('morgan');

const videoShootsRouter = require('./routes/videoshoots');
const {UPLOAD_PATH} = require('./constants');

const app = express();

app.use(logger('dev'));
app.use(express.json());
//app.use(express.static(path.join(__dirname, 'public')));

app.use("/video", express.static(path.join(__dirname, UPLOAD_PATH)));
app.use('/api', videoShootsRouter);

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'PRODUCTION') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({error: err.message});
});

module.exports = app;
