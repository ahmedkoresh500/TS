"use strict";
/*
    * interface declaration:
        [1] like [type]
        [2] describes object shape  =>> the syntax to follow

    * Use:
        [1] with object
        [2] with function

    * [readonly] and [?][optional operator]

    * interface in TS
    * no interface in JS    =>> workaround
*/
;
// [1] with [object]
let user1 = {
    id: 25,
    userName: "Ahmed",
    country: "Egypt" // [readonly]  =>> assigned first time only
};
// user1.country = "KSA";       // syntax error     =>> [readonly]
console.log(user1);
// [2] with [function]
function getData(data) {
    console.log(`ID is: [${data.id}]`);
    console.log(`user name is: [${data.userName}]`);
    console.log(`country is: [${data.country}]`);
}
;
// getData({userName: "Ahmed", country: "KSA"});            // syntax error  =>> [id] is missing
getData({ id: 25, country: "KSA" }); // userName =>> [result = undefined]
getData({ id: 26, userName: "Zaki", country: "Egypt" });
//# sourceMappingURL=test.js.map