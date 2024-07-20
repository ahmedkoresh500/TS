/*
    * Assignment [6]: =>> Done
*/

class Show {
    constructor (private _title: string) {}
    public get title(): string{
        return this._title;         // [this] refers to parent  =>> Show class
    };                              // can't use [Show]  =>> [static _title] not found
    public set title(value: string){
        this._title = value;
    };
};

let tester = new Show("Elzero");

console.log(tester.title);      // Property 'title' does not exist on type 'Show'
tester.title = "Osama";         // Property 'title' does not exist on type 'Show'
console.log(tester.title);      // Property 'title' does not exist on type 'Show'