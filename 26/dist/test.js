"use strict";
/*
    * [interface]: final discussion:

        [1] [interface] vs [alias type]
            =>> [interface]     =>> can reopen
            =>> [alias type]    =>> can't reopen
        [2] take a look on [HTMLElement interface]
*/
// let el = document.getElementById("id") as HTMLElement;  // dataType [assertion type]
let userSettings = {
    theme: true, // [readonly]  =>> assigned first time only
    font: "Open Sans",
    sidebar: false,
    external: true
};
console.log(userSettings.external);
//# sourceMappingURL=test.js.map