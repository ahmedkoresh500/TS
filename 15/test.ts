/*
    * dataType: [tuple]:
            [1] the same like array
            [2] specify:
                [a] how many elements it contains
                [b] dataTypes at specific positions
*/

let article1: readonly [number, string, boolean] = [25, "title 1", true];   // target = 3 elements
                                                                            // source = 3 elements

/*
let article2: [number, string, boolean] = [26, "title 1", true, 101];   // target = 3 elements
                                                                        // source = 4 elements
                                                                        // syntax error
console.log(article2);
*/

article1 = [12, "title 2", false];      // [readonly]   =>> can reassign value
article1 = [13, "title 3", true];       // [readonly]   =>> can reassign value
// article1.push(100);                  // [readonly]   =>> can't add new value
console.log(article1);

const [id, title, published] = article1;    // destructuring array

console.log(id);
console.log(title);
console.log(published);
