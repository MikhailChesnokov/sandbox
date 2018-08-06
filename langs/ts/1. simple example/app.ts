let cnt = document.getElementById("content");

class User {
    name : string;
    age: number;

    constructor(_name: string, _age: number){
        this.name = _name;
        this.age = _age;
    }
}

let Tom : User = new User("Tom", 20);

cnt.innerHTML = "Name: " + Tom.name + ", Age: " + Tom.age;