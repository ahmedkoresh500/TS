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

    * [undefined] written when calling function  =>> to call [default value]
*/

function showData(name = "UN", age, country = "UN"){
    return `${name} - ${age} -${country}`;
};

console.log( showData("Osama") );
console.log( showData(undefined, 40, "Egypt") );