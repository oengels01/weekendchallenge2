var express = require("express");
var app = express ();
var path = require("path");
var bodyParser = require('body-parser');
// var calculateNum = require(".modules/calculation.js");
var port = 5000;

var urlencoded = bodyParser.urlencoded({extended:false});

// var server = app.listen(process.env.PORT||5000, function() {
//   console.log('listening on port');
// });

app.use(express.static("server/public"));
//
// app.use( '/calculation', calculateNum);

app.get("/", function(req, res) {
  res.sendFile(path.resolve("server/public/views/index.html"));
});

app.post('/pathPost', urlencoded, function(req, res) {
  var inputNum1 = Number(req.body.input1);
  var inputNum2 = Number(req.body.input2);
  res.write('Answer: ' + calculateNum(inputNum1, inputNum2, req.body.oper));
  res.end();
});

app.listen(port, function(){
  console.log("Listening", port);
});
console.log("Listening", port);
