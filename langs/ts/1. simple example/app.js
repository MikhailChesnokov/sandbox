var cnt = document.getElementById("content");
var User = /** @class */ (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var Tom = new User("Tom", 20);
cnt.innerHTML = "Name: " + Tom.name + ", Age: " + Tom.age;
