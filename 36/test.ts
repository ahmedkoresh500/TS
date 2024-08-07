/*
    * Generics: [classes]

    [1] union operator:
        [|] or
    [2] intersection operator:
        [&] and
*/

class User <S = number> {                       // [number] = default value  =>> if there is no value
    constructor(public value: S){               // [value]  =>> [public] must write
        // empty constructor
    };

    // show(msg: S) {                           // 2 are the same
    show(msg: S): void {                        // [abstract function] must write [return type]  =>> ["noImplicitAny": true]
        console.log(`${msg} - ${this.value}`);  // [this] refers to [object] i create from [this function][constructor function][User class]
    };                                          // can't use [User]  =>> static not found
};


let user1 = new User("Elzero");     // [first value = string]  then  [S type = string]
console.log(user1.value);
user1.show("msg from user 1");      // [first value = string]  then  [S type = string]
// user1.show(5);                   // result = syntax error    =>> not string
console.log("#".repeat(30));


let user2 = new User <string> ("Ahmed");        // [T] optional  =>> three are the same
console.log(user2.value);
user2.show("Message");
console.log("#".repeat(30));


let user3 = new User <number> (25);            // [T] optional  =>> three are the same
console.log(user3.value);
user3.show(26);
console.log("#".repeat(30));


let user4 = new User <string | number> (27);   // [T] optional  =>> three are the same
console.log(user4.value);
user4.show("messgae");
