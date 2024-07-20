"use strict";
/*
    * generics introduction:
        [1] help writing re-usable code
        [2] allow to pass type as parameter to another type
        [3] deal with multiple types without using [any type]
        [4] we can create:
            [a] generic classes
            [b] generic functions
            [c] generic methods
            [d] generic interfaces

    * union operator =>> [|]
*/
function returnNumber(value) {
    return value;
}
;
function returnString(value) {
    return value;
}
;
function returnBoolean(value) {
    return value;
}
;
// console.log( returnNumber("10") );           // syntax error
console.log(returnNumber(10));
console.log(returnString("Elzero"));
console.log(returnBoolean(true));
console.log(`${"#".repeat(30)}\n\n`);
function returnAll(value) {
    return value;
}
;
console.log(returnAll("10")); // string not number
console.log(returnAll("Ahmed"));
console.log(returnAll(10));
console.log(returnAll(true));
console.log(`${"#".repeat(30)}\n\n`);
// Generics
// function returnType <T> (value: T): T {                            // return dynamic => two are the same
function returnType(value) {
    return value;
}
;
console.log(returnType(10));
console.log(returnType("Ahmed"));
console.log(returnType(false));
console.log(`${"#".repeat(30)}\n\n`);
console.log(returnType(10));
console.log(returnType("Ahmed"));
console.log(returnType(false)); // syntax error =>> [false] not string
console.log(returnType([1, 2, 3])); // syntax error =>> [1, 2, 3] not number
console.log(returnType([1, 2, 3])); // syntax true
//# sourceMappingURL=test.js.map