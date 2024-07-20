/*
    * dataType: [alias type] [type alias] [advanced]:
*/

// [1] object
type buttons = {
    up: string,                         // coma or semicolon    =>> like interface
    right: string,                      // [,] or [;]           =>> like interface
    down: string;                       // [,] or [;]           =>> like interface
    left: string;                       // [,] or [;]           =>> like interface
};

// [2] inheritance
type last = buttons & {
    x: boolean                          // add at the end
};

function getActions(btns: last){
    console.log( `button up action = [${btns.up}]` );
    console.log( `button right action = [${btns.right}]` );
    console.log( `button down action = [${btns.down}]` );
    console.log( `button left action = [${btns.left}]` );
};

// [,] only is a must
getActions( {up: "go up", right: "go right", down:"go down", left: "go left", x: true} );
