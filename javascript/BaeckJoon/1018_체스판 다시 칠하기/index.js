const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/1018_체스판 다시 칠하기/example.txt').toString().split(" ");

function solution(arg){
	let result = 0;
	let num1 = Number(arg[0]);
	let num2 = Number(arg[1]);

	num1 = ((num1%10)*100) + (Math.floor((num1%100)/10)*10) + (Math.floor(num1/100));
	num2 = ((num2%10)*100) + (Math.floor((num2%100)/10)*10) + (Math.floor(num2/100));

	if(num1 > num2){
		result = num1;
	}else{
		result = num2
	}

	return result;
}

console.log(solution(inputData));