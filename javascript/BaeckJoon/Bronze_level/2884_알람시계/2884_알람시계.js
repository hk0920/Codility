const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/2884_알람시계/example.txt').toString().split("\n");

for(let i=0; i<inputData.length; i++){
	let hour = parseInt(inputData[i].split(" ")[0]);
	let minute = parseInt(inputData[i].split(" ")[1]);

	minute -= 45;
	if(minute < 0){
		minute += 60;
		hour-=1;

		if(hour < 0) {
			hour = 23;
		}
	}

	console.log(hour + " " + minute);
}