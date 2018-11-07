var express = require('express')
var app = express()
var fs = require('fs')


app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf-8',
        function (err, data) {
            console.log(data);
            res.send(data)
        })
})

var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
     }
}

app.get('/addUser',function(req,res){
    fs.readFile(__dirname+"/users.json",'utf8',
    function(err,data){
        data = JSON.parse(data)
        data.user4 = user.user4;
        // data['user4']=user['user4']
        console.log(data)
        res.send(JSON.stringify(data));
    })
})


app.get('/deleteUser',function(req,res){
    fs.readFile(__dirname+"/users.json",'utf8',
    function(err,data){
       data = JSON.parse(data)
       delete data['user'+2]
       console.log(data)
       res.send(JSON.stringify(data))
    })
})

app.get('/:id',function(req,res){
    fs.readFile(__dirname+"/users.json",'utf8',
    function(err,data){
        data = JSON.parse(data)
        var user = data['user'+req.params.id]
        console.log(user);
        // res.writeHead(200,{'Context-Type':'text/html;charset:utf8'})
        res.send(JSON.stringify(user))
    })
})


var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})