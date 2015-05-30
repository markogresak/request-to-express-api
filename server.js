'use strict';

var express = require('express');
var bodyParser = require('body-parser');

// Init express and use JSON bodyParser.
var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Init express router on /api.
var router = express.Router();
router.get('/api', function (req, res) {
  // Get `data` field from request, log it and return it as json response.
  console.log('received data:', req.body.data);
  res.json(req.body.data);
});
app.use('/', router);

// Start server on port 3000.
app.listen(3000);
console.log('Listening on :3000');
