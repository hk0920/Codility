const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/2480_주사위세개/example.txt').toString().split('\n');

for(let i=0; i<inputData.length;  i++){
	const A = parseInt(inputData[i].split(" ")[0]);
	const B = parseInt(inputData[i].split(" ")[1]);
	const C = parseInt(inputData[i].split(" ")[2]);

	if(A === B && B === C && A === C){
		console.log(10000 + A * 1000);
	}else if(A === B){
		console.log(1000 + A * 100);
	}else if(A === C){
		console.log(1000 + A * 100);
	}else if(B === C){
		console.log(1000 + B * 100);
	}else{
		console.log(Math.max(A,B,C)*100);
	}
}
