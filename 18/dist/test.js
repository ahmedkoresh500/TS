"use strict";
/*
    * Enum = Enumeration: part [2]:
        [2] logical grouping set of [named constants]
        [3] organize code
        [4] [by default]: [number]

        [6] Enum: [string]
        [5] Enum: [number]
        [7] Enum: [heterogeneous]: [string + number]

    * Enum: may include:
        [1] calculations
        [2] functions
        [3] [same Enum] or [other Enum] value

    * EX [1]: speed test game = speed typing test game
*/
function getHardSeconds() {
    return 2;
}
;
var kids;
(function (kids) {
    kids[kids["five"] = 25] = "five";
    kids[kids["seven"] = 20] = "seven";
    kids[kids["ten"] = 15] = "ten"; // coma only
})(kids || (kids = {}));
;
var level;
(function (level) {
    level[level["insane"] = 0] = "insane";
    level[level["kid"] = 15] = "kid";
    level[level["easy"] = 9] = "easy";
    level[level["mid"] = 6] = "mid";
    level[level["hard"] = 5] = "hard";
    level[level["seconds"] = getHardSeconds()] = "seconds";
    // insane       // = syntax error =>> initialized above
})(level || (level = {}));
;
let lvl = "Easy";
if (lvl === "Easy")
    console.log(`level is [${lvl}], and number of seconds is: [${level.kid}]`); // result = 15
lvl = "mid";
if (lvl === "mid")
    console.log(`level is [${lvl}], and number of seconds is: [${level.hard}]`); // result = 5
lvl = "hard";
if (lvl === "hard")
    console.log(`level is [${lvl}], and number of seconds is: [${level.seconds}]`); // result = 2
console.log("\n");
//# sourceMappingURL=test.js.map