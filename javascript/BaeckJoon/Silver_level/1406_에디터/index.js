const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Silver_level/1406_에디터/example.txt').toString().split("\n");

function solution(str, N, arr){
	const strArr = str.trim().split("");

	let idx = strArr.length;
	for(let i=0; i<N; i++){
		const editorKey = arr[i].split(" ")[0];
		const editorText = arr[i].split(" ")[1];

		if(editorKey === "L"){
			if(!idx) continue;
			idx--;
		}else if(editorKey === "D"){
			if(idx === strArr.length) continue;
			idx++;
		}else if(editorKey === "B"){
			if(!idx) continue;
			if(editorText !== undefined){
				strArr.splice(idx-1, 1);
			}
			idx--;
		}else if(editorKey === "P"){
			if(editorText !== undefined){
				strArr.splice(idx, 0, editorText);
			}
			idx++;
		}
	}
	console.log(strArr)
	let result = "";
	for(let i=0; i<strArr.length; i++){
		result += strArr[i];
	}

	return result;
}

const initText = inputData[0];
const testNum = inputData[1];
const testEditor = [];
for(let i=0; i<testNum; i++){
	testEditor.push(inputData[i+2].trim());
}
// console.log(testEditor)
console.log(solution(initText, testNum, testEditor));