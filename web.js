var express = require('express');

var sys= fs=require("fs");
var app = express.createServer(express.logger());

buf = new Buffer(256); 



app.get('/', function(request, response) {
<<<<<<< HEAD

buf  = fs.readFileSync("index.html"); 
var content = buf.toString('utf8',0);
response.send(content);
=======
  response.send('Hello World2!');
>>>>>>> 890982348494e5150deaabc13b6b6e4187d5af0e
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
