/*
    * dataType: [alias type] [type alias]
*/

type st = string;

let name1: st = "Elzero";
name1 = "Osama";
// name1 = 100;             // different dataType  = syntax error

type stORnum = string | number;

let all: stORnum = 10;
all = 100;
all = "Ahmed";
// all = true;              // different dataType = syntax error
