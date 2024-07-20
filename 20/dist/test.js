"use strict";
/*
    * dataType:
        [1] union type:
            [|] = [or]
        [2] intersection type:
            [&] = [and]
*/
let all = 100; // [1] [union type]
function getActions(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
;
getActions({ one: "type string", two: 100, three: true, five: true });
// getActions({one: "type string", two: 100, three: true, four: 50, five: true});   // four = syntax error
//# sourceMappingURL=test.js.map