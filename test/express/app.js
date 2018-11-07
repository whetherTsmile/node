//应用程序级中间件 app.use

var express = require('express')
var app = express()
app.use((req,res,next)=>{
    console.log('time:'+Date.now());
    next();
})

app.use('/user/:id',(req,res,next)=>{
    console.log("url:",req.originalUrl)
    next();
},(req,res,next)=>{
    console.log("method:",req.method);
    next();
})
app.get('/',function(req,res){
    res.send('get')
})
app.get('/user/:id',(req,res,next)=>{
    // res.send('get id')
    console.log(req.params.id);
    if(req.params.id==='1') next('route')
    else
    next();
},(req,res,next)=>{
    res.send(req.params)
    next()
})
app.get('/user/:id',(req,res)=>{
    res.end("end")
})
app.post('/',function(req,res){
    res.send('post')
})
app.put('/user',function(req,res){
    res.send('put')
})
app.delete('/user',function(req,res){
    res.send('delete')
})


var server = app.listen(8080,()=>{
    console.log('on');
})

