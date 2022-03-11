const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/Bronze_level/10951_A+B-4/example.txt").toString().split("\n"); 

let result = "";
let cnt = 0;
while(cnt<inputData.length){
	const num1 = parseInt(inputData[cnt].split(" ")[0]);
	const num2 = parseInt(inputData[cnt].split(" ")[1]);
	const sum = num1+num2;
	result += sum + "\n";
	cnt++;
}

console.log(result);