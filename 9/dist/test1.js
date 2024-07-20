"use strict";
/*
    * [in terminal]:
        =>> [tsc --init]        =>> create [tsconfig.json] file

        =>> [node test.ts]                              =>> 3 are the same  =>> doesn't work
        =>> [node ./test.ts]                            =>> 3 are the same  =>> doesn't work
        =>> [node /c/xampp/htdocs/TS_course/9/test.ts]  =>> 3 are the same  =>> doesn't work

        =>> [node /9/test.ts]                             =>> syntax error

    * [in terminal]:
        =>> [npm install -g ts-node]            =>> download [ts-node] package
        =>> ts-node test.ts                     =>> run code in terminal

    * when calling js function:
        [1] value
        [2] default value
        [3] undefined

    * [?] [optional operator] for [optional parameter] in TS function
    * [?] & [default value] =>> can't be together in the same [function parameter]
    * [required parameters] before [optional parameters]    =>> in TS function
                                                            =>> must be last one
*/
function showData(name = "UN", age, country) {
    return `${name} - ${age} -${country}`;
}
;
console.log(showData("Ahmed", 24));
console.log(showData(undefined, 40, "Egypt")); // no [default value]  =>> [undefined] = syntax error
//# sourceMappingURL=test1.js.map