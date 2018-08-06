// Unions
let unionId: number | string;
unionId = "2";
unionId = 2;

// Type check
let someAnyVar: any;
someAnyVar = 1;
someAnyVar = "one";

if (typeof someAnyVar === "number") {
    someAnyVar += 2;
} else if (typeof someAnyVar === "string") {
    someAnyVar += ", two";
}

// type keyword
type AllowedType = string | number;
let allowedTypeName: AllowedType = "1";
allowedTypeName = 1;

// Type assertions
let someAnyValue: any = "soem string";
let strLength1: number = (<string>someAnyValue).length;
let strLength2: number = (someAnyVar as string).length;