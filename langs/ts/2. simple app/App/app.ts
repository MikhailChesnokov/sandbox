class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let tom = new User("Tom", 30);

console.log("Name: " + tom.name + ", age: " + tom.age);