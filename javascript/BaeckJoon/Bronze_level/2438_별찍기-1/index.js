const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/2438_별찍기-1/example.txt").toString().trim(); 

let result = "";
for(let i=1; i<=inputData; i++){
	for(let j=0; j<i; j++){
		result += "*";
	}

	if(i !== inputData){
		result += "\n";
	}
}

console.log(result);