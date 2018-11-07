var url = require('url');
var http = require('http');

function start(route){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);

        response.writeHead(200,{"Context-Type":"text/plain"});
        response.write("hello world!");
        response.end();
    }
    http.createServer(onRequest).listen(8080);
    console.log("Server has started");
    
}
exports.start = start;