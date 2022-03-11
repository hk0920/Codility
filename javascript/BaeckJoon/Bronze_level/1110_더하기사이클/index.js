const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/1110_더하기사이클/example.txt").toString().split("\n"); 

for(let i=0; i<inputData.length; i++){
	let num = parseInt(inputData[i]);
	let cnt = 0;
	while(true){
		const num1 = Math.floor(num/10); 
		const num2 = num%10; 
		num = num1+num2;
		const newNum = (num2*10) + (num%10);
		num=newNum;
		cnt++;
	
		if(num === parseInt(inputData[i])){
			console.log(cnt);
			break;
		}
	}
}
