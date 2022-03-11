const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/Bronze_level/4344_평균은 넘겠지/example.txt").toString().split("\n"); 

const cnt = Number(inputData[0])+1;
for(let i=1; i<cnt; i++){
	const testCase = inputData[i].split(" ");
	const student = Number(testCase[0]);
	let sum = 0;
	let avg = 0;
	for(let j=1; j<student+1; j++){
		sum += Number(testCase[j]);
	}
	avg = sum/student;
	
	let winner = 0;
	for(let k=1; k<student+1; k++){
		if(avg < testCase[k]){
			winner++;
		}
	}

	let result = (100/student*winner).toFixed(3) + "%";
	console.log(result);
}