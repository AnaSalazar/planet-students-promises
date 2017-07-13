var express = require('express');
var path = require('path');
var app = express();

app.use("/archivos", express.static(__dirname + "/assets"));
app.use("/data", express.static(__dirname + "/data"));
app.use("/static", express.static(__dirname + "/node_modules"));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
});
app.listen(8080);
