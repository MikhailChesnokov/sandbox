// Тип функции
let binaryOperation: (x: number, y: number) => number;

binaryOperation = (x, y) => x + y;
console.log(binaryOperation(2, 1));
binaryOperation = (x, y) => x - y;
console.log(binaryOperation(2, 1));

// callback

function funcWithFuncArgument(x: number, y: number, operation: (x: number, y: number) => number) {
    return operation(x, y);
}

// arrow funcs
let arrowFunc1 = (x: number, y: number) => x + y;
let arrowFunc2 = () => "Hello, world";
let arrowFunc3 = (): number => {
    let a = 2 + 2;
    return a;
}
