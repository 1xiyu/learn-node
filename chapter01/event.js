var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function(){
    console.log('i am some event')
})
setTimeout(function(){
    event.emit('some_event')
},1000)