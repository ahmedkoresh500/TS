/*
    * [in terminal] or [Git bash] program
        [1] [node test.js]                                                         =>> to run code [in terminal]
        [2] [node ./test.js]                                                       =>> to run code [in terminal]
        [3] [node /c/xampp/htdocs/COURSES_TUTORIALS/courses/TS_course/5/index.ts]  =>> to run code [in terminal]

        [4] [node /5/test.js]               = syntax error

    * [./]  refers to current path
*/

function add(num1, num2){
    return num1 + num2;
};

console.log( add(10, 20) );             // result = 30
console.log( typeof add(10, 20) );      // result = number

console.log( add(10, "20") );           // result = 1020
console.log( typeof add(10, "20") );    // result = string
