"use strict";
/*
    * Generics: classes:

    * union operator: [|]
*/
class User {
    constructor(value) {
        this.value = value;
    }
    ;
    show(msg) {
        console.log(`${msg} - ${this.value}`); // [this] refers to parent  =>> User class
    }
    ; // can't use [User]  =>> static not found
}
;
let user1 = new User("Elzero");
console.log(user1.value);
user1.show("msg from user 1");
console.log("#".repeat(30));
let user2 = new User("Ahmed"); // [T] optional  =>> two are the same
console.log(user2.value);
user2.show("Message");
console.log("#".repeat(30));
let user3 = new User(100); // [T] optional  =>> two are the same
console.log(user3.value);
user3.show(100);
console.log("#".repeat(30));
let user4 = new User(100); // [T] optional  =>> two are the same
console.log(user4.value);
user4.show("messgae");
//# sourceMappingURL=test.js.map