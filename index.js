var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/hook', function (req, res) {
  console.log(req.body);
});

app.listen(5000, () => console.log('Github hook listening on port 5000!'));
