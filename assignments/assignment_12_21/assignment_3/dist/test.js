"use strict";
/*
    * Assignment [3]: =>> Done

    * [interface] vs [alias type]:
        =>> [alias type] can't be re-opened
*/
// Do Not Edit Here
function showInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
}
;
console.log(showInfo({ theName: "Elzero", theAge: 40 }));
function showFullInfo(data) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
}
;
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
//# sourceMappingURL=test.js.map