import express from 'express';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */
var app = express();

var port = 5000;

app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if (err) {
      console.log(err); // eslint-disable-line no-console
  } else {
      open('http://localhost:' + port);
  }
});

