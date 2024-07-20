/*
    * [interface extends]: compare to [class extends] in JS
*/

/*
// [alias type]  =>> lesson [12] [13]
type buttons = {
    up: string,
    right: string,
}

type last = buttons & {
    down: string
    left: string
}
*/

interface User {
    id: number,                 // coma or semicolon
    userName: string;           // coma or semicolon
    country: string,            // coma or semicolon
};

/*
interface moderator extends User {
    role: string | number,
};
*/

interface moderator {
    role: string | number;
};

interface admin extends User, moderator {
    protect: boolean            // super admin
};

let user1: admin = {
    id: 25,
    userName: "Ahmed",
    country: "Egypt",
    role: "mod",
    protect: true
};

console.log(user1.id);
console.log(user1.protect);
