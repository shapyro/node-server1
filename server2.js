var http = require("http")

var PORT = 7500;

function handleRequest(request, response) {
  console.log(request)
	response.end("You Suck" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("listening on http://localhost" + PORT)
});