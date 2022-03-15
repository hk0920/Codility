const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Silver_level/1406_에디터/example.txt').toString().split("\n");

function solution(str, N, arr){
	const strArr = str.trim().split("");

	let idx = strArr.length+1;
	for(let i=0; i<N; i++){
		const editorKey = arr[i].split(" ")[0];
		const editorText = arr[i].split(" ")[1];

		if(editorKey === "L"){
			idx--;
		}else if(editorKey === "D"){
			idx++;
		}else if(editorKey === "B"){
			if(editorText !== undefined){
				strArr.splice(idx-1, 1);
			}
		}else if(editorKey === "P"){
			if(editorText !== undefined){
				strArr.splice(idx, 0, editorText);
			}
		}
	}
	console.log(strArr)
}

const initText = inputData[0];
const testNum = inputData[1];
const testEditor = [];
for(let i=0; i<testNum; i++){
	testEditor.push(inputData[i+2].trim());
}
// console.log(testEditor)
console.log(solution(initText, testNum, testEditor));