const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/1157_단어 공부/example.txt').toString().toUpperCase();

function solution(arg){
	let result = "";
	const alphaArr = [];
	for(let i=0; i<26; i++){
		alphaArr[i] = 0;
	}
	
	const text = arg.split("");
	for(let j=0; j<text.length; j++){
		alphaArr[text[j].charCodeAt(0) - 65] += 1;
	}

	const max = Math.max(...alphaArr);
	if(alphaArr.indexOf(max) !== alphaArr.lastIndexOf(max)){
		result = "?";
	}else{
		result = String.fromCharCode(alphaArr.indexOf(max)+65);
	}

	return result;
}

console.log(solution(inputData));