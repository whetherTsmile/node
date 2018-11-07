//错误处理中间件
var express = require('express')
var app = express();
var router = express.Router();
var fs =require('fs')

app.get('/',(req,res,next)=>{
    Promise.resolve().then(function(){
        throw new Error('break')
    }).catch(next)
})

app.get("/admin", 
    function (req, res, next) {
      fs.readFile("maybe", "utf8", function (err, data) {
          res.locals.data = data;
          next(err);
      });
    },
    function (req, res) {
      res.locals.data = res.locals.data.split(",")[1];      
      res.send(res.locals.data);
    }
  );
app.listen(8080)