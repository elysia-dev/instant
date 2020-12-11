var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app);
app.use(express.static('public'))

server.listen(3000, "127.0.0.1", function () {
  console.log("Server listen on port " + server.address().port);
});
