//路由器级中间件 router.use
var express = require('express')
var app = express();
var router = express.Router();
var logger = require('morgan')
// router.use((req,res,next)=>{
//     console.log('time:'+Date.now());
//     next();
// })

// router.get('/user',(req,res,next)=>{
//     res.send('fafa')
// })


// app.use('/',router)

// router.use(function (req, res, next) {
//     if (!req.headers['x-auth']) return next('router')
//     next()
//   })
  
//   router.get('/', function (req, res) {
//     res.send('hello, user!')
//   })

  
//   // use the router and 401 anything falling through
//   app.use('/admin', router, function (req, res) {
//     res.sendStatus(401)
//   })

// router.use(logger())

router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

// this will only be invoked if the path starts with /bar from the mount point
router.use('/bar', function(req, res, next) {
  // ... maybe some additional /bar logging ...
  // console.log('fad')
  next();
});

// always invoked
router.use(function(req, res, next) {
  res.send('Hello World');
});

app.use('/foo', router);

app.listen(8080)