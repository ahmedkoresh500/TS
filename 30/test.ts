/*
    * class: static members:

    * not to use [name, length, call]  =>> built-in properties
*/

class User {
    // private static readonly created: number = 0;         // [static]  =>> related to class
    private static created: number = 0;                     // [static]  =>> related to class

    constructor(public userName: string){       // lesson [28]: [access modifiers] and [type annotations]
        User.created++;                         // [this] => refers to [object] i create from [this function][constructor function][User class]
        // this.created++;                      // [2] result = syntax error
    };

    
    static getCount(): void {                               // same idea like [get accessor]
        console.log( `${User.created} objects created` );   // [1] important note: no error
        console.log( `${this.created} objects created` );   // [this] =>> refers to parent = [User] class
    };
    

    public static get counted(): number {
        return User.created;                            // important note: no error
        return this.created;                            // [this] refers to parent  =>> [User class]
    };
    // public static set counted(value) {
    public static set counted(value: number) {          // [set accessor]  =>> doesn't have [type annotations]
        User.created = value;                           // important note: no error
        this.created = value;                           // [this] refers to parent  =>> [user class]
    };
};

let u1 = new User("Elzero");
let u2 = new User("Web");
let u3 = new User("School");

// console.log(User.created);       // private property  =>> can't be accessed
User.getCount();
console.log( User.getCount() );     // result = [result + undefined]


console.log(User.counted);

User.counted = 7;
console.log(User.counted);
