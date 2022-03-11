const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/Bronze_level/2562_최대값/example.txt").toString().split("\n"); 

let idx = 0;
let max = parseInt(inputData[0]);
for(let i=1; i<inputData.length; i++){
	const input = parseInt(inputData[i]);
	if(max < input){
		max = input;
		idx = i;
	}
}
console.log(max);
console.log(idx+1);