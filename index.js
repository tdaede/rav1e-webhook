var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var config = require('./config.json');

app.use(bodyParser.json());

app.post('/hook', function (req, res) {
  console.log(req.body);
  var commit = req.body.after;
  var run_id = 'master-' + commit;
  if (req.body.ref == 'refs/heads/master') {
    request.post('https://beta.arewecompressedyet.com/submit/job', {form:
                                                                    { run_id: run_id,
                                                                      commit: commit,
                                                                      master: true,
                                                                      key: config.key,
                                                                      codec: 'rav1e'
                                                                    }});
  }
});

app.listen(5000, () => console.log('Github hook listening on port 5000!'));
