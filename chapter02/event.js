var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.on('anwei',function(who){
    console.log('gei' + who + 'daoshui')
})

life.on('anwei',function(who){
    console.log('gei' + who + 'yixiyu')
})

life.on('anwei',function(who){
    console.log('gei' + who + '3')
})

life.on('anwei',function(who){
    console.log('gei' + who + '4')
})

life.on('anwei',function(who){
    console.log('gei' + who + '5')
})

life.on('anwei',function(who){
    console.log('gei' + who + '6')
})
life.on('anwei',function(who){
    console.log('gei' + who + '7')
})
life.on('anwei',function(who){
    console.log('gei' + who + '8')
})
life.on('anwei',function(who){
    console.log('gei' + who + '9')
})
life.on('anwei',function(who){
    console.log('gei' + who + '10')
})
life.on('qiuni',function(who){
    console.log('gei' + who + 'mai')
})
life.removeListener('anwei',function(who){
    console.log('gei' + who + 'daoshui')
})
life.removeAllListeners('anwei1')
console.log(life.listeners('anwei').length)
var a = life.emit('anwei','guoxin')
console.log(EventEmitter.listenerCount(life,'anwei'))