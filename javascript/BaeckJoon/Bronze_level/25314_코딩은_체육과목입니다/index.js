const fs = require('fs');
const inputData = fs.readFileSync("./example.txt").toString().trim();   

function solution(data){
    let result = "";

    while(data%4){
        result += "long ";
    }

    result += "init";

    return result;
}

console.log(solution(inputData))