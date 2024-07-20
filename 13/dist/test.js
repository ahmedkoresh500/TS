"use strict";
/*
    * dataType: [alias type] [type alias] [advanced]:
*/
function getActions(btns) {
    console.log(`button up action = [${btns.up}]`);
    console.log(`button right action = [${btns.right}]`);
    console.log(`button down action = [${btns.down}]`);
    console.log(`button left action = [${btns.left}]`);
}
;
// [,] only is a must
getActions({ up: "go up", right: "go right", down: "go down", left: "go left", x: true });
//# sourceMappingURL=test.js.map