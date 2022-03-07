const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/10950_A+B-3/example.txt").toString().split("\n");   

for(let i=0; i<inputData.length; i++){
	const num1 = parseInt(inputData[i].split(" ")[0]);
	const num2 = parseInt(inputData[i].split(" ")[1]);

	// console.log(num1, num2);
	if(!isNaN(num1) && !isNaN(num2)){
		console.log(num1+num2);
	}
}

