const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Silver_level/1874_스택수열/example.txt').toString().split("\n");

function solution(K, arr){
	let result = 0;
	const resultArr = [];
	for(let i=0; i<K; i++){
		let cnt = 1;

		while(cnt < K){
			console.log(cnt, K)
			if(cnt < arr[i]){
				resultArr.push(cnt++);
			}
		}
	}

	console.log(resultArr);
	return result;
}

const testK = Number(inputData[0].trim());
const testArr = [];

for(let i=0; i<testK; i++){
	testArr.push(Number(inputData[i+1].trim()));
}
console.log(testArr)
console.log(solution(testK, testArr));