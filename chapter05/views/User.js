var UserClass = require('./UserClass');

function User(name,age,friends){
    UserClass.apply(this,[name,age,friends]);
    this.name = 'litchi';
}

User.prototype = new UserClass();

module.exports = User;