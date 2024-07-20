"use strict";
/*
    * dataType:
        [1] void:
            * void function         =>> no return =>> [result = nothing]
            * [ts], [js] function   =>> no return =>> [result = undefined]
        [2] never:
            =>> never type  =>> never return

    * [tsconfig.json] file
        * type checking:
            =>> "allowUnreachableCode": true,           =>> no errors
            =>> "allowUnreachableCode": false,          =>> detect errors
*/
// EX [1]:
function logIn1(msg) {
    console.log(msg);
    return msg;
}
;
console.log(logIn1(`i'm a message 1`));
console.log(`${"#".repeat(10)}`);
// [void]
// EX [2]:
function logIn2(msg) {
    console.log(msg); // no return =>> [result = undefined]
}
;
console.log(logIn2(`i'm message 2`));
console.log(`${"#".repeat(10)}`);
// EX [3]:
function logIn3(msg) {
    console.log(msg); // no return = [result = undefined]
    return;
}
;
console.log(logIn3(`i'm message 3`));
console.log(`${"#".repeat(10)}`);
// [never]
// EX [4]:
const fail = (msg) => {
    throw new Error(msg); // [never type =>> never return]
    return; // un-reachable code
};
fail("throw new Error");
/*
// EX [5]:
function alwaysLog(name: string): never {       // [never type =>> never return]
    console.log(name);
    while(true){
        console.log(name);                      // [infinite loop]
    };
    return;                                     // syntax error  =>> [never type =>> never return]
};
alwaysLog("Ahmed");
console.log("test");                            // un-reachable code
*/
//# sourceMappingURL=test.js.map