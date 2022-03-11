const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/Bronze_level/8393_합/example.txt").toString().trim();   

let sum=0;
for(let i=1; i<=inputData; i++){
	sum += i;
}

console.log(sum);