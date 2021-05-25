var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write(`Success, i'm listening from port: 3000`); //write a response to the client
  res.end(); //end the response
}).listen(3000);