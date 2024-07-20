"use strict";
/*
    * interface: [methods and properties]:
*/
;
let user1 = {
    id: 25,
    userName: "Ahmed",
    country: "Egypt",
    sayHello1() {
        return `Hello [1] master ${this.userName}`; // [this] refers to object 
    },
    sayHello2: () => {
        return `Hello [2] master ${user1.userName}`; // [user1.userName] = [this.userName]
    }, // [this.userName] = syntax error 
    getDouble1: function (n) {
        return n * n;
    },
    getDouble2: function (num) {
        return num * num;
    },
};
console.log(user1.id);
console.log(user1.userName);
console.log(user1.country);
console.log(user1.sayHello1());
console.log(user1.sayHello2());
console.log(user1.getDouble1(5));
console.log(user1.getDouble2(7));
//# sourceMappingURL=test.js.map