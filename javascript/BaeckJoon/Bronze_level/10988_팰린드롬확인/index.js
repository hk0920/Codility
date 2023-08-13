const fs = require("fs");
const inputData = fs.readFileSync("./example2.txt").toString().trim();

function solution(word){
	let result = 0;
	const wordArr = word.split("");
	// console.log(wordArr.reverse().toString(), word)
	if(wordArr.reverse().join("") == word){
		result = 1;
	}

	return result;
}

console.log(solution(inputData));