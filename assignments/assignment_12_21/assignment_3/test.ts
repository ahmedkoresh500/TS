/*
    * Assignment [3]: =>> Done

    * [interface] vs [alias type]:
        =>> [alias type] can't be re-opened
*/

// Write Your Code Here
type Info = {
    theName: string;            // like interface  =>> coma or semicolon
    theAge: number;             // like interface  =>> coma or semicolon
};

type Full = Info & {
    country: string,
};                              // the solution Done



// Do Not Edit Here
function showInfo(data: Info) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
};
console.log(showInfo({ theName: "Elzero", theAge: 40 }));

function showFullInfo(data: Full) {
    console.log(`The Name Is ${data.theName}`);
    console.log(`The Age Is ${data.theAge}`);
    console.log(`The Country Is ${data.country}`);
};
console.log(showFullInfo({ theName: "Elzero", theAge: 4, country: "Egypt" }));
