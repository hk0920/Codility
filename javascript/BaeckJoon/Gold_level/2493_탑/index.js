const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Gold_level/2493_탑/example.txt').toString().split("\n");

function solution(N, txt){
	let result = "";
	const topArr = txt.split(" ").map((item) => { return Number(item)});

	const stack = new Array(N).fill(0);
	for(let i=N-1; i>=0; i--){
		let cnt = 1;
		while(true){
			if(topArr[i] < topArr[i-cnt]){
				// console.log(topArr[i-cnt]);
				stack[i] = topArr[i-cnt];
				break;
			}
			
			cnt++;

			if(cnt === N){
				break;
			}
		}
	}
	console.log(stack)
	
	stack.map(item=>{
		return result += topArr.indexOf(item)===-1 ? 0 + " " : topArr.indexOf(item)+1 + " ";
	})

	return result;
}

const testN = Number(inputData[0]);
const testTops = inputData[1];

console.log(solution(testN, testTops));