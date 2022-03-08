const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/11022_A+B-8/example.txt").toString().split("\n"); 

let result = "";
let cnt = 0;
for(let i=0; i<inputData.length; i++){
	const num1 = parseInt(inputData[i].split(" ")[0]);
	const num2 = parseInt(inputData[i].split(" ")[1]);

	if(!isNaN(num1) && !isNaN(num2)) {
		cnt++;
		result += "Case #" + cnt + ": " + num1 + " + " + num2 + " = " + (num1 + num2) + "\n";
	}
}

console.log(result);