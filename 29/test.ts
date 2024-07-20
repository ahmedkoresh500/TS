/*
    * class: [set], [get] accessors:  =>> to access [private properties]

    * [class fields] are public by default

    * [_userName]  =>> simulation to [private property]
*/

class User {
    msg: () => string;                                      // the only way

    constructor(private userName: string, public salary: number, public readonly address: string){
        this.msg = function(){      // [this] refers to [object] i create from [this function] [constructor function] [User class]
            return `your name is [${this.userName}], and your salary is [${this.salary}] = [${salary}]`;
        };
    };

    // sayMsg(): string {               // two are the same
    sayMsg(){                           // two are the same
        return `your name is [${this.userName}], and your salary is [${this.salary}]`;
    };                                  // [this] refers to [object] i create from [this function] [constructor function] [User class]

    // public get username(): string {
    get nameOfUser(): string {        // [1] [get accessor]
        console.log(this);          // [this] refers to [object] i create from [this function] [constructor function] [User class]
        // return User.userName;    // can't use [user]  =>> static not found
        return this.userName;
    };

    // public set nameOfUser(value: string) {
    set nameOfUser(value: string) {     // [2] [set accessor]  =>> don't have [type annotations]
        this.userName = value;          // [this] refers to [object] i create from [this function] [constructor function] [User class]
    };
};

let userOne = new User("Ahmed", 7000, "KSA");

// console.log(userOne.userName);       // private property  =>> can't be accessed
console.log(userOne.nameOfUser);

userOne.nameOfUser = "Osama";           // [2] [set accessor]

console.log(userOne.nameOfUser);        // no parameter     =>> [1] [get accessor]
console.log(userOne.salary);

console.log( userOne.msg() );       // [msg()]              =>> property
console.log( userOne.sayMsg() );    // [sayMsg()]           =>> method
console.log(`${"#".repeat(20)}`);

console.log(userOne.msg);           // [msg()]              =>> property
console.log(userOne.sayMsg);        // [sayMsg()]           =>> method
