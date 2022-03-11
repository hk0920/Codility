const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Bronze_level/2793_구구단/example.txt').toString().trim();

for(let i=1; i<10; i++){
	console.log(inputData + " * " + i + " = " + inputData*i);
}
