/*
    * Assignment [7]: =>> Done
*/

function showMsg(user?: string, age?: any, country?: string) {
    return `${user}${age}${country}`;
};

console.log(showMsg());
console.log(showMsg("Elzero"));
console.log(showMsg("Elzero", 40));
console.log(showMsg("Elzero", "40", "Egypt"));