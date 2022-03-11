const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Bronze_level/13300_방배정/example.txt').toString().split("\n");

function solution(arr, X){
	let result = 0;
	

	return result;
}

const studentN = Number(inputData[0].split(" ")[0]);
const maxN = inputData[0].split(" ")[1];
const testArr = [];

for(let i=1; i<studentN+1; i++){
	const student = {
		gender:Number(inputData[i].split(" ")[0]),
		level:Number(inputData[i].split(" ")[1].trim())
	}
	testArr.push(student);
}

console.log(solution(testArr, maxN));