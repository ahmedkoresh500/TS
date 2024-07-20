/*
    * install TS and transpiling:
        [1] install Nodejs                  =>> from official website [nodejs.org]
        [2] check nodejs installed          =>> [in terminal]  [Git program]
            =>> [node -v] = [node --version]    = [v20.15.0]
            =>> [npm -v] = [npm --version]      = [v10.7.0]
            =>> node                            =>> run code as in console
        [3] install typescript
            =>> [npm install -g concurrently]
            =>> [npm install -g liteserver]
            =>> [npm install -g typescript]
        [4] check typescript installed      =>> [in terminal] [Git program]
            =>> [tsc -v] = [tsc --version]      = [v5.5.3]

        [5] create [TS file]
        [6] compile [TS file]
            * 3 don't compile [TS file]:
            =>> [tsc index.ts]                                                        =>> 3 are the same
            =>> [tsc ./index.ts]                                                      =>> 3 are the same
            =>> [tsc /c/xampp/htdocs/COURSES_TUTORIALS/courses/TS_course/2/index.ts]  =>> 3 are the same
            
            =>> tsc                                         =>> compile [TS file] to [JS file]

            =>> [tsc] != [tsc index.ts]
            =>> [./]  =>> refers to current path
        [7] check TS playground

    * [npm] = node package manager
    
    * [in terminal]:
        =>> npm install -g ts-node          =>> download [ts-node] package
        =>> ts-node index.ts                =>> to run code [in terminal]
*/

console.log( Math.ceil(10.5) );
console.log( Math.floor(10.5) );
console.log(`${"#".repeat(20)}`);

console.log( Math.round(10.45) );           // first decimal number only
console.log( Math.round(10.451) );          // first decimal number only
console.log( Math.round(10.5) );            // first decimal number only
