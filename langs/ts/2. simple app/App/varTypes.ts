// Boolean
let b1: boolean = true;
let b2 = false;

// Number
let n1: number = 1;
let n2: number = 0xffff;
let n3: number = 0b1110;
let n4: number = 0o777;
let n5 = 123.456;

// String
let s1: string = "String";
let s2: string = 'String';
let s3: string = `String`;
let s4: string = `Item 1: ${s1}, item 2: ${n1}, item 3: ${b1}`;
let s5: string = `line 1
line 2
line 3`;

// Null, undefined
let und: undefined = undefined;
let nul: null = null;

let undNum: number = undefined;
let nulNUm: number = nul;

// Arrays
let numsArray: number[] = [1, 2, 3];
let stringArray: string[] = ['one', 'two', 'three'];

let numArray2: Array<number> = [4, 5, 6];

// Tuples
let someTuple: [string, number] = ['one', 1];
console.log(someTuple[0]);

// Enums
enum Seasons {
    Winter,
    Spring,
    Summer,
    Autumn
}
enum Seasons2 {
    Winter = 1,
    Spring = 2,
    Summer = 4,
    Autumn // 5
}

let season: Seasons = Seasons.Spring;
let seasonName: string = Seasons[season];

// Any
let someVar: any = "some str";
someVar = 1;
let someVarArray: any[] = [1, "2", true];

//Complex types
let somePerson = {
    name: "Petr",
    age: 23
}
console.log(somePerson.name);

somePerson = {
    name: "Stepan",
    age: 24
}