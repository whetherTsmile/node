var fs = require('fs')
// var data = ''

// //从流中读取数据
// var readerStream = fs.createReadStream('package.json')

// readerStream.setEncoding('utf8')
// readerStream.on('data',function(chunk){
//     data+=chunk;
// });
// readerStream.on('end',function(){
//     console.log(data);
// })

// readerStream.on('error',function(err){
//     console.log(err.stack)
// })
// console.log("write out run over");

// //写入流
// data = 'woshishui sfafad'

// var writerStream = fs.createWriteStream('output.txt')

// writerStream.write(data,'utf8')

// writerStream.end()

// writerStream.on('finish',function(){
//     console.log('write in done');
// })

// writerStream.on('error',function(err){
//     console.log(err.stack);
// })

// console.log("write in run over");

// data=''

//管道流，文件复制
//input
var readerStream1 = fs.createReadStream('package.json')
//output
var writerStream1 = fs.createWriteStream('output.txt')
//管道读写操作
// 读取 input 文件内容，并将内容写入到 output 文件中
readerStream1.pipe(writerStream1);

//链式流

var zlib = require('zlib')
// 1. 压缩

fs.createReadStream('package.json')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('h.gz'));

console.log('run over')

// 2. 解压
setTimeout(function(){
    fs.createReadStream('h.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('h.txt'))
    
    console.log('run over')
},1000)
