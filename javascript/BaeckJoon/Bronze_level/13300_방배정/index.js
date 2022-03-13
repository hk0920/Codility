const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Bronze_level/13300_방배정/example.txt').toString().split("\n");

function solution(arr, K){
	let result = 0;
	const multiArr = [
		[0,0],
		[0,0],
		[0,0],
		[0,0],
		[0,0],
		[0,0]
	];

	for(let i=0; i<multiArr.length; i++){
		let girl = 0;
		let boy = 0;
		for(let j=0; j<arr.length; j++){
			if(arr[j].level === (i+1)){
				if(arr[j].gender === 0){
					girl += 1;
				}else if(arr[j].gender === 1){
					boy += 1;
				}
				multiArr[i] = [girl, boy];
			}
		}
	}
	console.log(multiArr)

	// console.log(multiArr[1][0] / K)
	for(let i=0; i<multiArr.length; i++){
		for(let j=0; j<2; j++){
			result += Math.floor(multiArr[i][j] / K);
			console.log(multiArr[i][j] / K)

			if(multiArr[i][j] % K !== 0){
				result += 1;
			}
		}
	}

	return result;
}

const studentN = Number(inputData[0].split(" ")[0]);
const maxN = inputData[0].split(" ")[1];
const testArr = [];

for(let i=1; i<studentN+1; i++){
	const student = {
		gender:Number(inputData[i].split(" ")[0]),
		level:Number(inputData[i].split(" ")[1].trim())
	}
	testArr.push(student);
}

console.log(solution(testArr, maxN));