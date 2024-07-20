/*
    * Generics: classes:

    [1] union operator:
        [|] or
    [2] intersection operator:
        [&] and
*/

class User <S = number> {                       // [number] = default value  =>> if there is no value
    constructor(public value: S){};
    show(msg: S): void {                        // [abstract function] must decide return type  =>> "noImplicitAny": true
        console.log(`${msg} - ${this.value}`);  // [this] refers to parent  =>> User class
    };                                          // can't use [User]  =>> static not found
};



let user1 = new User("Elzero");
console.log(user1.value);
user1.show("msg from user 1");
// user1.show(5);                   // syntax error  =>> [5] not assignable to [T] type
console.log("#".repeat(30));


let user2 = new User <string> ("Ahmed");        // [T] optional  =>> three are the same
console.log(user2.value);
user2.show("Message");
console.log("#".repeat(30));


let user3 = new User <number> (100);            // [T] optional  =>> three are the same
console.log(user3.value);
user3.show(100);
console.log("#".repeat(30));


let user4 = new User <string | number> (100);   // [T] optional  =>> three are the same
console.log(user4.value);
user4.show("messgae");