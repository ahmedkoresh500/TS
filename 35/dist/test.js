"use strict";
/*
    * generics: multiple types:
        [1] arrow function
        [2] multiple types
        [3] discusssion


    * [tsc && node dist/test.js]        =>> true syntax
    * [tsc && node ./dist/test.js]      =>> true syntax
*/
function returnType(value) {
    return value;
}
;
console.log(returnType(33));
console.log(returnType(33));
console.log(returnType("Ahmed"));
console.log(returnType(false));
console.log(`${"#".repeat(30)}\n\n`);
// [1] arrow function
const returnTypeArrowSyntax = (value) => value; // two are the same
/*
const returnTypeArrowSyntax = <T> (value: T): T => {            // two are the same
    return value;
}
*/
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax("100")); // [<number>]  =>> syntax error 
console.log(returnTypeArrowSyntax("Ahmed"));
console.log(returnTypeArrowSyntax(true));
console.log(`${"#".repeat(30)}\n\n`);
// [2] multiple types
/*
let testType = <T> (value: T): T => {               // return string  =>> not assignable to [T] type
    return `the value is ${value} and type is ${typeof value}`;
};
*/
let testType = (value) => {
    return `the value is ${value} and type is ${typeof value}`;
};
console.log(testType(100));
console.log(testType(100));
console.log(testType("100")); // [<number>]  =>> syntax error
console.log(testType("Ahmed"));
console.log(testType(true));
console.log(`${"#".repeat(30)}\n\n`);
// multiple types EX:
let multipleTypes = (value1, value2) => {
    return `first value is ${value1} typeof [${typeof value1}], second value is ${value2} typeof [${typeof value2}]`;
};
console.log(multipleTypes("Osama", 100));
console.log(multipleTypes("Osama", 100));
console.log(multipleTypes("Elzero", true)); // [<number>]  =>> syntax error 
console.log(`${"#".repeat(30)}\n\n`);
//# sourceMappingURL=test.js.map