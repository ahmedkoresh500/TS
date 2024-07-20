/*
    * class: =>> implements interface:

    * [class fields] are public by default

    * comparison:
    [1] class inheritance       =>> [public] write or not  =>> specified in [base class] [abstract class]
    [2] implements interface    =>> [public] must write
*/

interface Settings {
    theme: boolean,
    font?: string;
    save1(): void;
    // save2(): void;
    // save3: () => void;
};


// class User implements Settings, Back {}              // [2] [class] uses  =>> more than [one interface]
class User implements Settings {                        // [1] [class] uses  =>> [one interface]
    constructor(public userName: string, public theme: boolean, public font: string){
        // empty constructor
    };
    save1(){                                    // [1] [direct function]
        // console.log(`saved ${userName}`);    // result = syntax error
        console.log(`saved [${this.userName}]`) // [outside constructor] [inside class]  =>> the only way
    };                                          // [this] is a must
    update(): void {                            // [2] [direct function]  =>> return type
        console.log(`updated`);
    };
};

let userOne = new User("Ahmed", true, "Open Sans");
let userTwo = new User("Osama", false, "");

console.log(userOne.userName);
console.log(userOne.font);
userOne.save1();
userOne.update();


// [***] object:
/*
let user1: Settings = {
    theme: true,
    font: "15",
    save1() {                           // [1] direct function
        console.log(`saved 1`);
    },
    save2: function(){                  // [2] anonymous function
        console.log(`saved 3`);
    },
    save3: () => {                      // [3] arrow function
        console.log(`saved 2`);
    }
};
user1.save1();
user1.save2();
user1.save3();
*/


/*
    [1] interface Settings {
        save1(): string;                    // coma or semicolon
        save2: () => string;                // coma or semicolon        [big fat arrow]
        save3(num: number): number,         // coma or semicolon
        save4: (num: number) => number,     // coma or semicolon        [big fat arrow]
    };

    [2] class User {
        save1: () => void;                  // [arrow function]  =>> the only way
        constructor(){
            this.save1 = function(){        // [anonymous function]
                console.log(`saved`);       // [this] is a must
            };
        };
        save2(){                            // direct function
            console.log(`saved 2`);
        };
        save3(): string {                   // direct function  =>> return type
            return `Hello`;
        };
    };

    [3] let obj1 = {            // [object]
        save1() {               // [1] direct function
            return `Hello 1`;
        },
        save3: function(){      // [2] anonymous function
            return `Hello 3`;
        }
        save2: () => {          // [3] arrow function
            return `Hello 2`;
        },
    };
*/
