var async = require('async');


// 异步串行无关联
// 数组内task 数组 按顺序执行完，最后执行回调。
// async.series([
//     function(callback){
//         //todo
//         callback(null,'one');
//         // callback('err','one');  will stop  continue two
//     },
//     function(callback){
//         callback(null,'two');
//     }
// ],function(err,results){
//     console.log(results);
// })

// console.time('test');  // v8 引擎支持
// async.series({
//     one:function(callback){
//         //todo
//         setTimeout(function(){
//              callback(null,'one');
//         },1000);
       
//         // callback('err','one');  will stop  continue two
//     },
//     two:function(callback){
//         setTimeout(function(){
//             callback(null,'two');
//         },2000);
//     }
// },function(err,results){
//     console.log(results);
//     console.timeEnd('test');
// })

// 并行无关联   常用之一

//  async.parallel([
//      function(callback){
//          callback(null,'one');
//      },
//      function(callback){
//          callback(null,'two');
//      },
//  ],function(err,results){
//      console.log(results);
//  })
// console.time('test');
// async.parallel({
//     one: function(callback){
//         setTimeout(function(){
//             callback(null,'1');
//         },3000);
//     },
//     two: function(callback){
//         setTimeout(function(){
//             callback(null,'2');
//         }, 2000);
//     }
// },function(err,results){
//     console.log(results);
//     console.timeEnd('test');
// })

// 串行有关联
//  async.waterfall([
//      function(callback){
//          callback(null,'one','two');
//      },
//      function(arg1,arg2,callback){
//          callback(null,arg1,arg2,'three');
//      },
//      function(arr1,arr2,arr3,callback){
//          callback(null,[arr1,arr2,arr3,'done']);
//      }
//  ],function(err,results){
//      console.log(results);
//  })

console.time('test');
 async.waterfall([
    function(callback){
         setTimeout(function(){
             callback(null,'one','two');
         },1000);
     },
    function(arg1,arg2,callback){
         setTimeout(function(){
             callback(null,arg1,arg2,'three');
         },2000);
     },
     function(arr1,arr2,arr3,callback){
         setTimeout(function(){
              callback(null,[arr1,arr2,arr3,'done']);
         },3000); 
     }
 ],function(err,results){
     console.log(results);
     console.timeEnd('test');
 })
















