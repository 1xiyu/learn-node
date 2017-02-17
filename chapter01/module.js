var name;
exports.setName = function(rname){
    console.log(this)
    name = rname;
}
exports.getName = function(){
    console.log('hello'+ name);
}