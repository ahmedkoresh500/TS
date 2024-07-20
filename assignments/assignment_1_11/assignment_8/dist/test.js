"use strict";
/*
    * Assignment [8]: =>> Done
*/
// Write The Function Here
function printInConsole(...arg) {
    for (let i = 0; i < arg.length; i++) {
        console.log(`the value is ${arg[i]} and type is ${typeof arg[i]}`);
    }
    ;
    return `Done`;
}
;
// Using The Function => Do Not Edit what's next
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
/*
// Output
The Value Is 1 And Type Is number
The Value Is 2 And Type Is number
The Value Is 3 And Type Is number
The Value Is 4 And Type Is number
The Value Is 5 And Type Is number
Done
The Value Is A And Type Is string
The Value Is B And Type Is string
The Value Is C And Type Is string
Done
The Value Is true And Type Is boolean
The Value Is false And Type Is boolean
The Value Is false And Type Is boolean
The Value Is true And Type Is boolean
The Value Is true And Type Is boolean
Done
*/ 
//# sourceMappingURL=test.js.map