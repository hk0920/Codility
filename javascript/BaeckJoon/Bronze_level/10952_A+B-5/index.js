const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/10952_A+B-5/example.txt").toString().split("\n"); 

let result = "";
let cnt = 0;
while(cnt<inputData.length){
	const num1 = parseInt(inputData[cnt].split(" ")[0]);
	const num2 = parseInt(inputData[cnt].split(" ")[1]);
	const sum = num1+num2;
	if(sum !== 0){
		result += sum + "\n";
	}else{
		break;
	}
	cnt++;
}

console.log(result);