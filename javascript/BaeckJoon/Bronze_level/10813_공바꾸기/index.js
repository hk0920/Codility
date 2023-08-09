const fs = require('fs');
const inputData = fs.readFileSync("./example.txt").toString().trim().split("\n");

function solution(data){
    let result = [];
    const n = data[0].split(" ")[0];
    const m = data[0].split(" ")[1];

    for(let i=0; i<n; i++){
        result.push(i+1);
    }

    for(let idx=1; idx<data.length; idx++){
        const i = Number(data[idx].split(" ")[0].trim()) - 1;
        const j = Number(data[idx].split(" ")[1].trim()) - 1;

        const num1 = result[i];
        const num2 = result[j];

        result[i] = num2;
        result[j] = num1;
    }

    result = result.join(" ");
    return result;
}

console.log(solution(inputData));