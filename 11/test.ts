/*
    * [type annotations] [type signature] [type any]:
        =>> with [anonymous function] 
        =>> with [arrow function]

    * [in terminal]:
        =>> npm install -g ts-node      =>> download [ts-node] package

        =>> node test.ts                =>> doesn't run
        =>> ts-node test.ts             =>> run

        =>> node main.js         =>> run
        =>> ts-node main.js      =>> run
*/

// [1] anonymous function:
const add = function(num1: number, num2: number): number {   // output = [number]
    return num1 + num2;
};
console.log( add(10, 20) );


/*
    [2] arrow function:
        =>>  no functionName  =>> no function keyWord
        =>> no return =>> no semicolon =>> no curelyBracket
*/

// const addWithArrow = (num1: number, num2: number) => num1 + num2;
// const addWithArrow = (num1: number, num2: number) => {return num1 + num2};
const addWithArrow = (num1: number, num2: number) => {return num1 + num2;};     // parentheses is a must
console.log( addWithArrow(30, 10) );
