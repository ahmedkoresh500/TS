/*
    * generics:
        [1] arrow function
        [2] multiple types
        [3] discusssion


    * [tsc && node dist/test.js]        =>> true syntax
    * [tsc && node ./dist/test.js]      =>> true syntax
*/

function returnType <T> (value: T): T {
    return value;
};

console.log( returnType (33) );
console.log( returnType <number> (33) );
console.log( returnType <string> ("Ahmed") );
console.log( returnType <boolean> (false) );
console.log(`${"#".repeat(30)}\n\n`);



// [1] arrow function
const returnTypeArrowSyntax = <T> (value: T): T => value;       // two are the same
/*
const returnTypeArrowSyntax = <T> (value: T): T => {            // two are the same
    return value;
}
*/

console.log( returnTypeArrowSyntax (100) );
console.log( returnTypeArrowSyntax <number> (100) );
console.log( returnTypeArrowSyntax <number> ("100") );      // syntax error =>> ["100"] not a number
console.log( returnTypeArrowSyntax <string> ("Ahmed") );
console.log( returnTypeArrowSyntax <boolean> (true) );
console.log(`${"#".repeat(30)}\n\n`);


// [2] multiple types
/*
let testType = <T> (value: T): T => {               // return string  =>> not assignable to [T] type
    return `the value is ${value} and type is ${typeof value}`;
};
*/

let testType = <T> (value: T): string => {          // return string  =>> not assignable to [T] type
    return `the value is ${value} and type is ${typeof value}`;
};
console.log( testType (100) );
console.log( testType <number> (100) );
console.log( testType <number> ("100") );       // syntax error  =>> ["100"] not a number
console.log( testType <string> ("Ahmed") );
console.log( testType <boolean> (true) );
console.log(`${"#".repeat(30)}\n\n`);


// multiple types EX:
let multipleTypes = <T, S> (value1: T, value2: S): string => {
    return `first value is ${value1} typeof [${typeof value1}], second value is ${value2} typeof [${typeof value2}]`;
};

console.log( multipleTypes ("Osama", 100) );
console.log( multipleTypes <string, number> ("Osama", 100) );
console.log( multipleTypes <string, boolean> ("Elzero", true) );
console.log(`${"#".repeat(30)}\n\n`);
