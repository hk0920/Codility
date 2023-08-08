const fs = require('fs');
const inputData = fs.readFileSync("./example.txt").toString().trim().split("\n");   

function solution(data){
	const n = data[0].split(" ")[0];
	const m = data[0].split(" ")[1];
	let result = [];

	for(let i=0; i<n; i++){
		result.push(0);
	}

	for(let q=0; q<m; q++){
		const i = Number(data[q+1].split(" ")[0].trim()) - 1;
		const j = Number(data[q+1].split(" ")[1].trim());
		const k = Number(data[q+1].split(" ")[2].trim());
		
		for(let a=i; a<j; a++){
			result[a] = k;
		}
	}

	// console.log(n, m)
	result = result.join(" ");
	return result;
}

console.log(solution(inputData))