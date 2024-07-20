"use strict";
/*
    * Assignment [2]: =>> Done
*/
;
// Do Not Edit The Code Below
let client = {
    id: 100,
    username: "Elzero",
    active: true,
    discount: 10.5,
    getPrice(price) {
        return price - this.discount;
    },
};
console.log(`Client Id Is ${client.id}`);
console.log(`Client Name Is ${client.username}`);
console.log(`Client Has Dicount ${client.discount}`);
console.log(`Client Product After Discount Is ${client.getPrice(200)}`);
//# sourceMappingURL=test.js.map