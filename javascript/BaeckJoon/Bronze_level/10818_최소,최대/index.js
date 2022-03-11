const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/Bronze_level/10818_최소,최대/example.txt").toString().split("\n"); 

let cnt = inputData[0];
let arr = inputData[1].split(" ");

let min = Number(arr[0]);
let max = Number(arr[0]);
for(let i=1; i<cnt; i++){
	if(max < Number(arr[i])){
		max = Number(arr[i]);
	}
	if(min > Number(arr[i])){
		min = Number(arr[i]);
	}
}

console.log(min, max);