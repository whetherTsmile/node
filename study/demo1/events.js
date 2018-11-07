var events = require('events')

var eventEmitter = new events.EventEmitter();

// eventEmitter.emit('error')

var connectHandler = function connected(){
    console.log('链接成功');

    eventEmitter.emit('data_received')
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function(){
    console.log('数据接收成功')
})
// setTimeout(function(){
    var x= eventEmitter.emit('connection');
    console.log(x)
// },1000)


console.log('run over')

console.log(eventEmitter.listenerCount('connection'))

