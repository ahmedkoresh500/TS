/*
    * [type annotations] with object:

    * [readonly] and [?][optional operator] attributes
*/

let object1 = {
    id: 100,
    userName: "Ahmed",
    hire: true
};

let object2: {
    readonly id: number,        // readonly
    userName: string,
    hire?: boolean,             // optional
    skills:{
        one: string,
        two: string
    },
} = {
    id: 25,
    userName: "Ahmed",
    skills: {
        one: "HTML",
        two: "CSS"
    },
};

// object2.id = 26;                 // syntax error     =>> [readonly mode]
object2.userName = "Elzero";

console.log(object2.id);
console.log(object2.userName);
console.log(object2.hire);          // result = undefined
console.log(object2.skills.one);
