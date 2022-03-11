const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/Bronze_level/1152_단어의 개수/example.txt').toString().split("\n");

for(let i=0; i<inputData.length; i++){
	const text = inputData[i].split(" ");
	let cnt = 0;
	for(let j=0; j<text.length; j++){
		if(text[j] !== ""){
			cnt++;
		}
	}
	console.log(cnt)
}