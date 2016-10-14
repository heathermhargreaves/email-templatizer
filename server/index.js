'use strict';

var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var massive = require('massive')

// import session from 'express-session'

var app = module.exports = express();
// var app = express();

app.use(function (req, res, next) {
  next();
});

//displaying static files
app.use(express.static(__dirname + './../public'));


app.use(bodyParser.json());
app.use(cors());




//listening on localserver
var port = 3000;
app.listen(port, function() {
  console.log("Started server on port", port);
});
