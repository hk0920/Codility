const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/2525_오븐시계/example.txt').toString().split("\n");

for(let i=0; i<inputData.length; i++){
	let hour = parseInt(inputData[i].split(" ")[0]);
	let minute = parseInt(inputData[i].split(" ")[1]);
	let needTime = parseInt(inputData[i].split(" ")[2]);

	minute += needTime;
	while(minute >= 60){
		minute -= 60;
		hour += 1;
	}
	hour %= 24;

	console.log(hour + " " + minute);
}