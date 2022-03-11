const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Bronze_level/2920_음계/example.txt').toString().split(" ");

function solution(arg){
	let result = "";
	let firstCnt = 0;
	let lastCnt = arg.length;
	for(let i=0; i<arg.length; i++){
		const num = Number(arg[i]);
		if(num === firstCnt+1){
			firstCnt++;
		}else if(num === lastCnt){
			lastCnt--;
		}
	}

	if(firstCnt === 8){
		result = "ascending";
	}else if(lastCnt === 1){
		result = "descending";
	}else{
		result = "mixed";
	}
	return result;
}

console.log(solution(inputData));