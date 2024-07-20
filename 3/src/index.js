/*
    * [3] create [tsconfig.json] file:

    * [tsc -h] = [tsc --help]

    * watch file changes:
        =>> [tsc -w]
        =>> [tsc --watch]
        =>> [tsc -w /c/xampp/htdocs/COURSES_TUTORIALS/courses/TS_course/3/index.ts]
        =>> [tsc --watch /c/xampp/htdocs/COURSES_TUTORIALS/courses/TS_course/3/index.ts]

    * create [tsconfig.json] file:
        =>> [tsc --init]
        [1] modules:
            =>> "rootDir": "./src/",

        [2] Emit:
            =>> "outDir": "./dist/",        =>> compilation directory
            =>> "sourceMap": true,          =>> related to debugging
            =>> "removeComments": true,     =>> not compile comments from [TS file] to [JS file]
            =>> "include": ["./src/"]

    * [in powershell] or [Git program]:
        =>> tsc                             =>> compiles [TS file] to [JS file]

    * [in terminal]:
        =>> npm install -g ts-node          =>> download [ts-node] package
        =>> ts-node index.ts                =>> to run code [in terminal]
        =>> node index.ts                   =>> to run code [in terminal]
        =>> node index.js                   =>> to run code [in terminal]
*/
console.log(Math.floor(100.15));
console.log("#".repeat(20));
