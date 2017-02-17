var util = require('util');

// util.inherits(constructor,superconstructor)
// function Base(){
//     this.name = 'hu';
//     this.age = 18;
//     this.sayHello = function(){
//         console.log("hello"+this.name)
//     }
// }

// Base.prototype.showName = function(){
//     console.log(this.name)
// }

// function Sub(){
//     this.name = 'sub'
// }

// util.inherits(Sub,Base)

// var objBase = new Base();
// objBase.sayHello();
// objBase.showName();
// console.log(objBase);

// var objSub = new Sub();
// // objSub.sayHello();
// objSub.showName();
// console.log(objSub);

// util.inspect

// function Person(){
//     this.name = 'hu';
//     this.toString = function(){
//         return this.name;
//     }
// }

// var obj = new Person();

// console.log(util.inspect(obj));
// console.log(util.inspect(obj,true));

var events = require('events')
//events
// var emitter = new events.EventEmitter();

// emitter.on('someevent',function(arg1,arg2){
//     console.log('1'+ arg1 + arg2)
// })

// emitter.on('someevent',function(arg1,arg2){
//      console.log('2' + arg1 + arg2)
// })

// emitter.emit('someevent',1993,12)

// emitter.emit('error')

var fs = require('fs');
fs.readFile('file1.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})