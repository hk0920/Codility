const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/Bronze_level/2577_숫자의 개수/example.txt").toString().split("\n"); 

const A = Number(inputData[0]);
const B = Number(inputData[1]);
const C = Number(inputData[2]);

const num = A*B*C;
const numArr = num.toString().split("");

let result = "";
let cnt = 0;
for(let i=0; i<10; i++){
	for(let j=0; j<numArr.length; j++){
		if(i.toString() === numArr[j]){
			cnt++;
		}
	}
	result += cnt + "\n";
	cnt = 0;
}

console.log(result);
