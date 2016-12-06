var express = require('express');
var path = require('path'); //no npm install
var bodyParser = require('body-parser');

var app = express();

//middleware
app.use(bodyParser.json());

app.use(express.static('public'));

var testPet = {
  name: 'daunte',
  type: 'dog',
  age: 7
};
var petData = [testPet];

//send pets data back
app.get('/pets', function(req, res) {
  res.send(petData);
});

app.post('/pets', function(req, res) {
  console.log('in post route');
  console.log(req.body);
  var newPet = req.body;
  // console.log(newPet.name);
  petData.push(newPet);
  res.send('OK');
});

// base route
app.get('/', function(req, res) {
  // send back our index.html file
  console.log('index path -> ', path.join(__dirname, '/public/index.html'));
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
