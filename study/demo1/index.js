var http = require('http');

http.createServer(function(request,response){
    // response.setHeader('Content-Type','text/plain');
    response.writeHead(200,{'Context-Type':'text/plain'})
    response.end("fuck")
}).listen(8080)
alert("fas")
console.log("fa")

