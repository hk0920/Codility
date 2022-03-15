const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Silver_level/10828_스택/example.txt').toString().split("\n");

function solution(N, arr){
	let result = "";
	const resultArr = [];
	for(let i=0; i<N; i++){
		const cmd = arr[i].split(",")[0];
		const val = arr[i].split(",")[1];
		if(cmd === "push"){
			resultArr.push(val);
		}else if(cmd === "pop"){
			if(resultArr.length === 0){
				result += -1 + "\n";
			}else {
				result += resultArr[resultArr.length-1] + "\n";
			}
			resultArr.pop();
		}else if(cmd === "size"){
			result += resultArr.length + "\n";
		}else if(cmd === "empty"){
			if(resultArr.length === 0){
				result += 1 + "\n";
			}else{
				result += 0 + "\n";
			}
		}else if(cmd === "top"){
			if(resultArr.length === 0){
				result += -1 + "\n";
			}else{
				result += resultArr[resultArr.length-1] + "\n"
			}
		}
	}

	return result;
}

const testN = inputData[0];
const testArr = [];
for(let i=0; i<testN; i++){
	const cmd = inputData[i+1].trim().split(" ")[0];
	const val = inputData[i+1].trim().split(" ")[1];
	testArr.push(cmd + "," + val);
}
// console.log(testArr)
console.log(solution(testN, testArr));