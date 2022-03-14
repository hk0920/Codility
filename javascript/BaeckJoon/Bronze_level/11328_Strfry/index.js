const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Bronze_level/11328_Strfry/example.txt').toString().split("\n");

function solution(arr, N){
	let result = "";

	for(let i=0; i<N; i++){
		const alphaArr = new Array(26).fill(0);
		const word1 = arr[i].split(",")[0].split("");
		const word2 = arr[i].split(",")[1].split("");
		for(let j=0; j<word1.length; j++){
			alphaArr[word1[j].charCodeAt(0) - 97]++;
		}
		for(let j=0; j<word2.length; j++){
			alphaArr[word2[j].charCodeAt(0) - 97]--;
		}

		// console.log(alphaArr)
		let isResult = true;
		for(let j=0; j<alphaArr.length; j++){
			if(alphaArr[j] != 0){
				isResult = false;
			}
		}
		
		// console.log(isResult)
		if(isResult){
			result += "Possible" + "\n";
		}else{
			result += "Impossible" + "\n";
		}
	}

	return result;
}

const testN = Number(inputData[0]);
const testArr = new Array(testN);
for(let i=0; i<testN; i++){
	const str1 = inputData[i+1].split(" ")[0].trim();
	const str2 = inputData[i+1].split(" ")[1].trim();
	testArr[i] = str1 + "," + str2;
}
// console.log(testArr)

console.log(solution(testArr, testN));