const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim().split("\n");

function solution(data){
	let result = "";
	const n = Number(data[0].split(" ")[0]);
	const m = Number(data[0].split(" ")[1]);

	for(let i=1; i<=n; i++){
		let temp = [];
		for(let j=0; j<m; j++){
			const sum = Number(data[i].split(" ")[j]) + Number(data[m+i].split(" ")[j]);
			temp.push(sum)
		}
		result += temp.join(" ");
		if(i < n) result += "\n";
	}

	return result;
}
console.log(solution(inputData));