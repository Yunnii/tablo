var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../static/deploy')));

app.listen('9001');