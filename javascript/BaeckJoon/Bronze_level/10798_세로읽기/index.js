const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim().split("\n");

function solution(data){
	let result = "";

	for(let i=0; i<data.length; i++){
		const word = data[i].trim().split("");
		data[i] = word;
		// console.log(word)
		for(let j=0; j<word.length; j++){
			// console.log("?", data[j][i])
			result += data[j][i] || "";
		}
	}
	// console.log(data)

	return result;
}

console.log(solution(inputData));