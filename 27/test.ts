/*
    * class: with [type annotations]:
*/

class User {
    u: string;                                          // class with [type annotations]
    s: number;                                          // class with [type annotations]
    msg: () => string;                                      // the only way
    // msg(): string;                                       // result = syntax error
    constructor(userName: string, salary: number){      // class with [type annotations]
        this.u = userName;
        this.s = salary;        // this => refers to [object] i create from => [this function][constructor function][User class]
        this.msg = function(){
            console.log(this)   // this => refers to [object] i create from => [this function][constructor function][User class]
            return `Hello [${this.u}] your salary is [${this.s}] = [${salary}]`;
        };
    };
    sayMsg(){
        console.log(this);
        return `Hello [${this.u}] your salary is [${this.s}]`;  // this => refers to [object] i create from => [this function][constructor function][User class]
    };                                                          // can't use [User] =>> static not found
};

let userOne = new User("Ahmed", 7000);
console.log(userOne.u);
console.log(userOne.s);
console.log(`${"#".repeat(20)}`);
console.log(userOne.msg());         // [msg()]      =>> property
console.log(userOne.sayMsg());      // [sayMsg()]   =>> method
console.log(`${"#".repeat(20)}`);
console.log(userOne.msg);           // [msg]        =>> property
console.log(userOne.sayMsg);        // [sayMsg]     =>> method

