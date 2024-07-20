/*
    * Assignment [5]: =>> Done
*/

type custom = string;

function isHeOld(age: string | number): custom | number {
    if(typeof age !== "string"){
        if(age > 40){
            return "Yes";
        }else{
            return "No";
        };
    }else{
        return "Error";
    };
};

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"