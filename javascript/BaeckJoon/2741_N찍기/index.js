const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/2741_N찍기/example.txt").toString().trim(); 

let result = "";
for(let i=0; i<inputData; i++){
	result += (i+1) + "\n";
}

console.log(result);