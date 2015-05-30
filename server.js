'use strict';

var express = require('express');
var bodyParser = require('body-parser');

// Init express and use JSON bodyParser.
var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


// Start server on port 3000.
app.listen(3000);
console.log('Listening on :3000');
