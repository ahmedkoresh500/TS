/*
    [1] [static] type language: [Rust, c, c++]:
        * [static] type variables       =>> can't change    =>> [string, number]
        * check type                    =>> at compilation  =>> not running the code
        * detect errors                 =>> at compilation  =>> not running th code
        * so, best perfomance

    [2] [dynamic] type language: [PHP, python, JS]:
        * [dynamic] type variables      =>> can change     =>> [string, number]
        * check type                    =>> at running the code
        * detect errors                 =>> at running the code
*/

/*
let num1 = 10;          // type annotations = [number]
num1 = "Elzero";        // = syntax error
console.log( num1);
*/

let num2: any = 10;     // type annotations = [any]
num2 = "Ahmed";
console.log(num2);


let age = 40;           // type annotations = [number]
if(age > 30){
    console.log("Good");
}else{
    console.log(age + "Bad");           // [number + string] = no error
    // console.log( age.repeat(3) );    // = syntax error  =>> repeat with [string] only
};
