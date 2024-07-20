/*
    * dataType:
        [1] void:
            * void function         =>> no return =>> [result = nothing]
            * [js], [ts] function   =>> no return =>> [result = undefined]
        [2] never:
            =>> never type  =>> never return

    * [tsconfig.json] file
        * type checking:
            =>> "allowUnreachableCode": true,           =>> no errors
            =>> "allowUnreachableCode": false,          =>> detect errors
*/

// EX [1]: [return]
function logIn1(msg: string) {
    console.log(msg);
    return msg;
};
console.log( logIn1(`i'm message 1`) );
console.log(`${"#".repeat(10)}`);


// EX[2] = EX[3] = EX[4] = EX[5]   =>> no return  =>> [result = undefined]
// EX [2]:
function logIn2(msg: string) {
    console.log(msg);                       // EX [2]: [no void] [no return]
};
console.log( logIn2(`i'm message 2`) );
console.log(`${"#".repeat(10)}`);


// EX [3]: [void]
function logIn3(msg: string): void {
    console.log(msg);                       // EX [3]: [void] [return]
    return;
};
console.log( logIn3(`i'm message 3`) );
console.log(`${"#".repeat(10)}`);


// EX [4]: [void]
function logIn4(msg: string): void {
    console.log(msg);                       // EX[4]: [void] only
};
console.log( logIn3(`i'm message 4`) );
console.log(`${"#".repeat(10)}`);


// EX [5]: [void]
function logIn5(msg: string){
    console.log(msg);                       // EX[5]: [return] only
    return;
};
console.log( logIn3(`i'm message 5`) );
console.log(`${"#".repeat(10)}`);



// [never]
// EX [6]:
const fail = function(msg: string) {  // [ordinal function] [anonymous function] [arrow function]
    throw new Error(msg);
    return;                           // unreachable code
};
fail("throw new Error");



// EX [7]:
function alwaysLog(name: string): never {   // syntax error  =>> [never type] [never return]
    console.log(name);
    while(true){
        console.log(name);                  // [infinite loop]
    };
    // return;      // = syntax error  =>> [never type] [never return]  =>> [unreachable code]
};
alwaysLog("Ahmed");

console.log("test");                        // unreachable code   =>> execution stopped in above function
