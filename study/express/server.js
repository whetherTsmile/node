var express = require('express')
var app = express();
//post请求需要
var bodyParser = require('body-parser')
var urlencodedPaser = bodyParser.urlencoded({extended:false})

app.use(express.static('public'))

app.get('/index.html',function(req,res){
    res.sendFile(__dirname+"/"+"index.html");
})

app.get('/process_get',function(req,res){
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response))
    
})

app.post('/process_post',urlencodedPaser,function(req,res){
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response))
})

var server =app.listen(8080,function(){
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})