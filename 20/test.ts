/*
    * dataType:
        [1] union type:
            [|] = [or]
        [2] intersection type:
            [&] = [and]
*/

/*
type buttons = {
    up: string;                     // like interface   =>> [,] or [;]
    right: string,                  // like interface   =>> [,] or [;]
    down: string,                   // like interface   =>> [,] or [;]
    left: string                    // like interface   =>> [,] or [;]
}

enum level {
    easy = 10,                      // [,] only
    mid = 5,                        // [,] only
    hard = 3                        // [,] only
}
*/

type st = string | number;              // [1] [union type]
let all: string | number = 100;         // [1] [union type]
type A = {
    one: string,
    two: number,
    three: boolean
};

type B = A & {                          // [2] [intersection type]
    four: number
};

type C = {
    five: boolean
};

type mix = A & C;                       // [2] [intersection type]

function getActions(btns: mix){
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
};

getActions({one: "type string", two: 100, three: true, five: true});
// getActions({one: "type string", two: 100, three: true, four: 50, five: true});   // four = syntax error
