"use strict";
/*
    * Generics and interfaces:
*/
;
;
class Collection {
    constructor() {
        this.data = []; // inside constructor when compiling
    }
    add(item) {
        this.data.push(item); // [this] refers to parent  =>> [Collection] class
    }
    ; // can't use [Collection]  static not found
}
;
let collection1 = new Collection();
collection1.add({ itemType: "Book1", title: "Atomic Habits1", isbn: 150510 });
collection1.add({ itemType: "Book2", title: "Atomic Habits2", isbn: 650650 });
console.log(collection1);
console.log(collection1.data);
let collecetion2 = new Collection();
collecetion2.add({ itemType: "Game1", title: "uncharted", style: "Action1", price: 150 });
collecetion2.add({ itemType: "Game2", title: "charted", style: "Action2", price: 300 });
console.log(collecetion2);
console.log(collecetion2.data);
/////////////////////////////////////////////////////////////////////
// revision
//# sourceMappingURL=test.js.map