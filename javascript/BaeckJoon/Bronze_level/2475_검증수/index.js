const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/2475_검증수/example.txt').toString();

function solution(arg){
	let result = 0;

	const numberArr = arg.split(" ");
	for(let i=0; i<numberArr.length; i++){
		result += (Number(numberArr[i])*Number(numberArr[i]));
	}

	return result%10;
}

console.log(solution(inputData));