/*
    * [type annotations] [type signature] [type any] with multidimensional arrays:
*/

let array1: string[] = ["A", "B", "c"];
let array2: number[] = [1, 2, 3, 4, 5];
let array3: (string | number)[] = [1, 2, "A", "B"];                                 // brackets is a must

let array4: (string|number|string[]|boolean[])[] = [1, "A", ["C"], [true, false]];  // brackets is a must

let array5: any[] = [1, "A", ["C", "D"], [true, false]];

let array6: (string|number|string[]|number[]|(string|number)[])[] = [1, 2, "A", ["A", "B"], [1, 2], [1, "A"] ];

console.log(array6);