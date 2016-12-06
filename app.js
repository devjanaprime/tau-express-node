var express = require('express');
var path = require('path'); //no npm install
var app = express();

// base route
app.get('/', function(req, res) {
  // send back our index.html file
  console.log('index path -> ', path.join(__dirname, '/public/index.html'));
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
