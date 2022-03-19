const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Silver_level/10845_큐/example.txt').toString().split("\n");

function solution(N, arr){
	
}

const testN = Number(inputData[0]);
const testArr = [];
for(let i=0; i<testN; i++){
	testArr.push(inputData[i+1].trim());
}
// console.log(testArr);

console.log(solution(testN, testArr));