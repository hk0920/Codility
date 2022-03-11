const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Bronze_level/10807_개수 세기/example.txt').toString().split('\n');    

function solution(arr, X){
	let result = 0;
	for(let i=0; i<arr.length; i++){
		if(X === arr[i]){
			result++;
		}
	}

	return result;
}

const testArr = inputData[1].split(" ");
const testX = inputData[2];

console.log(solution(testArr, testX));