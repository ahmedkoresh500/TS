"use strict";
/*
    * class: [access modifiers] and [parameter properties]:
        [1] public: [members]       =>> accessed anywhere
        [2] private: [members]      =>> accessed only [inside the class]
        [3] protected: [members]    =>> accessed [inside the class] [and derived classes]

    * TS    =>> layer on top of JS
            =>> [type annotations], [access modifiers] removed when compiling

    * JS =>> not support OOP completely

    * [arguments] [parameters]  =>> function
    * [data members]            =>> OOP class
    * [properties]              =>> object
    * [variables]               =>> in general
*/
class User2 {
    constructor(userName, salary, address) {
        this.userName = userName;
        this.salary = salary;
        this.address = address;
        // this.userName = userName;        // with no importance
        // this.salary = salary;            // with no importance
        this.msg = function () {
            return `Hello [${this.userName}] you salary is [${this.salary}] = [${salary}]`;
        };
    }
    ;
    sayMsg() {
        return `Hello [${this.userName}] you salary is [${this.salary}]`; // [this] refers to [object] i create from [this function] [constructor function] [User class]
    }
    ; // can't use [User] =>> [static not found]
}
;
let userTwo = new User2("Ahmed", 7000, "KSA");
console.log(userTwo.address);
console.log(userTwo.msg()); // [msg()]      =>> property
console.log(userTwo.sayMsg()); // [sayMsg()]   =>> method
console.log(`${"#".repeat(20)}`);
console.log(userTwo.msg); // [msg]        =>> property
console.log(userTwo.sayMsg); // [sayMsg]     =>> method
//# sourceMappingURL=test2.js.map