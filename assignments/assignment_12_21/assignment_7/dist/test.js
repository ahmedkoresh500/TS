"use strict";
/*
    * Assignment [7]: =>> Done
*/
// Create Enums + Function Here
function subtract(val) {
    return Game.Hard - val;
}
;
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
    Game[Game["Insane"] = subtract(10)] = "Insane";
})(Game || (Game = {}));
;
// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20
//# sourceMappingURL=test.js.map