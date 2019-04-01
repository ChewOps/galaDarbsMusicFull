var express = require('express');
var app = express();
var fs = require("fs");
var obj = "127.0.0.1";

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("http://localhost:3000")

})
