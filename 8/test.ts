/*
    * [type annotations] [type signature] [type any] with functions:

    * [type annotations] [type signature] [type any]  
        =>> destroy [typeScript] [static type checking] idea

    * in [tsconfig.json] file:
        * Type Checking:
            =>> "noImplicitAny": true,      =>> report error [function parameters without datatype]
            =>> "noImplicitReturns": true
            =>> "noUnusedLocals": true      =>> report error [unused local variables]
            =>> "noUnusedParameters": true  =>> report error [unused function parameters]

    * [in terminal]:
        =>> [tsc --init]                  =>> create [tsconfig.json] file
*/

let showMsg = true;

function showDetails(name: string, age: number, salary: number): string {   // function return [string]
    let test = 10;
    if(showMsg){
        return `Hello [${name}], your [age] is: ${age}, and your [salary] is: ${salary}`;
    };
    return `no data to show`;       // must be written  =>> [tsconfig.json] file ["noImplicitReturns": true]
};

console.log( showDetails("Osama", 40, 5000) );  // two arguments  =>> [typescript] syntax error
