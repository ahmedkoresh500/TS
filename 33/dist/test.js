"use strict";
/*
    * polymorphism and method override:

    [1] polymorphism:  تعدد الاشكال - تعدد الاوجه
            =>> classes with same methods  =>> but different implementation

    [2] method override:
        =>> child class allows execution of a method from parent class
        =>> class method in child class and parent class must be the same name

    * type checking:
        =>> "noImplicitOverride": true;
*/
class Player {
    constructor(name) {
        this.name = name;
    }
    ;
    attack() {
        console.log(`attacking now from player`);
    }
    ;
}
;
class Amazon extends Player {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    ;
    attack() {
        super.attack(); // inheriting methods
        console.log(`attacking with spear from amazon`);
        this.spears -= 1; // [this] refers to parent  =>> Amazon class
    }
    ; // can't use Amazon  =>> static not found
}
;
class Barbarian extends Player {
    constructor(name, axeDurability) {
        super(name); // [axeDurability]  =>> public mandatory
        this.axeDurability = axeDurability;
    }
    ;
    attack() {
        super.attack(); // inheriting methods
        console.log(`attacking with axe from barbaian`);
        this.axeDurability -= 1; // [this] refers to aprent  =>> Barbarian class
    }
    ; // can't use Barbarian  =>> static not found
}
;
let player1 = new Player("Ahmed");
let barbarian1 = new Barbarian("Elzero", 100);
console.log(barbarian1.name);
// player1.attack();
barbarian1.attack();
console.log(barbarian1.axeDurability);
//# sourceMappingURL=test.js.map