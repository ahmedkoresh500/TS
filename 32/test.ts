/*
    *  abstract class:
                =>> all classes inherit from it
                =>> can't create instance from it

    * [abstract class] = [base class]
    * derived classes
*/


// [class Food]
abstract class Food {                       // abstract class         
    constructor(public title: string){      // [public] must write
        // empty constructor
    };
    abstract getCookingTime(): void;        // must decide [return type]  =>> ["noImplicitAny": true]
};



// [class Pizza]
class Pizza extends Food {
    constructor(title: string, public price: number){   // [title] =>> [public] write or not  =>> specified in base class
        super(title);                                   // [price] =>> [public] must write
    };

    /*
    getCookingTime() {                                  // two are the same
        console.log(`cooking time for pizza 1 hour`);
    };
    */
    
    getCookingTime(): void {                            // two are the same
        console.log(`cooking time for pizza = 1 hour`);
    };
};



// [class Burger]
class Burger extends Food {
    constructor(title: string, public price: number, ){ // [title] =>> [public] write or not  =>> specified in base class
        super(title);                                   // [price] =>> [public] must write
    };

    /*
    getCookingTime() {
        console.log(`cooking time for burger is half hour`);
    };
    */
    
    getCookingTime(): void {
        console.log(`cooking time for burger = half hour`);
    };
};

let pizza1 = new Pizza("awesome pizza", 100);
console.log(pizza1.title);
console.log(pizza1.price);
pizza1.getCookingTime();




///////////////////////////////////////////////////////////////////////
// revision
/*
abstract class Food {
    constructor(public title: string){};        // [title] public mandatory
    abstract getCookingTime(): void;
};

class Pizza extends Food {
    constructor(title: string, public price: number){
        super(title);
    };
    getCookingTime(): void {
        console.log(`cooking time for pizza is 1 hour`);
    };
};

class Burger extends Food {
    constructor(title: string, public price: number){
        super(title);
    };
    getCookingTime(): void {
        console.log(`cooking time for burger is half hour`);
    };
};
*/