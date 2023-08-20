const fs = require("fs");
const inputData = fs.readFileSync("./example2.txt").toString().trim().split("\n");

function solution(data){
	let result = "";
	let max = 0;

	for(let i=0; i<data.length; i++){
		max = data[i].trim().split("").length;
		data[i] = data[i].trim().split("");
	}
	
	for(let i=0; i<max; i++){
		for(let j=0; j<data.length; j++){
			if(data[j][i] !== undefined){
				result += data[j][i]	
			}
		}
	}

	return result;
}

console.log(solution(inputData));