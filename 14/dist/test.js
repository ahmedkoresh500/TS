"use strict";
/*
    * dataType: [literal type]  =>> is a custom type
*/
function compare1(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
    ;
}
;
console.log(compare1(20, 20)); // result = 0
console.log(compare1(20, 10)); // result = 1
console.log(compare1(10, 20)); // result = -1
let number1 = 0;
let number2 = 1;
let number3 = -1;
// let number4: nums = 2;           // different dataType  = syntax error
//# sourceMappingURL=test.js.map