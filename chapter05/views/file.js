//  相当于当前路径引入
var fs = require('fs');

module.exports = {
    readFileSync: function(res){
        var data = fs.readFileSync('./templates/main.html','utf-8');
        res.write(data);
    },
    readFile: function(file,res){
        var data = fs.readFile(file,'utf-8',function(err,data){
            res.write(data);
            res.end();
        });
    },
    readImageFile: function(file,res){
        fs.readFile(file,'binary',function(err,data){
            res.write(data,'binary');
            res.end();
        })
    },
    writeFile: function(file,res){
        fs.writeFile(file,'abc',function(err){
            if (err) throw err;
            res.write('write success');
            res.end();
        })
    }
}