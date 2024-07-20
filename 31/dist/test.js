"use strict";
/*
    * class: implements interface:

    * class fields are public by default

    * comparison:
    [1] class inheritance       =>> [public optional] speciifed in base class  =>> is it abstract class ??
    [2] implements interface    =>> [public mandatory]
*/
;
/*
                                        // object
let user1: Settings = {
    theme: true,
    font: "15",
    save1() {                           // [1] direct function
        console.log(`saved 1`);
    },
    save2: () => {                      // [2] arrow function
        console.log(`saved 2`);
    },
    save3: function(){                  // [3] anonymous function
        console.log(`saved 3`);
    }
};
user1.save1();
user1.save2();
user1.save3();
*/
// class User implements Settings, Back {}              // [class] uses  =>> more than one [interface]
class User {
    constructor(userName, theme, font) {
        this.userName = userName;
        this.theme = theme;
        this.font = font;
    }
    ;
    save1() {
        console.log(`saved`);
    }
    ;
    update() {
        console.log(`updated`);
    }
    ;
}
;
let userOne = new User("Ahmed", true, "Open Sans");
let userTwo = new User("Osama", false, "");
console.log(userOne.userName);
console.log(userOne.font);
userOne.save1();
userOne.update();
/*
    [1] interface Settings {
        save1(): string;                    // coma or semicolon
        save2: () => string;                // coma or semicolon
        save3(num: number): number          // coma or semicolon
        save4: (num: number) => number      // coma or semicolon
    };

    [2] class User {
        save1: () => void;                  // the only way
        constructor(){
            this.save1 = function(){
                console.log(`saved`);
            };
        };
        save2(){
            console.log(`saved 2`);
        };
        save3(): string {
            return `Hello`;
        };
    };

    [3] let obj1 = {
        save1: () => {          // the only way
            return `Hello`;
        };
    };
*/ 
//# sourceMappingURL=test.js.map