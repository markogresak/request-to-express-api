'use strict';

var request = require('request');

var exampleData = {
  number: 10,
  string: 'some string',
  date: new Date(),
  array: [1, 2, 3],
  object: {
    x: 10,
    y: 5
  }
};

request.get({
  url: 'http://localhost:3000/api',
  form: {
    data: exampleData
  }
}, function (err, httpResponse, body) {
  console.log('response data:', body);
});
