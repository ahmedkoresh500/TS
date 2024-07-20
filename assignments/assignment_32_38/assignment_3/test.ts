/*
    * Assignment [3]: => Done
*/


// Write Class Code Here
/*
class Game <T> {
    constructor(public title: T, public price: number){

    };
    getDiscount(value: string | number): void {         // way [1]
        console.log(`the discount is ${value}`);
    };
};
*/

/////////////////////////////////////////////////////////////////
// revision
class Game <T> {
    constructor(public title: T, public price: number){

    };
    getDiscount(value: T): void{                        // way [2]
        console.log(`the discount is ${value}`);
    };
};


///////////////////////////////////////////////////////////////////////////
// Do Not Edit Here
let gameOne = new Game <string> ("Ys", 100);
let gameTwo = new Game <number> (2064, 100); // There's A Game Called "2064"

console.log(gameOne.title); // "Ys"
console.log(gameOne.price); // 100
gameOne.getDiscount("50"); // "The Discount Is 50"

console.log(gameTwo.title); // 2064
console.log(gameTwo.price); // 100
gameTwo.getDiscount(80); // "The Discount Is 80"