"use strict";
/*
    * Enum = Enumeration: part [1]:
        [1] logical grouping set of [named constants]
        [2] organize code
        [3] [by default]: [number]
        
        [4] Enum: [string]
        [5] Enum: [number]
        [6] Enum: [heterogeneous]: [string + number]

    * EX [1]: speed test game = speed typing test game
*/
/*
const kids = 15;
const easy = 9;
const med = 6;
const hard = 3;
*/
/*
enum level {        // object
    kids,           // no value     =>> value = 0       value = 0           =>> [,] only
    easy,           // no value     =>> value = 1       specified = 5       =>> [,] only
    mid,            // no value     =>> value = 2       value = 6           =>> [,] only
    hard            // no value     =>> value = 3       value = 7           =>> [,] only
};
*/
/*
enum level {        // object
    kids,           // no value     =>> value = 0       value = 0           =>> [,] only
    easy = 5,       // no value     =>> value = 1       specified = 5       =>> [,] only
    mid,            // no value     =>> value = 2       value = 6           =>> [,] only
    hard            // no value     =>> value = 3       value = 7           =>> [,] only
};
*/
var level;
(function (level) {
    level[level["kids"] = 15] = "kids";
    level[level["easy"] = 9] = "easy";
    level[level["mid"] = 6] = "mid";
    level[level["hard"] = 3] = "hard"; // no value     =>> value = 3       value = 8           =>> [,] only
})(level || (level = {}));
;
let lvl = "kids";
if (lvl == "kids") {
    console.log(`level is [${lvl}], and number of seconds is: [${level.kids}]`);
}
else if (lvl == "easy") {
    console.log(`level is [${lvl}], and number of seconds is: [${level.easy}]`);
}
else if (lvl == "mid") {
    console.log(`level is [${lvl}], and number of seconds is: [${level.mid}]`);
}
else {
    console.log(`level is [${lvl}], and number of seconds is: [${level.hard}]`);
}
;
console.log(typeof level); // result = object
console.log("\n");
//# sourceMappingURL=test.js.map