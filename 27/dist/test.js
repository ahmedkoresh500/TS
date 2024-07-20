"use strict";
/*
    * class: with [type annotations]:
*/
class User {
    // msg(): string;                                       // result = syntax error
    constructor(userName, salary) {
        this.u = userName;
        this.s = salary; // this => refers to [object] i create from => [this function][constructor function][User class]
        this.msg = function () {
            console.log(this); // this => refers to [object] i create from => [this function][constructor function][User class]
            return `Hello [${this.u}] your salary is [${this.s}] = [${salary}]`;
        };
    }
    ;
    sayMsg() {
        console.log(this);
        return `Hello [${this.u}] your salary is [${this.s}]`; // this => refers to [object] i create from => [this function][constructor function][User class]
    }
    ; // can't use [User] =>> static not found
}
;
let userOne = new User("Ahmed", 7000);
console.log(userOne.u);
console.log(userOne.s);
console.log(`${"#".repeat(20)}`);
console.log(userOne.msg()); // [msg()]      =>> property
console.log(userOne.sayMsg()); // [sayMsg()]   =>> method
console.log(`${"#".repeat(20)}`);
console.log(userOne.msg); // [msg]        =>> property
console.log(userOne.sayMsg); // [sayMsg]     =>> method
//# sourceMappingURL=test.js.map