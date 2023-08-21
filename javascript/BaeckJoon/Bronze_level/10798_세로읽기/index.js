const fs = require("fs");
const inputData = fs.readFileSync("./example2.txt").toString().trim().split("\n");

function solution(data){
	let result = "";
	let max = 0;
	let cnt = data.length;

	for(let i=0; i<cnt; i++){
		if(data[i].split("").length > max) max = data[i].split("").length;
		data[i] = data[i].split("");
	}

	// console.log(max, cnt)
	// console.log(data)
	
	for(let i=0; i<max; i++){
		for(let j=0; j<cnt; j++){
			if(data[j][i] !== undefined) result += data[j][i];
		}
	}

	return result;
}

console.log(solution(inputData));