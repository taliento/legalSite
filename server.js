/* jshint node: true */
'use strict';

require('rootpath')();
const express = require('express');
const expressJwt = require('express-jwt');
const bodyParser = require('body-parser');
const path = require('path');
const _ = require('lodash');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


// Create link to Angular build directory
const distDir = __dirname + '/dist/';
app.use(express.static(distDir));


//API location
// use JWT auth to secure the api
app.use(expressJwt({
  secret: process.env.SECRET
}).unless({
  path: require('./routes/public-routes')
}));

// routes
// _.forEach(require('./routes/api-mapping'), (_route) => {
//   app.use(_route.endpoint, require(_route.controller));
// });

//error handling
function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({
      error: 'Something failed!'
    });
  } else {
    next(err);
  }
}

app.use(logErrors);
app.use(clientErrorHandler);
// app.use(errorHandler);

// application -------------------------------------------------------------
app.get('*', (req, res) => {
  res.sendFile(distDir + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// Initialize the app.
const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log('App now running on port', port);
});
