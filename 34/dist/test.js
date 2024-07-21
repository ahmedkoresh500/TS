"use strict";
/*
    * generics introduction:
        [1] help writing re-usable code
        [2] allow to pass type as parameter  =>> to another type
        [3] deal with [multiple types] without using [any type]

        [4] we can create:
            [a] generic classes
            [b] generic functions
            [c] generic methods
            [d] generic interfaces

    [1] union operator:
        [|] or
    [2] intersection operator:
        [&] and
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
// console.log( returnNumber("10") );           // result = syntax error
console.log(returnNumber(10));
console.log(returnString("Elzero"));
console.log(returnBoolean(true));
console.log(`${"#".repeat(30)}`);
function returnAll(value) {
    return value;
}
;
console.log(returnAll(10));
console.log(returnAll("10")); // = string not number
console.log(returnAll("Ahmed"));
console.log(returnAll(true));
console.log(`${"#".repeat(30)}`);
// Generics:
// function returnType <T> (value: T): T {                            // return dynamic => two are the same
function returnType(value) {
    return value;
}
;
console.log(returnType("Ahmed"));
console.log(returnType("10")); // = string not number
console.log(returnType(10));
console.log(returnType(false));
console.log(`${"#".repeat(30)}`);
console.log(returnType(10));
console.log(returnType("Ahmed"));
//console.log( returnType <string> (false) );       // result = syntax error =>> [false] not string
//console.log( returnType <number> ([1, 2, 3]) );   // result = syntax error =>> [1, 2, 3] not number
console.log(returnType([1, 2, 3])); // true syntax
//# sourceMappingURL=test.js.map