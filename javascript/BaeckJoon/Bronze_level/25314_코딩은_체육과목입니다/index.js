const fs = require('fs');
const inputData = fs.readFileSync("./example.txt").toString().trim();   

function solution(data){
    let result = "";
    const forN = Math.floor(data/4);
    for(let i=0; i<forN; i++){
        result += "long ";
    }

    result += "init";

    return result;
}

console.log(solution(inputData))