const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Silver_level/10773_제로/example.txt').toString().split("\n");

function solution(K, arr){
	let result = 0;
	let resultArr = [];
	for(let i=0; i<K; i++){
		if(arr[i] === 0){
			resultArr.pop();
		}else{
			resultArr.push(arr[i]);
		}
	}

	for(let i=0; i<resultArr.length; i++){
		result += resultArr[i];
	}
	return result;
}

const testK = Number(inputData[0].trim());
const testArr = [];

for(let i=0; i<testK; i++){
	testArr.push(Number(inputData[i+1].trim()));
}
console.log(solution(testK, testArr));