/*
  "Server.js" is part of a backend boilerplate.
  I typicallly start working from server side, and ensure to all api calls are making correctly
*/

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}))

// set up path for assets for img files
app.use('/assets', express.static(__dirname + '/client/assets'))
app.use('/public', express.static(__dirname + 'client/public'))
app.get('/styles/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/styles/style.css'))
})

// set up path for bundle.js
app.get('/public/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/public/bundle.js'));
});

// REST API call for the JSON object

// at index link send the index.html file
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/index.html'))
})

// server listening at port
app.listen(5050);
