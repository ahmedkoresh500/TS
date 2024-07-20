/*
    * Assignment [2]: => Done

    * what a hard an assignment

    * [<T = void, S = void, V = void>]      =>> optional generic type

    * search on google:
        [optional generic type with function optional parameters]
*/


// Write Function Code Here
// function showTypes <T = void, S = void, V = void> (value1?: T | string, value2?: S | string, value3?: V | string): string {
function showTypes <T = void, S = void, V = void> (value1?: T | string, value2?: S | string, value3?: V | string): string {
    value1 !== undefined ? value1 : value1 = "nothing";
    value2 !== undefined ? value2 : value2 = "nothing";
    value3 !== undefined ? value3 : value3 = "nothing";
    /*
    value1 === undefined ? value1 = "nothing" : value1;
    value2 === undefined ? value2 = "nothing" : value2;
    value3 === undefined ? value3 = "nothing" : value3;
    */
    return `${value1 } - ${value2} - ${value3}`;
};

// Do Not Edit Here
console.log(showTypes ());                                              // Nothing - Nothing - Nothing
console.log(showTypes <string> ("String"));                             // String - Nothing - Nothing
console.log(showTypes <string, number> ("String", 100));                // String - 100 - Nothing
console.log(showTypes <string, number, boolean> ("String", 100, true)); // String - 100 - true