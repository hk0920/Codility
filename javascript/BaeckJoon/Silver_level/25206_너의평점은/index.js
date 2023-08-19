const fs = require("fs");
const inputData = fs.readFileSync("./example.txt").toString().trim().split("\n");

// 전공과목별 (학점 × 과목평점)의 합을 학점의 총합으로 나눈 값

// 백준 OK / 로컬 OK
function solution(data){
	let result = 0;
	let sumScore = 0;

	for(let i=0; i<data.length; i++){
		const grade = data[i].split(" ")[2].toString().trim();
		const score = Number(data[i].split(" ")[1].toString().trim());
		let gradeN = 0;
		if(grade === "A+"){
			gradeN = 4.5;
		}else if(grade === "A0"){
			gradeN = 4.0;
		}else if(grade === "B+"){
			gradeN = 3.5;
		}else if(grade === "B0"){
			gradeN = 3.0;
		}else if(grade === "C+"){
			gradeN = 2.5;
		}else if(grade === "C0"){
			gradeN = 2.0;
		}else if(grade === "D+"){
			gradeN = 1.5;
		}else if(grade === "D0"){
			gradeN = 1.0; 
		}else if(grade === "P"){
			continue;
		}
		result += score * gradeN;
		sumScore += score;
	}
	if(sumScore > 0){
		result = result/sumScore;
	}

	return result.toFixed(6);
}

// 백준 No / 로컬 OK
function solution2(data){
	const gradeArr = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0"];
	const perfectScore = 4.5;
	let result = 0;
	let sumScore = 0;

	for(let i=0; i<data.length; i++){
		const grade = data[i].split(" ")[2].toString().trim();
		const score = Number(data[i].split(" ")[1].toString().trim());
		for(let j=0; j<gradeArr.length; j++){
			if(grade === gradeArr[j] && grade !== "P"){
				result += score * (perfectScore - (j * 0.5));
				sumScore += score;
			}
		}
	}
	if(sumScore > 0){
		result = result/sumScore;
	}

	return result.toFixed(6);
}

console.log(solution(inputData))

console.log(solution2(inputData))