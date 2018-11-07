function say(hello){
    console.log(hello);
}

function execute(someFunction,value){
    someFunction(value);
}

execute(say,"hello");
console.log(__filename);//返回当前执行脚本的文件名，绝对路径
console.log(__dirname);//目录

var s = setTimeout(function(){
    console.log("hello");
    
},1000);

clearTimeout(s)

// var i = 0;
// var ss = setInterval(function(){
//     console.log(i);
//     i++;
//     if(i==10){
//         clearInterval(ss)
//     }
// },10)

console.assert(2==1,"no")

console.log("fad%dfa",1991);

// console.trace()

var counter = 10;
console.log("计数: %d", counter);
console.log("计数: "+counter);
console.time("获取数据");
//
// 执行一些代码
// 
console.timeEnd('获取数据');

process.on('exit',function(code){
    setTimeout(function(){
        console.log("no");
        
    },0);
    console.log(code);
    
})

console.log("over");



