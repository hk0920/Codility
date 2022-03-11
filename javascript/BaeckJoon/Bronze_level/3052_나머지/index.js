const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/Bronze_level/3052_나머지/example.txt").toString().split("\n"); 

const arr = [];
for(let i=0; i<inputData.length; i++){
	const num = parseInt(inputData[i]) % 42;
	
	if(arr.indexOf(num) === -1){
		arr.push(num);
	}
}

console.log(arr.length);