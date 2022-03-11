const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Silver_level/1475_방번호/example.txt').toString().split("\n");

function solution(N){
	const roomN = N.split("");
	let arr = new Array(10).fill(0);

	for(let i=0; i<roomN.length; i++){
		if(roomN[i] === "6"){
			if(arr[roomN[i]] > arr[9]){
				arr[9]++;
			}else{
				arr[roomN[i]]++;
			}
		}else if(roomN[i] === "9"){
			if(arr[roomN[i]] > arr[6]){
				arr[6]++;
			}else{
				arr[roomN[i]]++;
			}
		}else{
			arr[roomN[i]]++;
		}
	}

	let max = Math.max(...arr);

	return max;
}

console.log(solution(inputData[0]));
console.log(solution(inputData[1]));
console.log(solution(inputData[2]));
console.log(solution(inputData[3]));