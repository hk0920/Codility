const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/2439_별찍기-2/example.txt").toString().trim(); 

let result = "";
for(let i=0; i<=inputData; i++){
	for(let j=inputData; j>0; j--){
		if(i < j){
			result += " ";
		}else{
			result += "*";
		}
	}
	
	if(i !== inputData){
		result += "\n";
	}
}

console.log(result);