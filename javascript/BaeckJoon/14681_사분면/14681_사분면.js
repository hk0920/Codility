const fs = require('fs');
const inputData = fs.readFileSync('javascript/BaeckJoon/14681_사분면/example.txt').toString().split("\n");

// for(let i=0; i<inputData.length; i++){
// 	const A = inputData[i].split(" ")[0];
// 	const B = inputData[i].split(" ")[1];

// 	if(A > 0 && B > 0){
// 		console.log(1);
// 	}else if(A < 0 && B > 0){
// 		console.log(2);
// 	}else if(A < 0 && B < 0){
// 		console.log(3);
// 	}else if(A > 0 && B < 0){
// 		console.log(4);
// 	}
// }

// const fs = require('fs');
// const inputData = fs.readFileSync('dev/stdin').toString().split('\n');

const A = inputData[0];
const B = inputData[1];

if(A > 0 && B > 0){
    console.log(1);
}else if(A < 0 && B > 0){
    console.log(2);
}else if(A < 0 && B < 0){
    console.log(3);
}else if(A > 0 && B < 0){
    console.log(4);
}
