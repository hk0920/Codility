const fs = require("fs");
const inputData = fs.readFileSync("./example2.txt").toString().trim().split(" ");

// 시간초과
function solution(a, b, v){
	let result = 0;
	let sum = a;

	for(let i=a; i<=v; i++){
		if(sum < v){
			sum -= b;
			result++;
		}
	}

	return result;
}

// Ok
function solution2(a, b, v){
	let result = 0;

	result = Math.ceil((v-b)/(a-b));

	return result;
}

const input1 = Number(inputData[0]);
const input2 = Number(inputData[1]);
const input3 = Number(inputData[2]);
console.log(solution(input1, input2, input3));
console.log(solution2(input1, input2, input3));