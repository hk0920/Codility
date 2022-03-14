const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Bronze_level/1919_애너그램 만들기/example.txt').toString().split("\n");

function solution(txt1, txt2){
	let result = 0;
	const alphaArr = new Array(26).fill(0);

	for(let i=0; i<txt1.split("").length; i++){
		alphaArr[txt1.split("")[i].charCodeAt(0) - 97]++;
	}
	for(let j=0; j<txt2.split("").length; j++){
		alphaArr[txt2.split("")[j].charCodeAt(0) - 97]--;
	}
	// console.log(alphaArr)
	
	for(let i=0; i<alphaArr.length; i++){
		if(alphaArr[i] < 0) {
			alphaArr[i] *=  -1;
		}
		result += alphaArr[i];
	}

	return result;
}

const str1 = inputData[0].trim();
const str2 = inputData[1].trim();
console.log(solution(str1, str2))