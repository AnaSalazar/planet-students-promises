var express = require('express');
var app = express();

app.use("/", express.static(__dirname + "/"));
app.use("/data", express.static(__dirname + "/data"));
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html")
});
app.listen(8080);
