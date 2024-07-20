/*
    * access modifiers:
*/

class User {
    #u;
    constructor(userName, salary){
        this.#u = userName;
        this.s = salary;
        this.msg = function(){
            return `Hello [${this.#u}] your salary is [${this.s}]`;     // [this.#u]  =>> the only way
        };
    };
};

let userOne = new User("Ahmed", 7000);
// console.log(userOne.#u);                 // private property  =>> can't be accessed   [ES6]
console.log( userOne.msg() );