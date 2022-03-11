const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/10808_알파벳 개수/example.txt").toString(); 

function solution(word){
	let result = "";
	const aCode = "a".charCodeAt(0);
	const zCode = "z".charCodeAt(0)+1;
	const wordArr = word.split(""); 
	
	for(let i=aCode; i<zCode; i++){
		let cnt = 0;
		for(let j=0; j<wordArr.length; j++){
			if(i === wordArr[j].charCodeAt(0)){
				cnt++;
			}
		}	
		result += cnt + " ";
	}

	return result;
}


console.log(solution("baekjoon"))
