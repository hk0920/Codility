const fs = require('fs');
const inputData = fs.readFileSync("./example.txt").toString().split("\n");   

let total = Number(inputData[0].trim());
let totalN = Number(inputData[1].trim());
let sum = 0;
let result = "";


for(let i=2; i<inputData.length; i++){
    const price = Number(inputData[i].split(" ")[0]);
    const number = Number(inputData[i].split(" ")[1]);

    sum += price*number;
}

console.log(total, sum)

if(total == sum) result = "Yes";
else result = "No";

console.log(result);