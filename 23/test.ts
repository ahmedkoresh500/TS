/*
    * interface: [methods and properties]:
*/

interface User {
    id: number,                     // coma or semicolon
    userName: string;               // coma or semicolon
    country: string;                // coma or semicolon
    sayHello1(): string                     // return string
    sayHello2: () => string                 // return string    [=>] = [big fat arrow]
    getDouble1(num: number): number,        // return number
    getDouble2: (num: number) => number;    // return number
};



let user1: User = {
    id: 25,
    userName: "Ahmed",
    country: "Egypt",
    sayHello1() {                                   // [1] direct function
        return `Hello [1] master ${this.userName}`; // [this] refers to object 
    },

    sayHello2: () => {                              // [2] arrow function  =>> access global [this]
        return `Hello [2] master ${user1.userName}`;// [user1.userName] = [this.userName]
    },                                              // [this.userName] = syntax error 

    getDouble1: function(n) {                       // [3] anonymous function
        return n * n;
    },
    getDouble2: function (num) {                    // [3] anonymous function
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
