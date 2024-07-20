/*
    * Assignment [3]: =>> Done
*/

// Do Not Edit The Code Below
interface Man {
    title: string;
    weight: number;
    age: number;
};

interface Bird {
canFly: boolean;
};


// create the interface here
interface Superman extends Man, Bird {
    bodyType: string;
    origin: string;
};

let creature: Superman = {
    title: "Superman",
    weight: 100,
    age: 500,
    canFly: true,
    bodyType: "Iron",
    origin: "Krypton"
};

console.log(creature.title);
console.log(creature.weight);
console.log(creature.age);
console.log(creature.canFly);
console.log(creature.bodyType);
console.log(creature.origin);