"use strict";
/*
    * Assignment [5]: =>>
*/
class Shorten {
    constructor(id, username, title) {
        this.id = id;
        this.username = username;
        this.title = title;
    }
    ;
}
; // without public  =>> no unused parameters  =>> [warning message] [syntax error]
let tester = new Shorten(100, "Elzero", "Developer");
console.log(tester.id);
console.log(tester.username);
//# sourceMappingURL=test.js.map