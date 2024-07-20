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

function getHardSeconds(): number {
    return 2;
};

enum kids {
    five = 25,          // coma only
    seven = 20,         // coma only
    ten = 15            // coma only
};

enum level {
    insane,         // no value     =>> value = 0
    kid = kids.ten, //              =>> value = 15      =>> if [kids] = syntax error
    easy = 9,       //              =>> value = 9
    mid = 6,        //              =>> value = 6       =>> [mid=hard] = syntax error =>> not initialized
    hard = mid - 1, //              =>> value = 5
    seconds = getHardSeconds()
    // insane       // = syntax error =>> initialized above
};

let lvl: string = "Easy";
if(lvl === "Easy")
    console.log(`level is [${lvl}], and number of seconds is: [${level.kid}]`);    // result = 15

lvl = "mid"
if(lvl === "mid")
    console.log(`level is [${lvl}], and number of seconds is: [${level.hard}]`);   // result = 5

lvl = "hard";
if(lvl === "hard")
    console.log(`level is [${lvl}], and number of seconds is: [${level.seconds}]`);// result = 2

console.log("\n");
