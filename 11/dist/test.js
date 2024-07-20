"use strict";
/*
    * [type annotations] [type signature] [type any]:
        =>> with [anonymous function]
        =>> with [arrow function]
*/
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20));
// const addWithArrow = (num1: number, num2: number) => num1 + num2;   // no return =>> no semicolon =>> no curelyBracket =>> no function keyword
// const addWithArrow = (num1: number, num2: number) => {return num1 + num2};
const addWithArrow = (num1, num2) => { return num1 + num2; };
console.log(addWithArrow(10, 30));
//# sourceMappingURL=test.js.map