const express = require('express')
const app = express()
var http = require('http');
const bodyParser = require('body-parser')
require('dotenv').config({path:'.env'});

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let routes = require('./routers/route-index');
routes(app)
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port)