/*
    * Assignment [3]: =>> Done
*/

function printInfo( value1: string | number, value2: (string | number) ){
    return `value one is ${value1}, value two is ${value2}`;
};

console.log( printInfo(10, 20) );               // Value One Is 10, Value Two Is 20
console.log( printInfo("10", "20") );           // Value One Is "10", Value Two Is "20"
console.log( printInfo( true, [1, 2, 3]) );     // We Don't Need This To Work 