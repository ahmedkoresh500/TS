"use strict";
/*
    * [type annotations] with object:

    * [readonly] and optional operator
*/
let object1 = {
    id: 100,
    userName: "Ahmed",
    hire: true
};
let object2 = {
    id: 100,
    userName: "Ahmed",
    skills: {
        one: "HTML",
        two: "CSS"
    },
};
// object2.id = 101;                // syntax error =>> can't be modified  =>> [mode = readonly]
object2.userName = "Elzero";
console.log(object2.id);
console.log(object2.userName);
console.log(object2.hire); // result = undefined
console.log(object2.skills.one);
//# sourceMappingURL=test.js.map