/*
    * [type annotations] [type signature] [type any] with arrays:
*/

// let all;                                     // 5 are the same
// let all: string | number | boolean;          // 5 are the same
// let all: (string | number | boolean);        // 5 are the same
// let all: string | number | boolean = 50;     // 5 are the same      =>> value at the end
let all: (string | number | boolean) = 50;      // 5 are the same      =>> value at the end
all = "A";
all = 100;
all = true;


let friends1 = ["Osama", "Ahmed", "Sayed", 10];
for(let i=0 ; i<friends1.length ; i++){
    console.log( friends1[i].repeat(3) );       // result = syntax error  =>> [repeat] with [string] only
};

let friends2: string[] = ["Osama", "Ahmed", "Sayed", 10];
for(let i=0 ; i<friends2.length ; i++){
    console.log( friends2[i].repeat(3) );
};
