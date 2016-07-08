
var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('<p>Bienvenue dans Node.js !<br/>Voici un paragraphe <strong>HTML</strong> !</p>');
});
server.listen(8080);
