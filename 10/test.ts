/*
    * [function]: rest parameter:

    * [in terminal]:
        =>> [tsc]                           =>> compile [TS file] to [JS file]
        =>> [node dist/test.js]             =>> run code in terminal
        =>> [node ./dist/test.js]           =>> run code in terminal
*/

function addAll(...nums: number[]): number {     // output = [number]
    let result = 0;

    /*
    for(let i=0 ; i<nums.length ; i++){
        result += nums[i];
    };
    */
    
     nums.forEach( num => result += num );                  // all are the same
    // nums.forEach( (num) => result += num );              // all are the same

    // nums.forEach( num => return result += num );     // [return] for main function =>> can't looped 
                                                        // = syntax error

    // nums.forEach( num => { return result += num } );     // all are the same
    // nums.forEach( (num) => { return result += num; } );  // all are the same
    return result;
};

console.log( addAll(10, 20, 30, 100, 10.5, +true) );    // boolean value not a number = syntax Error
                                                        // solution    =>> unary plus operator

