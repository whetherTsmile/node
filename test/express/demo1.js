var express = require('express')
var app = express()
var sql = require('./mysqlexample')
var admin=express()


// app.locals.title="app"


// // app.use(express.static('public'))
app.set('views','./views')
app.set('view engine','pug')
// app.engine('pug',require('pug').__express)
app.get('/admin',(req,res,next)=>{
    // res.json(JSON.stringify(sql))
    res.render('index',{title:'heihei',message:'message'},function(err,html){
        // res.status(404).send(html)
        // res.set('Content-Type','text/html')
        // res.send(Buffer.from('haha'))
        // next('route')
        next()
    })

    // sql.query('select * from test',function(err,results){
    //     if(err){
    //         res.send('no')
    //     }else{
    //         res.send(results)
    //     }
    // })
},(req,res)=>{
    // res.send("ga")
    res.redirect('user')
    // res.redirect('..')

})

app.get('/admin/user',(req,res)=>{
    res.send('redirect')
    res.end()
})

app.get('/',(req,res)=>{
    res.send('redss')
})
// app.param('id', function (req, res, next, id) {
//     console.log('CALLED ONLY ONCE');
//     if(id==='3'){
//         next('route')
//     }else{
//         next()
//     }
//     // next();
//   });
//   app.get('/user/:id', function (req, res, next) {
//     console.log('although this matches');
//     next();
//   });
  
//   app.get('/user/:id', function (req, res) {
//     console.log('and this matches too');
//     res.end();
//   });
// admin.on('mount', function (parent) {
//     console.log('Admin Mounted');
//     // console.log(parent); // refers to the parent app
//   });
  
//   admin.get('/', function (req, res) {
//     res.send('Admin Homepage');
//   });
  
//   app.use('/admin', admin);


app.listen(8080)