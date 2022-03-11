const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/14681_사분면/example.txt').toString().split("\n");

for(let i=0; i<inputData.length; i++){
	const A = inputData[i].split(" ")[0];
	const B = inputData[i].split(" ")[1];

	if(A > 0 && B > 0){
		console.log(1);
	}else if(A < 0 && B > 0){
		console.log(2);
	}else if(A < 0 && B < 0){
		console.log(3);
	}else if(A > 0 && B < 0){
		console.log(4);
	}
}

// 백준 fs로 사용하면 런 에러발생 => 해결
// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output : process.stdout
// });   

// let input = [];
// rl.on("line", function(line){
// 	input.push(parseInt(line));
// }).on("close", function(){
// 	const A = input[0];
// 	const B = input[1];

// 	if(A > 0 && B > 0){
// 		console.log(1);
// 	}else if(A < 0 && B > 0){
// 		console.log(2);
// 	}else if(A < 0 && B < 0){
// 		console.log(3);
// 	}else if(A > 0 && B < 0){
// 		console.log(4);
// 	}
// });