function UserClass(name,age,friends) {
    this.name = name;
    this.age = age;
    this.friends = friends;
}

UserClass.prototype.sayName = function(){
    return this.name;
}

UserClass.prototype.sayFriends = function(){
    return this.friends;
}
module.exports = UserClass;