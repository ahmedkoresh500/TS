/*
    * dataType: [literal type]  =>> is a custom type
*/

type nums = 0 | 1 | -1 ;

function compare1(num1: number, num2: number): nums {   // output = nums
    if(num1 === num2){
        return 0;
    }else if(num1 > num2){
        return 1;
    }else{
        return -1;
    };
};

console.log( compare1(20, 20) );     // result = 0
console.log( compare1(20, 10) );     // result = 1
console.log( compare1(10, 20) );     // result = -1

let number1: nums = 0;
let number2: nums = 1;
let number3: nums = -1;
// let number4: nums = 2;           // different dataType  = syntax error
