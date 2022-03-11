const fs = require('fs');
const inputData = fs.readFileSync("javascript/BaeckJoon/Bronze_level/1546_평균/example.txt").toString().split("\n"); 

const cnt = inputData[0];
const score = inputData[1].split(" ").map(function(i){
	return parseInt(i);
});
const max = Math.max(...score);

let sum = 0;
let avg = 0;
for(let i=0; i<cnt; i++){
	score[i] = score[i]/max*100;
	sum += score[i];
}

avg = sum/cnt;
console.log(avg)