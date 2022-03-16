const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Silver_level/1874_스택수열/example.txt').toString().split("\n");

function solution(K, arr){
	let result = 0;
	let cnt = 2;
	let idx = 0;
	const resultArr = [];
	while(true){
		console.log("cnt=>" + cnt)
		if(cnt > arr[idx]){
			console.log(cnt, arr[idx]);
			resultArr.push(arr[idx]);
			cnt++;
			idx++;
		}else{
			console.log(cnt, arr[idx])
		}

		if(cnt === K){
			break;
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
console.log(solution(testK, testArr));