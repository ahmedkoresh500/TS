/*
    * generics:
        [1] arrow function
        [2] multiple types

    * [tsc && node dist/test.js]        =>> true syntax
    * [tsc && node ./dist/test.js]      =>> true syntax
*/

function returnType <T> (value: T): T {
    return value;
};

console.log( returnType (25) );
console.log( returnType <number> (26) );
console.log( returnType <string> ("Ahmed") );
console.log( returnType <boolean> (false) );
console.log(`${"#".repeat(30)}`);


// [1] arrow function
const returnTypeArrowSyntax = <T> (value: T): T => value;       // two are the same

/*
const returnTypeArrowSyntax = <T> (value: T): T => {            // two are the same
    return value;
}
*/

console.log( returnTypeArrowSyntax (27) );
console.log( returnTypeArrowSyntax <number> (28) );
// console.log( returnTypeArrowSyntax <number> ("29") );  // result = syntax error =>> ["29"] not a number
console.log( returnTypeArrowSyntax <string> ("Ahmed") );
console.log( returnTypeArrowSyntax <boolean> (true) );
console.log(`${"#".repeat(30)}`);


// [2] multiple types
/*
let testType = <T> (value: T): T => {               // [string] type != [T] type
    return `the value is ${value} and type is ${typeof value}`; // result = syntax error
};
*/

let testType = <T> (value: T): string => {          // [string] type != [T] type
    return `the type of value [${value}] = [${typeof value}]`;
};


console.log( testType (30) );
console.log( testType <number> (31) );
// console.log( testType <number> ("32") );         // result = syntax error  =>> ["32"] not a number
console.log( testType <string> ("Ahmed") );
console.log( testType <boolean> (true) );
console.log(`${"#".repeat(30)}`);


// [EX]: multiple types:
let multipleTypes = <T, S> (value1: T, value2: S): string => {
    return `typeof 1st value [${value1}] = [${typeof value1}], typeof 2nd value [${value2}] = [${typeof value2}]`;
};

console.log( multipleTypes ("Osama", 33) );
console.log( multipleTypes <string, number> ("Osama", 34) );
console.log( multipleTypes <string, boolean> ("Elzero", true) );
console.log(`${"#".repeat(30)}`);
