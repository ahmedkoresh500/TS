"use strict";
/*
    *  abstract class:
                =>> all classes inherit from it
                =>> can't create instance from it

    * [abstract class] = [base class]
    * derived classes
*/
// [class Food]
class Food {
    constructor(title) {
        this.title = title;
        // empty constructor
    }
    ;
}
;
// [class Pizza]
class Pizza extends Food {
    constructor(title, price) {
        super(title); // [price] =>> [public] must write
        this.price = price;
    }
    ;
    /*
    getCookingTime() {                                  // two are the same
        console.log(`cooking time for pizza 1 hour`);
    };
    */
    getCookingTime() {
        console.log(`cooking time for pizza = 1 hour`);
    }
    ;
}
;
// [class Burger]
class Burger extends Food {
    constructor(title, price) {
        super(title); // [price] =>> [public] must write
        this.price = price;
    }
    ;
    /*
    getCookingTime() {
        console.log(`cooking time for burger is half hour`);
    };
    */
    getCookingTime() {
        console.log(`cooking time for burger = half hour`);
    }
    ;
}
;
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
//# sourceMappingURL=test.js.map