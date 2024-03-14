const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : `${__dirname}/example.txt`;
const inputData = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(data){
    const word = data[0].trim();
    const wordIdx = Number(data[1])-1;

    const result = word.split("")[wordIdx];

    return result;
}

console.log(solution(inputData));