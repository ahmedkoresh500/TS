"use strict";
/*
    * dataType: [assertion type]:
    * TS: doesn't check [assertion type]:
*/
/*
// EX [1]:
let myImg = document.getElementById("my-id") as HTMLImageElement;       // [assertion type]
console.log(myImg.src);         // [HTMLImageElement] interface extends [HTMLElement]
// console.log(myImg.value);    // syntax error =>> [value] is not a property

// EX [2]:
let myInput1 = document.getElementById("my-id") as HTMLInputElement;    // [assertion type]
console.log(myInput1.src);       // [HTMLInputElement] interface extends [HTMLElement]
console.log(myInput1.value);
// console.log(myInput.href);   // syntax error =>> [href] is not a property


// EX [3]:
let myInput2 =  <HTMLInputElement> document.getElementById("my-id");    // [assertion type]
console.log(myInput2.src);       // [HTMLInputElement] interface extends [HTMLElement]
console.log(myInput2.value);
// console.log(myInput.href);   // syntax error =>> [href] is not a property
*/
/*
    [1] hash above code
    [2] in terminal
        [1] tsc                             =>> compile [TS file] to [JS file]

        [2] [node ./dist/test.js]           =>> to run code     =>> 2 are the same
        [3] [node dist/test.js]             =>> to run code     =>> 2 are the same

        [4] [tsc && node dist/test.js]      =>> compile [TS files] and run      =>> 2 are the same
        [5] [tsc && node ./dist/test.js]    =>> compile [TS files] and run      =>> 2 are the same

    * next example: TS detect no error
*/
// EX [4]:
let data = "1000"; // without parentheses = syntax error
console.log(data.repeat(3)); // [(data as string). ] =>> show all properties related to string
// [data.repeat(3) = (data as string).repeat(3)]
//# sourceMappingURL=test.js.map