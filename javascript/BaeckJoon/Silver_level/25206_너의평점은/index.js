const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim().split("\n");

// 전공과목별 (학점 × 과목평점)의 합을 학점의 총합으로 나눈 값

function solution(data){
	const gradeArr = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"];
	let score = [];
	let result = 0;

	console.log(data.length)
	for(let i=0; i<data.length; i++){
		const grade = data[i].split(" ")[2].toString().trim();
		if(grade != "F"){
			const n = data[i].split(" ")[1];
			score.push(Number(n))
		}else{
			
		}
	}

	if(score.length == 0){
		result = result.toFixed(6);
	}

	return result;
	// console.log(score)
}

console.log(solution(inputData))