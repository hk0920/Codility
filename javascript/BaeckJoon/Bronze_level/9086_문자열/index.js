"use strict";
const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim().split("\n");

function solution(data){
    const idx = Number(data[0]);
    let result = "";
    for(let i=1; i<data.length; i++){
        const word = data[i].toString().trim();
        const wordSize = word.length-1;

        const first = word.split("")[0];
        const last = word.split("")[wordSize];
        result += first + last + "\n";
    }

    return result;
}

console.log(solution(inputData));