const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/2741_N찍기/example.txt").toString().trim(); 

let result = "";
for(let i=inputData; i>0; i--){
	result += i + "\n";
}

console.log(result);