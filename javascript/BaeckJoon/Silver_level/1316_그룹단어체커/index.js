const fs = require("fs");
const inputData = fs.readFileSync("./example3.txt").toString().trim().split("\n");

function solution(data){
	let result = 0;
	const n = Number(data[0].trim());

	for(let i=1; i<=n; i++){
		let wordArr = data[i].trim().split("");
		let tempArr = [];
		let isGroup = true;

		for(let j=0; j<wordArr.length; j++){
			// console.log(tempArr.indexOf(wordArr[j]))
			if(tempArr.indexOf(wordArr[j]) < 0){
				tempArr.push(wordArr[j]);
			}else{
				if(tempArr.indexOf(wordArr[j]) < tempArr.length-1){
					isGroup = false;
					break;
				}
			}
		}
		if(isGroup){
			result++;
		}
	}
	
	
	return result;
}

console.log(solution(inputData));