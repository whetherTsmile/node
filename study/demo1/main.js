var fs = require("fs")

//阻塞
// var data = fs.readFileSync('package.json')

// console.log(data.toString())

// console.log("run over")

//不阻塞
// fs.readFile('package.json', function (err, data) {
//   if (err) return console.error(err)
//   console.log(data.toString())
// })
// console.log("run over")


var Hello = require('./hello')
// hello.world();
hello = new Hello();
hello.setName('haha')
hello.sayHello();

