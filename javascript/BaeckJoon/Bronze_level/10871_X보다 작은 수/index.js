const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/10871_X보다 작은 수/example.txt").toString().split("\n"); 

const N = parseInt(inputData[0].split(" ")[0]);
const X = parseInt(inputData[0].split(" ")[1]);
const arr = inputData[1].split(" ");

let result = "";

for(let i=0; i<N; i++){
	if(parseInt(arr[i]) < X){
		result += arr[i] + " ";
	}
}

console.log(result);