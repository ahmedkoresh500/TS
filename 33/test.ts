/*
    * polymorphism and method override:

    [1] polymorphism:  تعدد الاشكال - تعدد الاوجه
            =>> same methods  =>> same name =>> different implementation

    [2] method override:
        =>> call method in [child class]  =>> same name in [parent class] =>> with modifications

    * type checking:
        =>> "noImplicitOverride": true;
*/

class Player {
    constructor(public name: string){               // [public] must write
        // empty constructor
    };
                            // [abstract class] =>> [return type] is a must
    // attack(){            // here  =>> [return type] optional
    attack(): void {
        console.log(`attack now from [player]`);
        // return `attacking now from player`;
    };
};

class Amazon extends Player {
    constructor(name: string, public spears: number){   // [name]  =>> [public] mustn't write
        super(name);                                    // [spear] =>> [public] must write
    };                                                  // compare to lesson [32]

    // override attack(){           // here  =>> [return type] optional
    override attack(): void {       // ["noImplicitOverride": true]     =>> [polymorphism]
        console.log(`attack now with [spear] from [amazon]`);
        this.spears -= 1;           // [this] refers to [object] i create from [this function] [constructor function] [Amazon class]
    };                              // can't use Amazon  =>> static not found
};

class Barbarian extends Player {
    constructor(name: string, public axeDurability: number){  // [name] =>> [public] mustn't write
        super(name);                                          // [axeDurability] =>> [public] must write
    };

    // override attack(){       // here [return type]  =>> optional
    override attack(): void {   // ["noImplicitOverride": true]         =>> [polymorphism]
        super.attack();         // call method  =>> from parent class   =>> [polymorphism]
        console.log(`attack now with [axe] from [barbaian]`);
        this.axeDurability -=1;                 // [this] refers to [object] i create from [this function] [constructor function] [Barbarian class]
    };                                          // can't use Barbarian  =>> static not found
};

let player1 = new Player("Ahmed");
let amazon1 = new Amazon("zaki", 5);
let barbarian1 = new Barbarian("Elzero", 100);

player1.attack();
console.log(`${"#".repeat(20)}`);

amazon1.attack();
console.log(`${"#".repeat(20)}`);

barbarian1.attack();
