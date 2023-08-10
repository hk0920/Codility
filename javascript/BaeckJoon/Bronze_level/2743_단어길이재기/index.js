const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim();

function solution(word){
    const result = word.length;
    
    return result;
}
console.log(solution(inputData));