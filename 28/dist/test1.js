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
class User1 {
    constructor(userName, salary) {
        this.u = userName;
        this.s = salary; // [this]  =>> refers to [object] i create from  =>> [this function][constructor function][User class]
        this.msg = function () {
            return `Hello [${this.u}] you salary is [${this.s}] = [${salary}]`;
        };
    }
    ;
    sayMsg() {
        return `Hello [${this.u}] you salary is [${this.s}]`; // [this] refers to object i create from [this function] [constructor function] [user class]
    }
    ; // can't use User  =>> satic not found
}
;
let userOne = new User1("Ahmed", 7000);
// console.log(userOne.u);              // private property     =>> can't be accessed
// console.log(userOne.s);              // protected property   =>> can't be accessed
console.log(userOne.msg()); // [msg()]          =>> property
console.log(userOne.sayMsg()); // [sayMsg()]       =>> method
console.log(`${"#".repeat(20)}`);
console.log(userOne.msg); // [msg]                  =>> property
console.log(userOne.sayMsg); // [sayMsg]            =>> method
//# sourceMappingURL=test1.js.map