const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Bronze_level/2675_문자열반복/example.txt').toString().split("\n");

function solution(arg){
	let result = "";
	const testCase = arg.split("\n");
	for(let i=0; i<testCase.length; i++){
		const cnt = Number(testCase[i].split(" ")[0]);
		const text = testCase[i].trim().split(" ")[1];
		if(cnt !== 0 && text !== undefined){
			for(let j=0; j<text.split("").length; j++){
				for(let k=0; k<cnt; k++){
					result += text[j];
				}
			}
			result += "\n";
		}
	}
	return result;
}

console.log(solution(inputData));