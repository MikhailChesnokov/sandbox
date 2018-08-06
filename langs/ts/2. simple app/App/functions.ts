// Definition
function add0(a, b) {
    return a + b;
}

function add1(a: number, b: number): number {
    return a + b;
}

let add2 = function (a: number, b: number): number {
    return a + b;
}

let add3 = (a: number, b: number): number => a + b;

let add4 = (a, b) => a + b;

// Void
function someVoidFunc(a: string): void {
    console.log(a);
}

// Необязательные параметры
function someFunc(a: string, b?: number): void {
    
}

someFunc("1");
someFunc("1", 1);

// Параметры по умолчанию

function someFunc2(a: string, b: number = 2): void {

}

someFunc2("1");
someFunc2("1", 3);

function someFunc3(a: string, b: number = add3(2, 3)) {

}

// Неопределенный набор параметров
function  someFunc4(a: number, ...b: number[]) {
    
}

someFunc4(1);
someFunc4(1, 2);
someFunc4(1, 2, 3);

// Overload

function addOverloaded(a: number, b: number): void;
function addOverloaded(a: string, b: string): void;
function addOverloaded(a: string | number, b: string | number) {
    
}
