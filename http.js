const http = require("http");
const querystring = require('querystring')
const greeter = require("./greeter");


const server = http.createServer(function(request, response) {
    const message = querystring.parse(request.url);
    const greeting = greeter(message['/?ivigo']);
    console.log(greeting);
    response.end(greeting);
});

server.listen(80, function() {
  console.log("Server started");
});
