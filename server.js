'use strict';

const express = require('express');
const bodyParser = require('body-parser');

var admin = require('firebase-admin');
var serviceAccount = require("./firebase-admin.json");

const hostname = '127.0.0.1';
const port = 3000;
var app = express();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://tesis-e9d97.firebaseio.com"
  });

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

require('./routes')(app);

app.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})