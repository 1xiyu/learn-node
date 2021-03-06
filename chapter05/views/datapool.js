var mysql = require('mysql');

function DataPool() {
    this.flag = true;  // if connect
    this.pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'litchi',
        database: 'user',
        port: '3306'
    });

    this.getPool = function(){
        if(this.flag){
            this.pool.on('connection',function(conn){
                conn.query('set session auto_increment=1');
                this.flag = false;
            })
        }
        return this.pool; 
    }
}

module.exports = DataPool;