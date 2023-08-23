const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim().split(" ");

function solution(data){
    const n = Number(data[0]);
    const b = Number(data[1]);
    let result = "";

    while(n/b > 0){
        console.log(n/b)
    }

    return temp;
}
console.log(solution(inputData))