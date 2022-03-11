const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/Bronze_level/8958_OX퀴즈/example.txt").toString().split("\n"); 

const cnt = Number(inputData[0])+1;
let result = "";

for(let i=1; i<cnt; i++){
	const testCase = inputData[i].split("");
	let score = 0;
	let sum = 0;

	for(let j=0; j<testCase.length; j++){
		if(testCase[j] === "O"){
			score++;
			sum += score;
		}else{
			score = 0;
		}
	}
	result += sum + "\n";
}

console.log(result);