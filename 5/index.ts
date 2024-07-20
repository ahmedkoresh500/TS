/*
    * [type annotations] [type signature] [type any]

    * indicate [variables] dataType
    * indicate [functions] dataType [input/ output]
    * objects, etc.

    [1] why we use it ?                             =>> to force [type checking process]
    [2] is it mandatory?                            =>> yes
    [3] what would happen if we didn't use it       = syntax error
*/

let name1: string = "Elzero";
let age1 = 38;
let hire: boolean = true;
let salary: any = "5000";   // [type annotations] [type signature] [type any] =>> two are the same
let allVars;                // [type annotations] [type signature] [type any] =>> two are the same

// name1 = 5;       // result = syntax error
// age = "40";      // result = syntax error
salary = 5000;      // no error


function add1(n1: any, n2: any){          // [type annotations] [type signature] [type any]
    return n1 + n2;
};

function add2(n1: number, n2: number){
    return n1 + n2;
};

console.log( add1(20, "20") );              // result = 2020
console.log( typeof add1(10, "20") );       // result = string
// console.log( add2(10, "20") );           // result = syntax error
// console.log( typeof add2(10, "20") );    // result = syntax error
