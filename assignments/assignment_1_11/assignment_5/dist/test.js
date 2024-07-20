"use strict";
/*
    * Assignment [5]: =>> Done

    [1] [userName = type any]  =>> [compiler = error]  =>> remove this error
            =>> "noImplicitAny": false

    [2] [rank] = unused local variable          =>> need warning message
            =>> "noUnusedLocals": true

    [3] [age] = function parameter not used     =>> need warning message
            =>> "noUnusedParameters": true

    [4] line [console.log()] after [return]     =>> need warning message
            =>> "allowUnreachableCode": false
*/
function reportErrors(username, age) {
    let rank = "Professor";
    return `Username: ${username}`;
    console.log("We Will Not Reach Here");
}
;
console.log(reportErrors("Elzero", 40));
//# sourceMappingURL=test.js.map