const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Bronze_level/11720_숫자의 합/example.txt').toString().split("\n");

const cnt = inputData[0];
const numArr = inputData[1].split("");
let sum = 0;
for(let i=0; i<cnt; i++){
	sum += Number(numArr[i]);
}

console.log(sum);