var buf = Buffer.from('fafa','utf-8')
console.log(buf.toString('hex'))
console.log(buf.toString('base64'))
// var buf1 = new Buffer("fa","ascii")
// console.log(buf1.toString('hex'))
const buf1 = Buffer.alloc(10)
const buf2 = Buffer.alloc(10,1)
const buf3 =Buffer.from([1,2,3])
const buf4 = Buffer.from('test')
const buf5 = Buffer.from('test','latin1')
buf = Buffer.alloc(256)
len = buf.write("www.hahahaha.com")
console.log("write in " + len)
console.log(buf.toString())

buf = Buffer.alloc(26);
for (var i = 0; i < 26 ; i++) {
    buf[i] = i+97;  
}
console.log(buf)

buf = Buffer.from([1,2,3,4,5]);
console.log(buf)
var json = JSON.stringify(buf)
console.log(json)
// json = buf.toJSON();
// console.log(json)


//json转回buffer
const copy = JSON.parse(json,(key,value)=>{
    // console.log(value)
    console.log(value+"="+value.type)
    return value && value.type === 'Buffer' ? 
    Buffer.from(value.data) :
    value;
});

console.log(copy)

var buffer1 = Buffer.alloc(12+13)
buffer1.write('菜鸟教程')
// var buffer1 = Buffer.from('菜鸟教程',256)
var buffer2 = Buffer.from('www.baidu.com')
var buffer3 = Buffer.concat([buffer1,buffer2])
console.log(buffer3.toString())

buffer2.copy(buffer1,12) //一个中文3个字节
console.log(buffer1.toString())

var buffer4 = buffer3.slice(0,12)

console.log(buffer4.toString())