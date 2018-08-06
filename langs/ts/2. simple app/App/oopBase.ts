// definition
class UserBase {
    id: number;
    name: string;
    getInfo(): string {
        return "id: " + this.id + " ,name: " + this.name;
    }
}

// constructor
class SomeClass1 {
    someState: string;

    constructor(someState: string) {
        this.someState = someState;
    }
}

// static fields and functions
class SomeClass2 {
    static pi: number = 3.14;

    static square(x: number): number {
        return x * x;
    }
}

let pi = SomeClass2.pi;
let squareResult = SomeClass2.square(2);

// Access modifiers
class SomeClass3 {
    field1: number;
    public field2: number;
    protected field3: number;
    private field4: number;
}

let class3 = new SomeClass3();
console.log(class3.field1);
console.log(class3.field2);
// console.log(class3ex.field3);
// console.log(class3ex.field4);

// Определение свойств через конструктор
class  SomeClass4 {
    constructor(public name: string, public address: string, private age: number) {
    }
}

let class4 = new SomeClass4("Tom", "Moon", 3);
console.log(class4.name + class4.address);
//console.log(class4.age);

// getters/setters
class SomeClass5 {
    private _name: string;

    public get name(): string {
        return this._name;
    }
    public set name(val: string) {
        this.name = val;
    }
}
let class5 = new SomeClass5();
class5.name = "Tom";

class SomeClass6 {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}