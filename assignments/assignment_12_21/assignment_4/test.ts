/*
    * Assignment [4]: =>> Done
*/



function yesOrNo(val: number | boolean | string) : string {
    if(typeof val === "string"){
        return "Error";
    }else{
        if(val > 10){
            return "true";
        }else{
            return "false";
        };
    };
};

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False