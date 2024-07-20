/*
    * Assignment [5]: =>> Done
*/

class Shorten {
    constructor (public id: number, public username: string, public title: string) {};
};              // without public  =>> no unused parameters  =>> [warning message] [syntax error]

let tester = new Shorten(100, "Elzero", "Developer");

console.log(tester.id);
console.log(tester.username);