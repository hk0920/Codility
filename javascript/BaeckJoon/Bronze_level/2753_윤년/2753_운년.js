// const fs = require('fs');
// // const inputData = fs.readFileSync(0, "UTF-8").toString().split(" "); // 백준 입력 값
// // const inputData = fs.readFileSync('dev/stdin').toString().split(''); // 백준 한줄
// // const inputData = fs.readFileSync('dev/stdin').toString().split('\n'); // 백준 여러줄
// const inputData2 = fs.readFileSync('javascript/BaeckJoon/example.txt').toString().split('\n'); // vscode 테스트 시 

const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Bronze_level/2753_윤년/example.txt').toString().split("\n");

for(let i=0; i<inputData.length; i++){
	if(inputData[i]%4 === 0){
		if(inputData[i] % 100 !== 0 || inputData[i] % 400 === 0){
			console.log(1);
		}else{
			console.log(0);
		}
	}else{
		console.log(0);
	}
}